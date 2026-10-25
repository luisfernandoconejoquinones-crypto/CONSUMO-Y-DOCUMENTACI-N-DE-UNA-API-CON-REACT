import { useState } from "react";

export default function Inicio(){
    const[inicio,setInicio]=useState("")

    async function Api(){
        let respuesta = await fetch("http://localhost:3000/inicio")
        let datos =await respuesta.json()
        console.log(datos)
        setInicio(datos.mensaje)

    }
return(
    <div>
        <p>{inicio}</p>

        <button onClick={Api}>llamar funcion </button>
    </div>
)
}