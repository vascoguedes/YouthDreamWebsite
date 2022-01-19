import React from 'react';
import './ContactForm.css';

import {Form, Button} from 'react-bootstrap';
import ODS from '../../images/sdgs.png'

class ContactForm extends React.Component {

    render() {

        return (
            <div id='contact' className='ContactFormContainer'>
                <Form className='ContactForm'>
                    <h1>Fala Connosco</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="nome" placeholder="Nome..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="E-mail..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Assunto</Form.Label>
                        <Form.Control type="assunto" placeholder="Assunto..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control type="mensagem" placeholder="Mensagem..." />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <img className='pic' src={ODS}/>
            </div>
        )
    }
}


export default ContactForm;