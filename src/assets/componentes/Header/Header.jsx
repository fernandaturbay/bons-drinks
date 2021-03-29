import React from "react";
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = ()=> {
    return (
        <header className="navegacao">
        <nav className="NavHeader" />
          <Link to="drinks" className = "NavHeaderItem">Drinks</Link>
          <Link to="sobre" className = "NavHeaderItem">Sobre Nós</Link>
          <Link to="/" className="home">Bons Drinks</Link>
          <Link to="time" className = "NavHeaderItem">Nosso Time</Link>
          <Link to="contato" className = "NavHeaderItem">Contato</Link>
          </header>

    )}

    export default Header
