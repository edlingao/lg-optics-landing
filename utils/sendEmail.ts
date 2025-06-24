import { render } from '@react-email/components';
import sgMail from '@sendgrid/mail';
import { UserConfirmationEmail } from '../emails/UserConfirmation';
import { AdminNotificationEmail } from '../emails/AdminNotification';
import type { ContactFormData } from '../emails/Contact';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Send confirmation email to user and notification email to admin
 */
export async function sendContactEmails(formData: ContactFormData): Promise<EmailResponse> {
  try {
    // Validate required environment variables
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SENDGRID_API_KEY is not configured');
    }

    if (!process.env.ADMIN_EMAIL) {
      throw new Error('ADMIN_EMAIL is not configured');
    }

    // Render email templates
    const userEmailHtml = await render(UserConfirmationEmail({
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,
      userMessage: formData.userMessage,
      serviceRequested: formData.serviceRequested,
    }));

    const adminEmailHtml = await render(AdminNotificationEmail({
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,
      userMessage: formData.userMessage,
      serviceRequested: formData.serviceRequested,
      submittedAt: formData.submittedAt,
    }));

    // Prepare emails
    const userEmail = {
      to: formData.userEmail,
      from: {
        email: process.env.FROM_EMAIL || 'info@lg-optics.com',
        name: 'L&G OPTICS'
      },
      subject: `Confirmación de Contacto - L&G OPTICS | ${formData.serviceRequested}`,
      html: userEmailHtml,
      text: `Gracias por contactar a L&G OPTICS, ${formData.userName}. Hemos recibido tu solicitud de ${formData.serviceRequested} y nos pondremos en contacto contigo pronto. Teléfono: (221) 337-4152 | WhatsApp: https://wa.me/522213374152`,
    };

    const adminEmail = {
      to: process.env.ADMIN_EMAIL,
      from: {
        email: process.env.FROM_EMAIL || 'info@lg-optics.com',
        name: 'L&G OPTICS - Sistema'
      },
      subject: `🔔 Nuevo Cliente: ${formData.userName} - ${formData.serviceRequested}`,
      html: adminEmailHtml,
      text: `Nuevo cliente: ${formData.userName} (${formData.userEmail}, ${formData.userPhone}) solicita: ${formData.serviceRequested}. Mensaje: ${formData.userMessage || 'Sin mensaje'}. WhatsApp directo: https://wa.me/52${formData.userPhone?.replace(/\D/g, '')}`,
    };

    // Send emails
    const results = await Promise.allSettled([
      sgMail.send(userEmail),
      sgMail.send(adminEmail)
    ]);

    // Check results
    const userEmailResult = results[0];
    const adminEmailResult = results[1];

    if (userEmailResult.status === 'rejected') {
      console.error('Failed to send user email:', userEmailResult.reason);
    }

    if (adminEmailResult.status === 'rejected') {
      console.error('Failed to send admin email:', adminEmailResult.reason);
    }

    // Return success if at least one email was sent
    const userEmailSent = userEmailResult.status === 'fulfilled';
    const adminEmailSent = adminEmailResult.status === 'fulfilled';

    if (userEmailSent || adminEmailSent) {
      return {
        success: true,
        message: `Emails sent successfully. User: ${userEmailSent ? 'Sent' : 'Failed'}, Admin: ${adminEmailSent ? 'Sent' : 'Failed'}`
      };
    } else {
      throw new Error('Both emails failed to send');
    }

  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: 'Failed to send emails',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Send only user confirmation email (for testing or specific use cases)
 */
export async function sendUserConfirmation(formData: ContactFormData): Promise<EmailResponse> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SENDGRID_API_KEY is not configured');
    }

    const emailHtml = await render(UserConfirmationEmail({
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,
      userMessage: formData.userMessage,
      serviceRequested: formData.serviceRequested,
    }));

    const email = {
      to: formData.userEmail,
      from: {
        email: process.env.FROM_EMAIL || 'info@lg-optics.com',
        name: 'L&G OPTICS'
      },
      subject: `Confirmación de Contacto - L&G OPTICS`,
      html: emailHtml,
    };

    await sgMail.send(email);

    return {
      success: true,
      message: 'User confirmation email sent successfully'
    };

  } catch (error) {
    console.error('User email sending error:', error);
    return {
      success: false,
      message: 'Failed to send user confirmation email',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Send only admin notification email (for testing or specific use cases)
 */
export async function sendAdminNotification(formData: ContactFormData): Promise<EmailResponse> {
  try {
    if (!process.env.SENDGRID_API_KEY || !process.env.ADMIN_EMAIL) {
      throw new Error('Email configuration is incomplete');
    }

    const emailHtml = await render(AdminNotificationEmail({
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPhone: formData.userPhone,
      userMessage: formData.userMessage,
      serviceRequested: formData.serviceRequested,
      submittedAt: formData.submittedAt,
    }));

    const email = {
      to: process.env.ADMIN_EMAIL,
      from: {
        email: process.env.FROM_EMAIL || 'info@lg-optics.com',
        name: 'L&G OPTICS - Sistema'
      },
      subject: `🔔 Nuevo Cliente: ${formData.userName} - ${formData.serviceRequested}`,
      html: emailHtml,
    };

    await sgMail.send(email);

    return {
      success: true,
      message: 'Admin notification email sent successfully'
    };

  } catch (error) {
    console.error('Admin email sending error:', error);
    return {
      success: false,
      message: 'Failed to send admin notification email',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Validate email configuration
 */
export function validateEmailConfig(): { isValid: boolean; missingVars: string[] } {
  const requiredVars = ['SENDGRID_API_KEY', 'ADMIN_EMAIL'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  return {
    isValid: missingVars.length === 0,
    missingVars
  };
}
