import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails, validateEmailConfig } from '../../../../utils/sendEmail';
import type { ContactFormData } from '../../../../emails/Contact';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    const { nombre: userName, email: userEmail, telefono: userPhone, servicio: serviceRequested, mensaje: userMessage } = body;
    
    if (!userName || !userEmail || !userPhone) {
      return NextResponse.json(
        { success: false, message: 'Nombre, email y teléfono son obligatorios' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      return NextResponse.json(
        { success: false, message: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation for Mexican numbers)
    const phoneRegex = /^[\d\s\-\(\)\+]{10,15}$/;
    if (!phoneRegex.test(userPhone)) {
      return NextResponse.json(
        { success: false, message: 'Formato de teléfono inválido' },
        { status: 400 }
      );
    }

    // Check email configuration
    const emailConfig = validateEmailConfig();
    if (!emailConfig.isValid) {
      console.error('Email configuration missing:', emailConfig.missingVars);
      return NextResponse.json(
        { success: false, message: 'Servicio de email temporalmente no disponible. Por favor contacta directamente por WhatsApp.' },
        { status: 500 }
      );
    }

    // Prepare form data
    const formData: ContactFormData = {
      userName: userName.trim(),
      userEmail: userEmail.trim().toLowerCase(),
      userPhone: userPhone.trim(),
      userMessage: userMessage?.trim() || '',
      serviceRequested: serviceRequested || 'Consulta general',
      submittedAt: new Date().toLocaleString('es-MX', {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
    };

    // Send emails
    const emailResult = await sendContactEmails(formData);

    if (emailResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Gracias por contactarnos. Hemos enviado una confirmación a tu email y nos pondremos en contacto contigo pronto.',
        data: {
          userName: formData.userName,
          userEmail: formData.userEmail,
          serviceRequested: formData.serviceRequested
        }
      });
    } else {
      // Even if emails fail, we don't want to show error to user
      // Log the error but return success with alternative contact info
      console.error('Email sending failed:', emailResult.error);
      
      return NextResponse.json({
        success: true,
        message: 'Gracias por contactarnos. Hemos recibido tu información y nos pondremos en contacto contigo pronto. Si es urgente, puedes contactarnos directamente por WhatsApp.',
        data: {
          userName: formData.userName,
          userEmail: formData.userEmail,
          serviceRequested: formData.serviceRequested,
          whatsappLink: `https://wa.me/522213374152?text=Hola, soy ${formData.userName} y envié un formulario de contacto. Me interesa ${formData.serviceRequested}.`
        }
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'Error interno del servidor. Por favor intenta de nuevo o contacta directamente por WhatsApp: (221) 337-4152'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
