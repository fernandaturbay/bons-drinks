import React, { Component } from 'react';
import Form from './Form';
import Foto from '../../imagens/contact-pic.jpg';
import './Contatos.css';

export default class Contatos extends Component {


    render() {
        return (
            <main className="formGrid fade-in-left">

                <h1 className="formTitulo">Contato</h1>
                <img src={Foto} className="formFoto"></img>
                <Form className="form"/>

            </main>
        )
    }
}
