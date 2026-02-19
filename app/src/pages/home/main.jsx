import Navbar from "../../components/nav";
import HeroSection from "./components/hero";
import ProblemSection from "./components/problem";
import StoryHero from "./components/story";
import BeliefsSection from "./components/beliefs";
import ApproachSection from "./components/approach";
import ProjectsSection from "./components/projects";
import SustainabilitySection from "./components/sustainability";
import ImpactSection from "./components/impact";
import Support from "./components/final";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <StoryHero />
    <ProblemSection />
    <BeliefsSection />
    <ApproachSection />
    <ProjectsSection />
    <SustainabilitySection />
    <ImpactSection />
    <Support />
    <Footer/>
    </>
  );
}