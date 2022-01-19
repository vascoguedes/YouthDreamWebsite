import React from 'react';
import '../../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

//<video src='/videos/video-1.mp4' autoPlay loop muted />
class HeroSection extends React.Component{

  render() {
    return (
      <div className='hero-container' id='herosection' data-spy="scroll" data-target="#navbar" data-offset="0">
        
        <h1>Youth Dream</h1>
      </div>
    );
  }
}

export default HeroSection;