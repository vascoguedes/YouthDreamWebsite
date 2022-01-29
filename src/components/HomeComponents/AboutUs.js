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
      <div className="AboutUs mt-5 row row-centered pos w-100" id='aboutUs' data-spy="scroll" data-target="#navbar" data-offset="0">
        
        <div className="container col-xl-7 col-lg-6 col-sm-8 pt-4">
          <div className="Title">Quem somos</div>
          <div className="AboutUs-description"> 
            A YOUTHDREAM é uma associação juvenil, fundada em junho de 2019, com o propósito de promover os Objetivos de Desenvolvimento Sustentável (ODS), das Nações Unidas.
            <br/>
            Seguindo a Agenda 2030 de 17 ODS, estabelecidos pela totalidade dos estados-membros da ONU, procuramos contribuir, através de iniciativas de divulgação e sensibilização, para a génese de uma sociedade digna, inclusiva e igualitária.
          </div>
        </div>    
        <Carousel className="slider col-xl-4 col-lg-5" responsive={responsive} infinite={true} autoPlay={true} showDots={true}>
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
