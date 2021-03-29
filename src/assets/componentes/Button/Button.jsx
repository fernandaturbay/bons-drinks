
import React from 'react'


export default function Botao({estilo, titulo, noClick}) {

    return (
        <div>
            <button className= {estilo} onClick ={()=> {
                noClick()
            }}>
                {titulo}
            </button>
        </div>
    )
}