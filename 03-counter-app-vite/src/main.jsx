import React from 'react'                   //Importacion de la herramienta de react
import ReactDOM from 'react-dom/client'     // Herramienta para renderizar
import {App} from './FirstApp'
import { NombreUsuario } from './NombreUsuario';
import { CounterApp } from './CounterApp';

import './Estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       <CounterApp  value={10}/>
    </React.StrictMode>
);  