import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/main';
import WhatweDo from './pages/what-we-do/main';
import ReviveEarthPage from './pages/revive/main';
import PremiumContactForm from './pages/join/main';
import UpcomingEventsEmpty from './pages/events/main';
import ContactFounderPage from './pages/contact/main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatweDo />} />
        <Route path='/revive' element={<ReviveEarthPage />} />
        <Route path='/join' element={<PremiumContactForm />} />
        <Route path='/events' element={<UpcomingEventsEmpty />} />  
        <Route path='/contact' element={<ContactFounderPage />} />
      </Routes>
    </Router>
  );
}