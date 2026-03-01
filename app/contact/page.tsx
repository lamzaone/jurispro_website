import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact | JurisProConsult - Solicita oferta gratuita',
  description:
    'Contacteaza-ne pentru o oferta personalizata gratuita. Infiintare SRL, PFA, modificari firma si consultanta juridica pentru antreprenori.',
};

export default function ContactPage() {
  return <ContactContent />;
}
