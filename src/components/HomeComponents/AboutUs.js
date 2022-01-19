import React from 'react';
import '../../App.css';
import './AboutUs.css';

//<video src='/videos/video-1.mp4' autoPlay loop muted />
class AboutUs extends React.Component {

  render() {
    return (
      <div className="AboutUs" id='aboutUs' data-spy="scroll" data-target="#navbar" data-offset="0">
        
        <h1>Quem Somos</h1>
        <div className="AboutUs-description"> 
          Somos um fórum para partilha de experiências, dicas e dúvidas na área da saúde. Queremos juntar as pessoas e fornecer um meio para conviverem com aqueles que vivem dias a dias semelhantes a si. <br/> Desde família, amigos, cuidadores até aos próprios doentes, qualquer um pode fazer parte deste fórum!
        </div>
      </div>
    );
  }
}

export default AboutUs;
