import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/About';
import Footer from './components/Footer';

function App() {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <Router >
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection/>
      <AboutSection/>
      <Footer/>
    </Router>
  );
}

export default App;
