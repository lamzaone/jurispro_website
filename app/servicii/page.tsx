import type { Metadata } from 'next';
import ServiciiContent from './ServiciiContent';

export const metadata: Metadata = {
  title: 'Servicii | JuridicConsult - Infiintare SRL, PFA, Consultanta Juridica, Social Media',
  description:
    'Servicii complete de infiintare SRL, infiintare PFA, modificari firma, consultanta juridica si servicii social media pentru antreprenori din Romania.',
};

export default function ServiciiPage() {
  return <ServiciiContent />;
}
