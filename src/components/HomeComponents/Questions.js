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
        <h1>As perguntas mais frequentes!</h1>
        
              <Carousel className="slider" responsive={responsive} infinite={true} autoPlay={true} showDots={true}>
                    <CardItem
                            question='A mamografia dói?'
                            text='Algumas mulheres sentem desconforto e até alguma dor com a compressão das mamas. A dor é habitualmente passageira e desaparece no final do exame. Não hesite em manifestar o desconforto que poderá eventualmente sentir!'
                            id='1'
                            path={window.sessionStorage.getItem('login') ? '/Post/0' : '/log-in'}
                          />
                    <CardItem
                            question='O estilo de vida interfere no risco de cancro da mama?'
                            text='O cancro é reflexo da interação entre o ambiente genético e o ambiente externo. Deste modo, estilos de vida não-saudáveis são sempre fatores de risco para o cancro e para outras doenças. (Clique para continuar a ler)'
                            id='2'
                            path={window.sessionStorage.getItem('login') ? '/Post/4' : '/log-in'}
                          />
                    <CardItem
                            question='Quais são os direitos e benefícios sociais dos autistas?'
                            text='A Lei Berenice Pianas estipula que a pessoa com transtorno do espetro autista é considerada pessoa com deficiência para todos os efeitos legais, garantindo aos autistas as mesmas proteções do Estatuto da Pessoa com Deficiência.'
                            id='3'
                            path={window.sessionStorage.getItem('login') ? '/Post/5' : '/log-in'}
                          />
                    <CardItem
                            question='Há algo que deva fazer para aumentar o bem-estar e aprendizagem do meu filho com Síndrome de Down?'
                            text='Ao longo dos anos, os pais devem cuidar da saúde e desenvolvimento de uma criança com Down tanto quanto o fariam para uma criança que não possui a alteração genética. (Clique para continuar a ler)'
                            id='4'
                            path={window.sessionStorage.getItem('login') ? '/Post/3' : '/log-in'}
                          />
                    <CardItem
                            question='O meu filho com diabetes fica triste quando vai a festas de aniversário, pois não pode comer o que lá está. O que é que devo fazer?'
                            text='Para que a criança com diabetes não se sinta excluída nas festas de aniversário, pode-se oferecer doces/bolos feitos em casa, que não tenham alto teor de açúcar. (Clique para continuar a ler)'
                            id='5'
                            path={window.sessionStorage.getItem('login') ? '/Post/1' : '/log-in'}
                          />
                    <CardItem
                            question='A minha amiga tem anorexia. O que é que posso fazer para a ajudar?'
                            text='Leia muito sobre o assunto, pois vai precisar de argumentos para quando for conversar com ela. Dê-lhe segurança e proporcione-lhe momentos felizes. No entanto, o mais importante é NÃO A REPREENDA!'
                            id='6'
                            path={window.sessionStorage.getItem('login') ? '/Post/2' : '/log-in'}
                          />
            </Carousel> 
      </div>
      
    );
  }
}

export default Questions;
