// Desestructuracion
// asignacion desestructurante
const persona = {
    nombre:`felipe`,
    apellido:`Sierra`,
    edad:`22`
};

// Lo siguiente, se hace muy tedioso, entonces se puede destructurar al objecto
console.log(persona.nombre);

// De la siguiente manera 
const {edad, nombre} = persona;

//Imprimimos en consola
console.log(nombre);
console.log(edad);

// desestructura el objecto dentro de la funcion 
const mostrarNombre = (usuario) => {
    const {nombre,edad,apellido}=usuario;
    console.log(nombre);
};

// desestructurar el objeto desde el argumento
const mostrarApellido = ({apellido,edad}) => console.log(apellido,edad);

mostrarNombre(persona);
mostrarApellido(persona);

//Ejercicio de ejemplo
const useContext = ({nombre,apellido,edad}) => 
({
nombreclave:nombre,
anios:edad,
localizacion:{
    ciudad:`merida`,
    pais:`mexico`
}
});

const NuevaPersona = useContext(persona);
const {anios}=NuevaPersona;

console.log(anios);

//EXTRAER OBJETOS DENTRO DE OBJETOS

const {localizacion:{ciudad, pais}}=NuevaPersona;
console.log(ciudad);