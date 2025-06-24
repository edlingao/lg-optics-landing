import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface AdminNotificationEmailProps {
  userName?: string;
  userEmail?: string;
  userPhone?: string;
  userMessage?: string;
  serviceRequested?: string;
  submittedAt?: string;
}

export const AdminNotificationEmail = ({
  userName = 'Usuario',
  userEmail = '',
  userPhone = '',
  userMessage = '',
  serviceRequested = 'Consulta general',
  submittedAt = new Date().toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }),
}: AdminNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Nuevo cliente: {userName} solicita {serviceRequested} - L&G OPTICS
    </Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={headerSection}>
          <Img
            src="https://lg-optics.com/LG-OPTICS.png"
            width="150"
            height="60"
            alt="L&G OPTICS"
            style={logo}
          />
          <Text style={headerTitle}>Nueva Solicitud de Cliente</Text>
        </Section>

        {/* Alert Banner */}
        <Section style={alertBanner}>
          <Text style={alertText}>
            🔔 <strong>ACCIÓN REQUERIDA:</strong> Nuevo cliente requiere atención
          </Text>
        </Section>

        {/* Main Content */}
        <Section style={content}>
          <Text style={title}>
            Detalles del Cliente
          </Text>

          {/* Client Information */}
          <Section style={clientInfoBox}>
            <Text style={clientInfoTitle}>Información de Contacto</Text>
            
            <Section style={infoGrid}>
              <Text style={infoItem}>
                👤 <strong>Nombre:</strong> {userName}
              </Text>
              <Text style={infoItem}>
                📧 <strong>Email:</strong> {userEmail}
              </Text>
              <Text style={infoItem}>
                📞 <strong>Teléfono:</strong> {userPhone}
              </Text>
              <Text style={infoItem}>
                🛍️ <strong>Servicio Solicitado:</strong> {serviceRequested}
              </Text>
              <Text style={infoItem}>
                🕐 <strong>Fecha/Hora:</strong> {submittedAt}
              </Text>
            </Section>

            {userMessage && (
              <Section style={messageBox}>
                <Text style={messageTitle}>💬 Mensaje del Cliente:</Text>
                <Text style={messageText}>"{userMessage}"</Text>
              </Section>
            )}
          </Section>

          {/* Quick Actions */}
          <Text style={actionTitle}>Acciones Rápidas</Text>
          
          <Section style={buttonContainer}>
            <Button
              style={whatsappButton}
              href={`https://wa.me/52${userPhone?.replace(/\D/g, '')}?text=Hola ${userName}, soy del equipo de L%26G OPTICS. Recibimos tu solicitud de ${serviceRequested} y me gustaría agendar tu cita. ¿Cuándo te conviene venir?`}
            >
              💬 WhatsApp al Cliente
            </Button>
            
            <Button
              style={callButton}
              href={`tel:+52${userPhone?.replace(/\D/g, '')}`}
            >
              📞 Llamar Cliente
            </Button>
            
            <Button
              style={emailButton}
              href={`mailto:${userEmail}?subject=Confirmación de Cita - L%26G OPTICS&body=Hola ${userName},%0D%0A%0D%0AGracias por contactar a L%26G OPTICS. Me gustaría agendar tu cita para ${serviceRequested}.%0D%0A%0D%0A¿Cuándo te conviene venir a nuestra clínica?%0D%0A%0D%0ASaludos,%0D%0AEquipo L%26G OPTICS`}
            >
              ✉️ Email al Cliente
            </Button>
          </Section>

          <Hr style={hr} />

          {/* Service Priority */}
          <Section style={prioritySection}>
            <Text style={priorityTitle}>Prioridad del Servicio</Text>
            <Section style={priorityBox}>
              {getPriorityInfo(serviceRequested).map((info, index) => (
                <Text key={index} style={priorityText}>
                  {info}
                </Text>
              ))}
            </Section>
          </Section>

          <Hr style={hr} />

          {/* Footer Instructions */}
          <Section style={instructionsSection}>
            <Text style={instructionsTitle}>📋 Instrucciones</Text>
            <Text style={instructionsText}>
              1. <strong>Contactar al cliente en las próximas 4 horas</strong> (horario laboral)<br />
              2. Confirmar disponibilidad y agendar cita<br />
              3. Enviar recordatorio 24 horas antes de la cita<br />
              4. Actualizar el calendario de citas<br />
              5. Preparar expediente si es cliente nuevo
            </Text>
          </Section>

          {/* System Info */}
          <Text style={systemInfo}>
            Este email fue generado automáticamente por el sistema de L&G OPTICS.<br />
            Formulario enviado desde: lg-optics.com/contacto
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Helper function to determine service priority
const getPriorityInfo = (service: string) => {
  const priorities: { [key: string]: string[] } = {
    'examen-completo': [
      '🔴 ALTA PRIORIDAD - Examen completo requiere cita programada',
      '⏰ Tiempo estimado: 60 minutos',
      '📋 Preparar: Historia clínica, autorrefractómetro'
    ],
    'refraccion': [
      '🟡 MEDIA PRIORIDAD - Examen de refracción',
      '⏰ Tiempo estimado: 30 minutos',
      '📋 Preparar: Foróptero, cartilla de Snellen'
    ],
    'lentes-graduados': [
      '🟢 NORMAL - Consulta de lentes',
      '⏰ Tiempo estimado: 45 minutos',
      '📋 Preparar: Catálogo de armazones, muestras'
    ],
    'consulta': [
      '🟢 NORMAL - Consulta general',
      '⏰ Tiempo estimado: 30 minutos',
      '📋 Preparar: Información general de servicios'
    ]
  };
  
  return priorities[service] || priorities['consulta'];
};

export default AdminNotificationEmail;

// Styles
const main = {
  backgroundColor: '#f1f5f9',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '700px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

const headerSection = {
  backgroundColor: '#1e3a8a',
  padding: '20px 40px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto 10px auto',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0',
};

const alertBanner = {
  backgroundColor: '#fef2f2',
  borderLeft: '4px solid #ef4444',
  padding: '16px 20px',
  margin: '0',
};

const alertText = {
  color: '#dc2626',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
  textAlign: 'center' as const,
};

const content = {
  padding: '32px 40px',
};

const title = {
  color: '#1e3a8a',
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '32px',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const clientInfoBox = {
  backgroundColor: '#f8fafc',
  border: '2px solid #e2e8f0',
  borderRadius: '12px',
  padding: '24px',
  marginBottom: '24px',
};

const clientInfoTitle = {
  color: '#1e40af',
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '16px',
  textAlign: 'center' as const,
};

const infoGrid = {
  marginBottom: '16px',
};

const infoItem = {
  color: '#374151',
  fontSize: '15px',
  lineHeight: '22px',
  marginBottom: '8px',
  padding: '8px 12px',
  backgroundColor: '#ffffff',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
};

const messageBox = {
  backgroundColor: '#fffbeb',
  border: '1px solid #f59e0b',
  borderRadius: '8px',
  padding: '16px',
  marginTop: '16px',
};

const messageTitle = {
  color: '#92400e',
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const messageText = {
  color: '#78350f',
  fontSize: '14px',
  lineHeight: '20px',
  fontStyle: 'italic',
  margin: '0',
};

const actionTitle = {
  color: '#1e3a8a',
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '16px',
  textAlign: 'center' as const,
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const whatsappButton = {
  backgroundColor: '#25d366',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 20px',
  margin: '0 4px 8px 4px',
};

const callButton = {
  backgroundColor: '#2563eb',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 20px',
  margin: '0 4px 8px 4px',
};

const emailButton = {
  backgroundColor: '#7c3aed',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 20px',
  margin: '0 4px 8px 4px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const prioritySection = {
  marginBottom: '24px',
};

const priorityTitle = {
  color: '#1e3a8a',
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '12px',
  textAlign: 'center' as const,
};

const priorityBox = {
  backgroundColor: '#fef3c7',
  border: '1px solid #f59e0b',
  borderRadius: '8px',
  padding: '16px',
};

const priorityText = {
  color: '#92400e',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '4px',
};

const instructionsSection = {
  backgroundColor: '#eff6ff',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '24px',
};

const instructionsTitle = {
  color: '#1e40af',
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '12px',
};

const instructionsText = {
  color: '#1e40af',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const systemInfo = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
  fontStyle: 'italic',
};