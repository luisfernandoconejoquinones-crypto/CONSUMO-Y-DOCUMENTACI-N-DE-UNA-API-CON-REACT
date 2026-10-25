import { useState } from "react";

export default function Informacion(){
    const[servicio,setServicio]=useState("")
    const[descripcion,setDescripcion]=useState("")
    const[version,setVersion]=useState("")

    async function Api() {
        let respuesta = await fetch("http://localhost:3000/informacion")
        let datos = await respuesta.json()
        console.log();

    setServicio(datos.servicio)
    setDescripcion(datos.descripcion)
    setVersion(datos.version)

        
    }
    return(
        <div>
            <button onClick={Api}>VERR</button>
            <p>*servicio:{servicio}</p>
            <p>*descripcion:{descripcion}</p>
            <p>*version:{version}</p>
        </div>
    )

}