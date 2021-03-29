import React from 'react'
import './Time.css'
import clover from "../../imagens/clover.jpg"
import alex from "../../imagens/alex.jpg"
import sam from "../../imagens/sam.jpg"
import jerry from "../../imagens/jerry.jpg"

export default function Time() {
    return (
        <div className="timePai">
            <h1 className="tituloTime">Nosso Time</h1>
            <img className="imagemTime fotoClover" src={clover}></img>
            <section className="clover">
                <h2 className="nomeTime clover">Clover</h2>
                <p className="descricaoTime">A loira patricinha que amamos</p>
            </section>
            <img className="imagemTime fotoSam" src={sam}></img>
            <section className="sam">
                <h2 className="nomeTime sam">Sam</h2>
                <p className="descricaoTime">A nerd virginiana gente boa</p>
            </section>
            <img className="imagemTime fotoAlex" src={alex}></img>
            <section className="alex">
                <h2 className="nomeTime alex">Alex</h2>
                <p className="descricaoTime">Tem um cabelo estiloso e ama lutar boxe</p>
            </section>
            <img className="imagemTime fotoJerry" src={jerry}></img>
            <section className="jerry">
                <h2 className="nomeTime jerry">Jerry</h2>
                <p className="descricaoTime">O chefe com os gadgets que todo mundo queria ter</p>
            </section>
        </div>
    )
}
