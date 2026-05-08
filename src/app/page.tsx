import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsBar />
      <RoomsSection />
      <AmenitiesSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}
