import React, { useState } from "react";
import './style.css';
import { useHistory } from 'react-router-dom'
import Juego from "./Juego"

//npm i react-router-dom
function Menu(){
    let history = useHistory();
    const [j, modificarJugador] = useState(null);
    function jugar(){
        const nombre = document.getElementById("jugador").value;
        if(nombre){
            modificarJugador(nombre);
            // <Juego jugador={j}/>
            history.push("/juego");
        }else{
            window.alert("Ingrese el nombre del jugador!");
        }
    }
    return(
        <div className="container bg-dark my-5 p-5">
            <h1 className="titulo">Ingrese su Nombre:</h1>
            <div className="row mb-5">
                <div className="col-4"><input type="text" className="form-control" id="jugador"></input></div>
                <button className="btn bg-light col-2" onClick={jugar}>Jugar</button>
            </div>
            <h2 className="titulo">Tabla de Puntuaciones:</h2>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Puntaje</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Menu