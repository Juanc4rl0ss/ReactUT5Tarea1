/**importaciones para que funcione la clase, incluyendo la clase de la App, react y los estilos CSS**/
import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './componentes/Principal.jsx'
import './index.css'
import Articulo from './componentes/Cumpleañeros.jsx'

//Renderizamos React,para que el id root sea el punto de partida
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Principal >

    </Principal>
  </React.StrictMode>,
)
