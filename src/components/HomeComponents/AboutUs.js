import React from 'react';
import Logo from "../../images/team.jpg";
import '../../App.css';
import './AboutUs.css';

//<video src='/videos/video-1.mp4' autoPlay loop muted />
class AboutUs extends React.Component {

  render() {
    return (
      <div className="AboutUs" id='aboutUs' data-spy="scroll" data-target="#navbar" data-offset="0">
        
        <div className="container">
          <h1>Quem Somos</h1>
          <div className="AboutUs-description"> 
            A YOUTH DREAM é uma associação juvenil fundada em junho de 2019 com o propósito de promover os Objetivos de Desenvolvimento Sustentável (ODS). Estes objetivos, adotados pela quase totalidade dos países do mundo, no contexto das Nações Unidas, definem as prioridades e aspirações do Desenvolvimento Sustentável Global para 2030.  Foi uma jovem gaiense de 17 anos, Beatriz Couto, que decidiu dar voz a este projeto e de o projetar depois com um conjunto de 8 jovens com capacidades e habilidades únicas que tornaram depois um projeto numa associação coesa e comprometida em agir com jovens e para jovens, para todos juntos transformarmos o Mundo em nome dos Povos e do Planeta, seguindo a Agenda 2030.
          </div>
        </div>  
        <img className="teampic" src={Logo} />      
      </div>
    );
  }
}

export default AboutUs;
