import React from 'react';
import '../../App.css';
import Questions from '../HomeComponents/Questions';
import HeroSection from '../HomeComponents/HeroSection';
import AboutUs from '../HomeComponents/AboutUs.js';
import Footer from '../Footer';
import Navbar from '../Navbar.js'
import Projects from '../HomeComponents/Projects';

class Home extends React.Component {

  render() {
    return (
    <>
      <meta name="theme-color" content="#ffffff"></meta>
      <Navbar/>
      <HeroSection />
      <AboutUs/>
      <Projects/>
      
      <Footer />
    </>
  );
  }
  
}

export default Home;
