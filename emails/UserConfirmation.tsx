import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface UserConfirmationEmailProps {
  userName?: string;
  userEmail?: string;
  userPhone?: string;
  userMessage?: string;
  serviceRequested?: string;
}

export const UserConfirmationEmail = ({
  userName = 'Cliente',
  userEmail = '',
  userPhone = '',
  userMessage = '',
  serviceRequested = 'Consulta general',
}: UserConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>
      ¡Gracias por contactar a L&G OPTICS! Nos pondremos en contacto contigo pronto.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header with Logo */}
        <Section style={logoSection}>
          <Img
            src="https://lg-optics.com/LG-OPTICS.png"
            width="200"
            height="80"
            alt="L&G OPTICS"
            style={logo}
          />
        </Section>

        {/* Main Content */}
        <Section style={content}>
          <Text style={title}>
            ¡Gracias por contactarnos, {userName}!
          </Text>
          
          <Text style={paragraph}>
            Hemos recibido tu solicitud de <strong>{serviceRequested}</strong> y nos pondremos en contacto contigo 
            en las próximas <strong>24 horas</strong> para agendar tu cita o resolver tus dudas.
          </Text>

          <Text style={paragraph}>
            <strong>Resumen de tu solicitud:</strong>
          </Text>

          <Section style={infoBox}>
            <Text style={infoText}>
              📧 <strong>Email:</strong> {userEmail}<br />
              📞 <strong>Teléfono:</strong> {userPhone}<br />
              🛍️ <strong>Servicio:</strong> {serviceRequested}
            </Text>
            {userMessage && (
              <Text style={infoText}>
                💬 <strong>Mensaje:</strong> {userMessage}
              </Text>
            )}
          </Section>

          <Text style={paragraph}>
            Mientras tanto, puedes contactarnos directamente:
          </Text>

          {/* Contact Buttons */}
          <Section style={buttonContainer}>
            <Button
              style={whatsappButton}
              href="https://wa.me/522213374152?text=Hola, envié un formulario de contacto y me gustaría agendar mi cita"
            >
              💬 WhatsApp Directo
            </Button>
            
            <Button
              style={phoneButton}
              href="tel:+522213374152"
            >
              📞 Llamar Ahora
            </Button>
          </Section>

          <Hr style={hr} />

          {/* Business Info */}
          <Section style={businessInfo}>
            <Text style={businessTitle}>L&G OPTICS - Cuidamos tu Visión</Text>
            <Text style={businessText}>
              📍 <strong>Dirección:</strong> Calle 45 Sur #2910 Local 1 PB, Nueva Antequera, Puebla 72180<br />
              ⏰ <strong>Horarios:</strong> Lun-Vie 11:00-18:00 | Sáb 11:00-15:00<br />
              📞 <strong>Teléfono:</strong> (221) 337-4152<br />
              ✉️ <strong>Email:</strong> info@lg-optics.com
            </Text>
          </Section>

          {/* Social Media */}
          <Section style={socialSection}>
            <Text style={socialTitle}>Síguenos en nuestras redes sociales:</Text>
            <Section style={socialButtons}>
              <Link
                href="https://www.instagram.com/lg.optics"
                style={socialButton}
              >
                📸 Instagram
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61571379852165"
                style={socialButton}
              >
                👥 Facebook
              </Link>
              <Link
                href="https://www.tiktok.com/@lg.optics?lang=es"
                style={socialButton}
              >
                🎵 TikTok
              </Link>
            </Section>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Text style={footer}>
            Este email fue enviado porque solicitaste información en nuestro sitio web.<br />
            Si no esperabas este email, puedes ignorarlo con seguridad.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default UserConfirmationEmail;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const logoSection = {
  padding: '20px 40px',
  textAlign: 'center' as const,
  backgroundColor: '#1e3a8a',
};

const logo = {
  margin: '0 auto',
};

const content = {
  padding: '40px 40px 20px 40px',
};

const title = {
  color: '#1e3a8a',
  fontSize: '28px',
  fontWeight: 'bold',
  lineHeight: '36px',
  marginBottom: '20px',
  textAlign: 'center' as const,
};

const paragraph = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  marginBottom: '16px',
};

const infoBox = {
  backgroundColor: '#eff6ff',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
  border: '1px solid #bfdbfe',
};

const infoText = {
  color: '#1e40af',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 8px 0',
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const whatsappButton = {
  backgroundColor: '#25d366',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 8px 8px 0',
};

const phoneButton = {
  backgroundColor: '#2563eb',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 8px 8px 0',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const businessInfo = {
  marginBottom: '24px',
};

const businessTitle = {
  color: '#1e3a8a',
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '12px',
  textAlign: 'center' as const,
};

const businessText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center' as const,
};

const socialSection = {
  textAlign: 'center' as const,
  marginBottom: '24px',
};

const socialTitle = {
  color: '#1e3a8a',
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '12px',
};

const socialButtons = {
  textAlign: 'center' as const,
};

const socialButton = {
  color: '#2563eb',
  fontSize: '14px',
  fontWeight: '500',
  textDecoration: 'none',
  padding: '8px 12px',
  margin: '0 4px',
  border: '1px solid #bfdbfe',
  borderRadius: '6px',
  display: 'inline-block',
  backgroundColor: '#eff6ff',
};

const footer = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
};