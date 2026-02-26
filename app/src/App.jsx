import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/main';
import WhatweDo from './pages/what-we-do/main';
import ReviveEarthPage from './pages/revive/main';
import PremiumContactForm from './pages/join/main';
import UpcomingEventsEmpty from './pages/events/main';
import ContactFounderPage from './pages/contact/main';
import OurPrograms from './pages/our-programs/main';
import LampBlueprint from './pages/blueprint/main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<WhatweDo />} />
        <Route path='/revive' element={<ReviveEarthPage />} />
        <Route path='/join' element={<PremiumContactForm />} />
        <Route path='/events' element={<UpcomingEventsEmpty />} />  
        <Route path='/contact' element={<ContactFounderPage />} />
        <Route path="/programs" element={<OurPrograms />} />
        <Route path="/blueprint" element={<LampBlueprint />} />
      </Routes>
    </Router>
  );
}