import React from 'react';
import './Projects.css';

import Education from '../../images/educationbuilders-logo.png'
import Lixo from '../../images/lixonao-logo.png'
import Nahir from '../../images/nahir-logo.png'

class Projects extends React.Component {

    render() {

        return (
            <div id='projects' className='projects'>
                <h1>Os nossos projetos</h1>
                <div className='container'>

                    <div className='project'>
                        <img src={Nahir} className='pic'/>
                    </div>

                    <div className='project'>
                        <img src={Education} className='pic'/>
                    </div>

                    <div className='project'>
                        <img src={Lixo} className='pic'/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects;
