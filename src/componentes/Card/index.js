import React from 'react';
import './style.css';

function Card() {
    return (
        <div className="div-one">
        <div className="card-container">
            <img id="c" src="/Imagens/construcao.png" alt="Planta de uma construção"/>
            <h2 className="text" > Área: Construção Civil </h2>
            <h3 className="text" > Curso: DESVENDANDO O BIM</h3>
            <p> Valor: Gratuito </p>
            <p> Carga horária: 20 horas </p>
            <p> RESUMO:<br></br>
                O Curso de Aperfeiçoamento Profissional Desvendando o BIM tem por objetivo apresentar a metodologia BIM, 
                sua influência, requisitos e benefícios para cadeia de construção civil. </p>
        </div>
        <div className="card-container">
        <img id="c" src="/Imagens/eletrico.jpg" alt="Circuito elétrico"/>
            <h2 className="text" > Área: Eletricidade </h2>
            <h3 className="text" > Curso: COMANDOS ELÉTRICOS</h3>
            <p> Valor: Gratuito </p>
            <p> Carga horária: 120 horas </p>
            <p> RESUMO:<br></br>
            O Curso de Aperfeiçoamento Profissional Comandos Elétricos tem por objetivo o desenvolvimento de competências relativas à montagem e 
            manutenção de comandos elétricos de máquinas e equipamentos.</p>
        </div>
        <div className="card-container">
        <img id="c" src="/Imagens/mecanico.jpg" alt="Homem montando motor"/>
            <h2 className="text" > Área: Reparação </h2>
            <h3 className="text" > Curso: MECÂNICO DE MOTOR CICLO DIESEL</h3>
            <p> Valor: Gratuito </p>
            <p> Carga horária: 180 horas </p>
            <p> RESUMO:<br></br>
            O Curso de Qualificação Profissional Mecânico de Motor Ciclo Diesel tem por objetivo o desenvolvimento de competências para realizar manutenção em Motor 
            Ciclo Diesel.</p>
        </div>
        </div>
        
    );
}

export default Card;

