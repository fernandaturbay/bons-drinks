// import React, { Component } from 'react'

// export default class Button extends Component {

//     render() {
//         return (
//             <div>
//                 <button {...this.props} onClick={this.props.click}>Click Me!</button>
//             </div>
//         )
//     }
// }


import React from 'react'
import {useState} from 'react'

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