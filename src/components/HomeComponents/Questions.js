import React from 'react';
import './Questions.css';
import CardItem from './CardItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Questions extends React.Component {

  render() {

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    
    return (

      <div className='cards' id='questions' data-spy="scroll" data-target="#navbar" data-offset="0">
        <h1>Os nossos projetos</h1>
        
              <Carousel className="slider" responsive={responsive} infinite={true} autoPlay={true} showDots={true}>
                    <CardItem
                            question='Nahir e os ODS'
                            id='1'
                          />
                    <CardItem
                            question='Education Builders'
                            id='1'
                          />
                    <CardItem
                            question='Lixo Não'
                            id='1'
                          />
                    <CardItem
                            question='Onde estão os ODS?'
                            id='1'
                          />
            </Carousel> 
      </div>
      
    );
  }
}

export default Questions;
