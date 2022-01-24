import React from 'react';
import './Projects.css';

import Education from '../../images/educationbuilders-logo.png'
import Lixo from '../../images/lixonao-logo.png'
import Nahir from '../../images/nahir-logo.png'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'

class Projects extends React.Component {

    render() {

        return (
            <div id='projects' className='projects row row-centered pos w-100 d-flex justify-content-center'>
                <h1>Os nossos projetos</h1>
                <div className='container row d-flex justify-content-center'>

                    <div className="flip-card col-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Nahir} style={{"width":"auto", "height":"100%"}}/>
                            </div>
                            <div className="flip-card-back">
                                <h1>Nahir e os ODS</h1>
                                <p>Architect Engineer</p>
                                <p>We love that guy</p>
                                <BsInstagram size={25} className='socialMedia' onClick={() => window.open('https://www.instagram.com/diariodanahir/')}/>
                                <button>Mais info</button>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card col-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Education} style={{"width":"auto", "height":"100%"}}/>
                            </div>
                            <div className="flip-card-back">
                                <h1>Education Builders</h1>
                                <p>Architect Engineer</p>
                                <p>We love that guy</p>
                                <BsInstagram size={25} className='socialMedia' onClick={() => window.open('https://www.instagram.com/educationbuilders/')}/>
                                <BsFacebook size={25} className='socialMedia' onClick={() => window.open('https://www.facebook.com/EducationBuildersYTHDRM')}/>
                                <BsLinkedin size={25} className='socialMedia' onClick={() => window.open('https://www.linkedin.com/company/educationbuilders/')}/>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card col-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={Lixo} style={{"width":"auto", "height":"100%"}}/>
                            </div>
                            <div className="flip-card-back">
                                <h1>Lixo Não</h1>
                                <p>Architect Engineer</p>
                                <p>We love that guy</p>
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
