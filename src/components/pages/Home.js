import React from 'react';
import '../../App.css';
import Questions from '../HomeComponents/Questions';
import HeroSection from '../HomeComponents/HeroSection';
import AboutUs from '../HomeComponents/AboutUs.js';
import Footer from '../Footer';
import Navbar from '../Navbar.js'

class Home extends React.Component {

  render() {
    return (
    <>
      <Navbar/>
      <HeroSection />
      <AboutUs/>
      <Questions />
      <Footer />
    </>
  );
  }
  
}

export default Home;
