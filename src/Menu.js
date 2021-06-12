import React from "react";
import './style.css';
import { useHistory } from 'react-router-dom'
import useInterval from './useInterval';

function Menu(){
    let history = useHistory();
    var nombre;
    var cargar = false, vivo = true;

    useInterval(()=>{
        if(vivo)
            if (cargar)
                mostrar()
            else
                cargar = true;
    },500);

    function mostrar(){
        const tabla = document.getElementById("tablaPuntaje"); 
            console.log(tabla);
            for (let i = 0; i < localStorage.length; i++) {
                try{
                    const tr = document.createElement('tr');
                    const element = localStorage.getItem(i+1);
                    const nodos = element.split("|");
                    const numero = document.createElement("th");
                    numero.scope ="row";
                    numero.innerText = nodos[0];
                    const name = document.createElement("td");
                    name.innerText = nodos[1];
                    const puntos = document.createElement("td");
                    puntos.innerText = nodos[2];
                    const fecha = document.createElement("td");
                    const tiempoTranscurrido = Date.now();
                    const hoy = new Date(tiempoTranscurrido);
                    fecha.innerText = hoy.toDateString();
                    tr.appendChild(numero);
                    tr.appendChild(name);
                    tr.appendChild(puntos);
                    tr.appendChild(fecha);
                    tabla.appendChild(tr);
                }catch(error){
                }
            }
            if(tabla.hasChildNodes){ 
                vivo = false; 
                console.log("Murio");
            }
    }
    function jugar(){
        nombre = document.getElementById("jugador").value;
        if(nombre){
            history.push("/juego", {params: nombre});
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
                    <tbody id="tablaPuntaje">
                    </tbody>
                </table>
            </div>
            {/* <button onClick={cargar}>Cargar</button> */}
        </div>
    )
}

export default Menu