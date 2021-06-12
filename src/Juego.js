import React from 'react'
import useInterval from './useInterval';

// const jugador = (props) => <h1>{props.jugador}</h1>;
function Juego(){
    const arreglo = [0,1,2,3,4,5,6,7,8,9,10]
    var cola = [];
    var tecla = 83;
    var comenzo = false;
    var fin = false;
    var pos;
    var puntaje = 0;

    useInterval(()=>{
        if(comenzo)
            direccion();
        else if(fin)
            termino();
    },100);
    
    function indexar(){
        const boton = document.getElementById("btn_comenzar");
        boton.style.display = "none";
        const tablero = document.querySelectorAll('.tablero > div > div');
        for (let index = 0; index < tablero.length; index++) {
            tablero[index].id = "cuadro"+(index+1);
        }
        cola.push(24);
        cola.push(35);
        cola.push(46);
        colorear();
        manzanita();
        comenzo = true;
    }

    function colorear(){
        for (let index = 0; index < cola.length; index++) {
            const cuadro = document.getElementById("cuadro"+cola[index]);
            if(cuadro)
                cuadro.style = "background-color: #2a3177";
        }
    }

    function direccion(){
        //65 es la A --- 68 es la D --- 83 es la S --- 87 es la W
        var cuadroID = cola[cola.length-1];
        var borrado;
        if(tecla == 65 || tecla == 68 || tecla == 83 || tecla == 87){
            const cuadro = document.getElementById("cuadro"+cola[0]);
            cuadro.style = "background-color: rgb(84, 94, 105)";
            borrado = cola[cola.length-1];
            cola.shift();
        }
        if(cuadroID == pos){
            var puntos = document.getElementById("puntos");
            puntaje += 100;
            puntos.innerText = puntaje;
            manzanita();
            cola.push(borrado);
        }else if(cola.indexOf(cola[cola.length-1]) != cola.length-1){
            comenzo = false;
        }
        if(tecla == 65){
            if((cuadroID - 1) % arreglo.length == 0) comenzo = false;
            else cuadroID--;
        }
        else if(tecla == 68)
            if(cola[cola.length-1] % arreglo.length == 0) comenzo = false;
            else cuadroID++;
        else if(tecla == 83)
            if(cola[cola.length-1]+ arreglo.length > arreglo.length*arreglo.length){
                comenzo = false;
            }
            else cuadroID += arreglo.length;
        else if(tecla == 87)
            if(cola[cola.length-1]-arreglo.length < 1) comenzo = false;
            else cuadroID -= arreglo.length;
        if(comenzo) fin = true;
        cola.push(cuadroID);
        colorear();
    }

    window.addEventListener("keydown", function (event) {
        if(event.keyCode == 83 && tecla == 87);
        else if(event.keyCode == 87 && tecla == 83);
        else if(event.keyCode == 65 && tecla == 68);
        else if(event.keyCode == 68 && tecla == 65);
        else tecla = event.keyCode;
    },false);
    
    function manzanita(){
        do{
            pos = parseInt(Math.random() * (arreglo.length*arreglo.length - 1) + 1);
        }while(cola.includes(pos));
        const manzana = document.getElementById("cuadro"+pos);
        if(manzana)
            manzana.style = "background-color: lime";
        else
            console.log(parseInt(pos));
    }

    function termino(){
        window.alert("Fin del juego");
        fin = false;
    }

    return(
        <div className="bg-dark container my-5 p-5 text-center">
            <button onClick={indexar} className="btn bg-light mb-3 boton" id="btn_comenzar">Comenzar</button>
            <h2 className="titulo">Puntaje de : <span id="puntos">0</span></h2>
             <div className="tablero" id="tablero">
                {arreglo.map((vacio)=>(
                    <div className="bg-dark" key={vacio}>
                            {arreglo.map((vacio)=>(
                                <div className="cuadro" key={vacio}></div>
                            ))}
                    </div>
                ))}
             </div>
             
        </div>
    )
}

export default Juego