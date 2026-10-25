import { useState } from "react";

export default function Solicitudes(){
    //GRUPO1
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [correo,setCorreo]=useState("")

    // grupo2
    const [dato_enviado,setDatoEnviado]=useState("")
    const [dato_apellido,setDatoApellido]=useState("")
    const [dato_correo,setDatoCorreo]=useState("")
    const [mensaje,setMensaje]=useState("")

    async function guardarApi () {
        // peticion al backend
        let resultado = await fetch("http://localhost:3000/solicitudes",{
            method:'POST',
            body:JSON.stringify({
                nombre:nombre,
                apellido:apellido,
                correo:correo
            }),
            headers:{
                'content-type':'application/json'
            }
     } )
     let datos = await resultado.json()
     console.log(datos)

     // segundo grupo guardamos las respuesta 
     setDatoEnviado(datos.dato_enviado)
     setDatoApellido(datos.dato_apellido)
     setDatoCorreo(datos.dato_correo)
     setMensaje(datos.mensaje)
        
    }
    return(
        <div>
            <h2>*Formulario</h2>
            <input placeholder="nombre" onChange={(e)=> setNombre(e.target.value)}></input>
            <input placeholder="apellido" onChange={(e)=> setApellido(e.target.value)}></input>
            <input placeholder="correo" onChange={(e)=> setCorreo(e.target.value)}></input>

            <button onClick={guardarApi}>aceptar</button>

            <p>*nombre:{dato_enviado}</p>
            <p>*apellido:{dato_apellido}</p>
            <p>*correo.{dato_correo}</p>
            <p>*respuesta servidor :{mensaje}</p>
            
        
        </div>
    )
}
