import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import Benefits from '@/components/sections/Benefits';
import SocialProof from '@/components/sections/SocialProof';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

/**
 * Home page — Landing page optimized for lead generation.
 * Each section is strategically placed to build trust and drive conversions.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Benefits />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
