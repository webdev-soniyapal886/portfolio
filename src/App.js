
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Footer} from './components/Footer';
import {Hero} from './components/Hero';
import { About } from './components/About';
import PortfolioSection from './components/Portfolio';
import {Resume} from './components/Resume';
import {Services} from './components/Services';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">

   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  <Footer />
    </div>
  );
}

export default App;
