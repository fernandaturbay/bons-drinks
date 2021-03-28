import React from 'react'
import Botao from '../Button/Button'
import "./estiloDrinks.css"
import {requisicao} from "../../../model/arquivoFetch"
import {useState, useEffect} from 'react'

export default function BuscarDrinks() {
    const [dadosApi, setDadosApi] = useState("");
    
    useEffect(async () => {
        const req = await requisicao();
        setDadosApi(req);
        console.log(req)
      }, []);

    const arrMap = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className = "gridApi">
            <section className= "cabecalho">

                <div className="drink1">
                    <h1>DRINKS</h1>
                </div>
                <div className="positionBotao">
                    <Botao estilo = "botao" titulo="Drinks Populares"/>
                    <Botao estilo = "botao" titulo="Buscar Drinks"/>
                </div>
            </section>
            <section className="conteudoDrink">
                {/* {arrMap.map(()
                    (valor, index)=>{
                        <>
                        <h1>{dadosApi[]}</h1>
                        <p></p>
                    }
                ) */}
            </section>
        </div>
    )
}