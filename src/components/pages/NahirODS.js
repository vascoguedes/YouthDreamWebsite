import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar.js'
import building from '../../images/em_construção.jpg'

class NahirODS extends React.Component {

    render() {
      return (
      <>
        <Navbar/>
        <img class='nahirods_image w-100' src={building}/>
        <Footer/>
      </>
    );
    }    
}

export default NahirODS;