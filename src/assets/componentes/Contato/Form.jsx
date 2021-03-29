import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {

    render() {
        return (

            <form className="formWrapper">
                <label className="formLabel"> Nome: </label>
                <input type="text" className="formItem-nome form-inputs"></input>
                <label className="form-label"> E-mail: </label>
                <input type="text" className="formItem-email form-inputs"></input>
                <label className="form-label"> Mensagem: </label>
                <textarea className="formItem-mensagem form-inputs textarea"> </textarea >
                <div className="form-div-botao">
                    <p className="formItem-vazio"></p>
                    <button className="formItem-botao">Enviar</button>
                </div>
            </form>

        )
    }
}
