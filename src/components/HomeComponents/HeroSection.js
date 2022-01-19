import React from 'react';
import '../../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

//<video src='/videos/video-1.mp4' autoPlay loop muted />
class HeroSection extends React.Component{

  render() {
    return (
      <div className='hero-container' id='herosection' data-spy="scroll" data-target="#navbar" data-offset="0">
        
        <h1>UMA COMUNIDADE</h1>
        <br/><br/><br/><br/>
        <h1>REVOLUCIONÁRIA</h1>
        <p>Junta-te a nós</p>
        <div className='hero-btns'>
          <Link
            to='/log-in'
            className="entrar-button"
          >
            ENTRAR
          </Link>
        </div>
      </div>
    );
  }
}

export default HeroSection;