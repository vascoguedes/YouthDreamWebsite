import React from 'react';
import ContactForm from '../HomeComponents/ContactForm';
import Navbar from '../Navbar.js'

class Contact extends React.Component {

    render() {
      return (
      <>
        <Navbar/>
        <ContactForm/>
      </>
    );
    }    
}

export default Contact;