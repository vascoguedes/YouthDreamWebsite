import React, {useState} from 'react';
import './ContactForm.css';

import Email from './../../images/email.png'
import emailjs from 'emailjs-com'

import{ init } from '@emailjs/browser';
init("user_43Zv967Kq4VpXGOYMUBgJ");

function ContactForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [questions, setQuestions] = useState('');

    const send = () => {

        const serviceId = 'service_lvbui56';
        const templateId = 'template_67d6zd2';
        const userId = 'user_43Zv967Kq4VpXGOYMUBgJ';
        const templateParams = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            questions: questions,
        };
    
        emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            })
    
        setFirstName('');
        setLastName('');
        setEmail('');
        setQuestions('');

        window.location.href = '/';
    }

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
                <div method="any" href="/" className='col-xl-3 col-lg-4 col-md-5 col-sm-6 p-5'>
                    <input type='text' name='firstName' placeholder='Primeiro Nome' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <input type='text' name='lastName' placeholder='Último Nome' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <input type='text' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='text' name='questions' placeholder='Perguntas, dúvidas...' value={questions} onChange={(e) => setQuestions(e.target.value)}/>
                    <button className='submit' onClick={send}>Enviar</button>
                </div>
            </div>
        </div>
    )
}


export default ContactForm;