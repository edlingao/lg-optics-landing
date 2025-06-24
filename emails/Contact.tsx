// Re-export email templates for easy importing
export { default as UserConfirmationEmail } from './UserConfirmation';
export { default as AdminNotificationEmail } from './AdminNotification';

// Export types for email props
export interface ContactFormData {
  userName: string;
  userEmail: string;
  userPhone: string;
  userMessage?: string;
  serviceRequested: string;
  submittedAt?: string;
}

// Email template functions
export const createUserConfirmationEmail = (data: ContactFormData) => ({
  userName: data.userName,
  userEmail: data.userEmail,
  userPhone: data.userPhone,
  userMessage: data.userMessage,
  serviceRequested: data.serviceRequested,
});

export const createAdminNotificationEmail = (data: ContactFormData) => ({
  userName: data.userName,
  userEmail: data.userEmail,
  userPhone: data.userPhone,
  userMessage: data.userMessage,
  serviceRequested: data.serviceRequested,
  submittedAt: data.submittedAt || new Date().toLocaleString('es-MX', {
    timeZone: 'America/Mexico_City',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }),
});