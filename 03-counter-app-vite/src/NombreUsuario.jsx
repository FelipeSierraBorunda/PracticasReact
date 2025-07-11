// PropTypes lo que hace es poder definir un tipo a la prop
import PropTypes from 'prop-types'; // Se instala manualmente (comandoEnTerminal: yarn add prop-types)
//Probando cosntantes
const newMessage = 'Felipe';
//Probando objetos
const objeto={
    perro:'Felipe', 
}
//Probando funciones
 const funcion=() =>{
    return 'hola';
}
// nombre es una propiedad que viene del main
export const NombreUsuario =({nombre,numero,apellido})=>{
    return (
        //Sinonimo de fragmento
        // <h1>{JSON.stringify(objeto)} </h1>   
        // <h1>{funcion()} </h1>
        <>                              
        <h1>{nombre}  </h1>
        <h1>{apellido}  </h1>
        <h1>{numero}</h1>
        </>
    );
}

// Los componentes no pueden devolver objetos directamente, se utiliza directamente JSON.stringify ()

NombreUsuario.propTypes={
    nombre:PropTypes.string.isRequired,
    apellido:PropTypes.string.isRequired,
    numero:PropTypes.number.isRequired
}

// Defaults props (que se muestra si no se manda nada)
NombreUsuario.defaultProps = {
    nombre: 'no hay nombre',
    apellido: 'no hay apellido',

}
