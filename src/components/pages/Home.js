import React from 'react';
import '../../App.css';
import Questions from '../HomeComponents/Questions';
import HeroSection from '../HomeComponents/HeroSection';
import AboutUs from '../HomeComponents/AboutUs.js';
import Footer from '../Footer';
import Navbar from '../Navbar.js'
import Projects from '../HomeComponents/Projects';
import ContactForm from '../HomeComponents/ContactForm';

class Home extends React.Component {

  render() {
    return (
    <>
      <Navbar/>
      <HeroSection />
      <AboutUs/>
      <Projects/>
      <ContactForm/>
      <Footer />
    </>
  );
  }
  
}

export default Home;
