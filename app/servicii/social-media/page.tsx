import type { Metadata } from 'next';
import SocialMediaContent from './SocialMediaContent';

export const metadata: Metadata = {
  title: 'Servicii Social Media | JurisProConsult - Strategie, Continut si Crestere',
  description:
    'Servicii profesionale de social media: continut personalizat, video-uri scurte, strategie de comunicare pentru Instagram, Facebook si TikTok. Pachete de la 200 EUR.',
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
