import React from 'react';

import Card from '../Card/';
// Card foi importado no componente HomePage por ser um comonene filho d mesmo
import './style.css';

function HomePage(){
    return (
        <div className="home-page">
            <Card />
        </div>
    );
}

export default HomePage;