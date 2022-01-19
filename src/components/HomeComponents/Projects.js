import React from 'react';
import './Projects.css';

import ODS4 from '../../images/ods4.png'
import ODS14 from '../../images/ods14.png'
import ODS17 from '../../images/ods17.png'

class Projects extends React.Component {

    render() {

        return (
            <div id='projects' className='projects'>
                <h1>Os ODS nos nossos projetos</h1>
                <div className='container'>

                    <div className='project'>
                        <img src={ODS17} className='pic' />
                    </div>

                    <div className='project'>
                        <img src={ODS17} className='pic'/>
                    </div>

                    <div className='project'>
                        <img src={ODS4} className='pic'/>
                    </div>

                    <div className='project'>
                        <img src={ODS14} className='pic'/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects;
