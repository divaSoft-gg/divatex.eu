import HeroSection from "../../components/heroSection";
import OurClients from "../../components/ourClients";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <HeroSection />
      <OurClients />
    </div>
  );
}
