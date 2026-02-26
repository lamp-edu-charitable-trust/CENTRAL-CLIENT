import FlagshipPrograms from "./components/flagship"
import HyperPremiumHero from "./components/hero"
import ImpactSection from "./components/impact"
import OurProgramsDetailed from "./components/moredetails"
import Footer from "../../components/footer"
import Navbar from "../../components/nav"
import CoreBeliefsLight from "./components/core"
import ImpactTrackRecord from "./components/track"
import LeadershipBoard from "./components/leadership"
import TransparencyCredentials from "./components/transparency"
import PartnersCollaborators from "./components/final"

export default function WhatweDo(){
    return (
        <>
        <Navbar />
        <HyperPremiumHero />
        <FlagshipPrograms />
        <OurProgramsDetailed />
        <ImpactSection />
        <CoreBeliefsLight />
        <ImpactTrackRecord />
        <LeadershipBoard />
        <TransparencyCredentials />
        <PartnersCollaborators />
        <Footer />

        </>
    )
}

