import React, {useState} from 'react';
import './ContactForm.css';

import Email from './../../images/email.png'

function ContactForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [questions, setQuestions] = useState('');

    return (
        <div id='contact' className='form-container-reg d-flex justify-content-center row row-centered m-0'>
            <ul class='circles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='pt-5'>
                <h1>ENTRA EM CONTACTO CONNOSCO!</h1>
            </div>
            <div className='d-flex justify-content-center '>
                <img src={Email} className='col-xl-2 col-lg-3 col-md-4 col-sm-5 d-none d-sm-block' style={{'object-fit':'contain', 'opacity':'0.8'}} />
                <form action="https://www.actionforms.io/e/r/vasco-guedes-test" method="any" href="/" className='col-xl-3 col-lg-4 col-md-5 col-sm-6 p-5'>
                    <input type='text' name='firstName' placeholder='Primeiro Nome' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <input type='text' name='lastName' placeholder='Último Nome' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <input type='text' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='text' name='questions' placeholder='Perguntas, dúvidas...' value={questions} onChange={(e) => setQuestions(e.target.value)}/>
                    <button className='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}


export default ContactForm;