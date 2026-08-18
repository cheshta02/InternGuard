import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import PagesPreview from "../components/home/PagesPreview";
import Testimonials from "../components/home/Testimonials";
import Disclaimer from "../components/home/Disclaimer";
import "../styles/home.css";
function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <PagesPreview />
      <FeaturesSection />
      <Testimonials />
      <Disclaimer />
    </main>
  );
}

export default Home;
