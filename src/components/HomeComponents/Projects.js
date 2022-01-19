import React from 'react';
import './Projects.css';

class Projects extends React.Component {

    render() {

        return (
            <div className='projects'>
                <h1>Os nossos projetos</h1>
                <div className='container'>

                    <div className='project1'>

                        <div className='title'>Onde estão os ODS?</div>
                    </div>

                    <div className='project2'>
                        <div className='title'>Nahir e os ODS</div>
                    </div>

                    <div className='project3'>
                        <div className='title'>Education Builders</div>
                    </div>

                    <div className='project4'>
                        <div className='title'>Lixo Não</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects;
