import React from 'react'
import Botao from '../Button/Button'
import "./estiloDrinks.css"
import {RandomDrink} from "../../../model/randomDrinks"
import {useState, useEffect} from 'react'

export default function BuscarDrinks() {
    const [dadosApi, setDadosApi] = useState("");

    async function busca (){
        const req = await RandomDrink();
        setDadosApi(req.drinks[0])
    }

    return (
        <div className = "gridApi">
            <section className= "cabecalho">

                <div className="drink1">
                    <h1>DRINKS</h1>
                </div>
                <div className="positionBotao">
                    <Botao estilo = "botao" noClick={busca} titulo = "Estou com sorte"/>
                    <Botao estilo = "botao" titulo="Drinks Populares"/>
                    <Botao estilo = "botao" titulo="Buscar Drinks"/>
                </div>
            </section>
            <section className="conteudoDrink">
                <img src={dadosApi.strDrinkThumb}></img>
                 <h1>
                     {dadosApi.strDrink}
                </h1>
                <p>
                    {dadosApi.strGlass}
                </p>
            </section>
        </div>
    )}