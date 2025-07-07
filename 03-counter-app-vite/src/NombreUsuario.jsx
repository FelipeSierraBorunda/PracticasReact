import { Fragment } from "react";
//Probando cosntantes
const newMessage = 'Felipe';
//Probando objetos
const objeto={
    Nombre:'Felipe',
    Apellido: 'Sierra'
}
//Probando funciones
 const funcion=() =>{
    return 'hola';
}
// nombre es una propiedad que viene del main
export const NombreUsuario =({nombre,numero})=>{
    return (
        //Sinonimo de fragmento
        <>                              
        <h1>{JSON.stringify(objeto)} </h1>   
        <h1>{funcion()} </h1>
        <h1>{nombre} xddd </h1>
        <h1>{numero}</h1>
        <p>Texto</p>
        </>
    );
}

// Los componentes no pueden devolver objetos directamente, se utiliza directamente JSON.stringify ()