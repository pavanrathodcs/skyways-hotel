import HeroSection      from "@/components/HeroSection";
import RoomsSection     from "@/components/RoomsSection";
import WhyStaySection   from "@/components/WhyStaySection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import LocationSection  from "@/components/LocationSection";
import ReviewsSection   from "@/components/ReviewsSection";
import FAQSection       from "@/components/FAQSection";
import FinalCTA         from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RoomsSection />
      <WhyStaySection />
      <AmenitiesSection />
      <ExperienceSection />
      <LocationSection />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
