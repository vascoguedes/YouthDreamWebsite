import React from 'react';
import './Projects.css';

import Education from '../../images/educationbuilders-logo.png'
import Lixo from '../../images/lixonao-logo.png'
import Nahir from '../../images/nahir-logo.png'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'

class Projects extends React.Component {

    render() {

        return (
            <div id='projects' className='projects row w-100 pos d-flex justify-content-center'>
                <h1>Os nossos projetos</h1>
                <div className='container row d-flex justify-content-center'>
                    <div className="flip-card col-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Nahir} style={{"width":"auto", "height":"100%"}}/>
                            </div>
                            <div className="flip-card-back row row-centered p-2">
                                <h1>Nahir e os ODS</h1>
                                <p>O Livro pretende levar o conceito de desenvolvimento sustentável ao maior número de crianças possível, sendo transversal aos 17 ODS.</p>
                                <div>
                                    <BsInstagram size={25} className='socialMedia' onClick={() => window.open('https://www.instagram.com/diariodanahir/')}/>
                                    <button onClick={() => window.location.href = "/Nahir&ODS"}>Mais info</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card col-4 mt-md-0 mt-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Education} style={{"width":"auto", "height":"100%"}}/>
                            </div>
                            <div className="flip-card-back row row-centered p-3">
                                <h1>Education Builders</h1>
                                <p>Projeto dedicado ao Sistema Educativo Português que trabalha os ODS 4, 8 e 11.</p>
                                <div>
                                    <BsInstagram size={25} className='socialMedia' onClick={() => window.open('https://www.instagram.com/educationbuilders/')}/>
                                    <BsFacebook size={25} className='socialMedia' onClick={() => window.open('https://www.facebook.com/EducationBuildersYTHDRM')}/>
                                    <BsLinkedin size={25} className='socialMedia' onClick={() => window.open('https://www.linkedin.com/company/educationbuilders/')}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card col-4 mt-lg-0 mt-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Lixo} style={{"width":"auto", "height":"100%"}}/>
                            </div>
                            <div className="flip-card-back row row-centered p-3">
                                <h1>Lixo Não</h1>
                                <p>Projeto que visa o combate à poluição, promovendo os ODS 13, 14 e 15.</p>
                                <BsInstagram size={25} className='socialMedia' onClick={() => window.open('https://www.instagram.com/lixo_nao/')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects;
