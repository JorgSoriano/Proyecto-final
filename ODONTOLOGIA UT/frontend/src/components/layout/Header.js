import { useState } from 'react';
import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="header">
                <h1><img class="imagenlogo" src="img/LOGO.jpg" width="100 px" alt="logo" /></h1>
            </div>
        </header>
    );
}

const Hora = (props) => {
    const [hoy, setHoy] = useState(new Date());
    return (
        <div className="hora">Hoy es {hoy.toLocaleDateString()} </div>
    );
}


export { Header, Hora }
