import React from 'react';
import '../../App.css';
import './AboutUs.css';
import Carousel from "react-multi-carousel";

import historia0 from "../../images/1.jpg"
import historia1 from "../../images/2.jpg"
import historia2 from "../../images/3.jpg"
import historia3 from "../../images/4.jpg"
import historia4 from "../../images/5.jpg"
import historia5 from "../../images/6.jpg"
import historia6 from "../../images/7.jpg"
import historia7 from "../../images/8.jpg"

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
      <div className="AboutUs mt-5 pos w-100" id='aboutUs' data-spy="scroll" data-target="#navbar" data-offset="0">
        <div className='container-fluid row w-100 d-flex justify-content-center align-items-center'>

          <div className=" col-xl-5 col-lg-6 col-md-8 col-sm-8 col-12 pt-4 p-sm-5 p-3 m-0 text-center">
            <div className="Title">Quem somos</div>
            <div className="AboutUs-description"> 
              A YOUTHDREAM é uma associação juvenil, fundada em junho de 2019, com o propósito de promover os Objetivos de Desenvolvimento Sustentável (ODS), das Nações Unidas.
              <br/>
              Seguindo a Agenda 2030 de 17 ODS, estabelecidos pela totalidade dos estados-membros da ONU, procuramos contribuir, através de iniciativas de divulgação e sensibilização, para a génese de uma sociedade digna, inclusiva e igualitária.
            </div>
          </div>    
          <Carousel className="slider col-xl-5 col-lg-6 col-md-7 p-5 m-0" responsive={responsive} infinite={true} autoPlay={true} showDots={true}>
            <img className="pic" src={historia0} />
            <img className="pic" src={historia1} />
            <img className="pic" src={historia2} />
            <img className="pic" src={historia3} />
            <img className="pic" src={historia4} />
            <img className="pic" src={historia5} />
            <img className="pic" src={historia6} />
            <img className="pic" src={historia7} />
          </Carousel>
        </div>  
      </div>
    );
  }
}

export default AboutUs;
