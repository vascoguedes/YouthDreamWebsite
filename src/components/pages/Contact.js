import React from 'react';
import Footer from '../Footer';
import ContactForm from '../HomeComponents/ContactForm';
import Navbar from '../Navbar.js'

class Contact extends React.Component {

    render() {
      return (
      <>
        <Navbar/>
        <ContactForm/>
        <Footer/>
      </>
    );
    }    
}

export default Contact;