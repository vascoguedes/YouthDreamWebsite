import React from 'react';
import Footer from '../Footer';
import ContactForm from '../HomeComponents/ContactForm';
import Navbar from '../Navbar.js'

class Contact extends React.Component {

    render() {
      return (
      <>
        <meta name="theme-color" content="#ffffff"></meta>
        <Navbar/>
        <ContactForm/>
        <Footer/>
      </>
    );
    }    
}

export default Contact;