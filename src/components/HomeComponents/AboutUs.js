import React from 'react';
import '../../App.css';
import './AboutUs.css';
import Carousel from "react-multi-carousel";

import historia0 from "../../images/historia0.jpg"
import historia1 from "../../images/historia1.jpg"
import historia2 from "../../images/historia2.jpg"
import historia3 from "../../images/historia3.jpg"

class AboutUs extends React.Component {
  
  render() {

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };

    return (
      <div className="AboutUs mt-5 row row-centered pos" id='aboutUs' data-spy="scroll" data-target="#navbar" data-offset="0">
        
        <div className="container col-md-7 pt-4">
          <div className="Title">Quem somos</div>
          <div className="AboutUs-description"> 
            A YOUTH DREAM é uma associação juvenil fundada em junho de 2019 com o propósito de promover os Objetivos de Desenvolvimento Sustentável (ODS). Estes objetivos, adotados pela quase totalidade dos países do mundo, no contexto das Nações Unidas, definem as prioridades e aspirações do Desenvolvimento Sustentável Global para 2030.  Foi uma jovem gaiense de 17 anos, Beatriz Couto, que decidiu dar voz a este projeto e de o projetar depois com um conjunto de 8 jovens com capacidades e habilidades únicas que tornaram depois um projeto numa associação coesa e comprometida em agir com jovens e para jovens, para todos juntos transformarmos o Mundo em nome dos Povos e do Planeta, seguindo a Agenda 2030.
          </div>
        </div>    
        <Carousel className="slider col-md-4" responsive={responsive} infinite={true} autoPlay={true} showDots={true}>
          <img className="pic" src={historia0} />
          <img className="pic" src={historia1} />
          <img className="pic" src={historia2} />
          <img className="pic" src={historia3} />
        </Carousel>  
      </div>
    );
  }
}

export default AboutUs;
