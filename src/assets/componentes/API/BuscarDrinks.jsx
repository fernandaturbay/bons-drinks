import React from 'react'
import Botao from '../Button/Button'
import "./estiloDrinks.css"

export default function BuscarDrinks() {
    return (
        <div className = "gridApi">
            <section className= "cabecalho">

                <div className="drink1">
                    <h1>DRINKS</h1>
                </div>
                <div className="positionBotao">
                    <Botao titulo="Drinks Populares"/>
                    <Botao titulo="Buscar Drinks"/>
                </div>
            </section>
            <section className="conteudoDrink">

            </section>
        </div>
    )
}