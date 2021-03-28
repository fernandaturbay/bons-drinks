import React from "react"
import './Header.css'
import {BrowserRouter as Router, NavLink} from "react-router-dom"

export default () => (
    <header> 
            <div>
                <ul className="headerlista">
                    
                    <li className="headerLi">Drinks
                        {/* <Link to="/Drinks">Drinks</Link> */}
                    </li>
                    <li className="headerLi"> Sobre Nós
                        {/* <Link to="/sobreNos">Sobre Nós</Link> */}
                    </li>
                    <li className="home"> Bons Drinks
                        {/* <Link to="/home">Bons Drinks</Link> */}
                    </li>
                    <li className="headerLi"> Nosso Time
                        {/* <Link to="/nossoTime">Nosso Time</Link> */}
                    </li>
                    <li className="headerLi"> Contato
                        {/* <Link to="/contato">Contato</Link> */}
                    </li>

                </ul>
            </div>
        </header>
)
