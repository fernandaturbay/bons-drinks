import React,{Component} from "react"
import './Header.css'

class Header extends Component
{
    render(){
        return(
        <header> 
            <div>
                <ul>
                    <li>Drinks</li>
                    <li>Sobre Nós</li>
                    <li className="home">Bons Drinks</li>
                    <li>Nosso Time</li>
                    <li>Contato</li>
                </ul>
            </div>
        </header>
        )
    }
}

export default Header