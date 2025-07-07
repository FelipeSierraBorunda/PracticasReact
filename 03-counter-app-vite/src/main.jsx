import React from 'react'                   //Importacion de la herramienta de react
import ReactDOM from 'react-dom/client'     // Herramienta para renderizar
import {App} from './FirstApp'
import { NombreUsuario } from './NombreUsuario';
import './Estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <NombreUsuario nombre="Aaron" Apellido="Sierra" numero={9331083624}/>
    </React.StrictMode>
);  