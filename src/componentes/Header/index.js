import React from 'react';
import './style.css';

function Header() {
    return (
        <header className="alto"> 
            <img id="foto" src="/Imagens/logo_senai.png" alt="Logo do SENAI"/> 
            
            <h1 className="vai"> SENAI Suiço-Brasileira "Paulo Ernesto Tolle"</h1>
        </header>
    );
}

export default Header;