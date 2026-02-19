import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </Router>
  );
}