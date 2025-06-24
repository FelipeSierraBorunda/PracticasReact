//Funciones
const nombre=`FelipeIvan`;

// ESTA FUE LA PRIMERA MANERA DE USAR UNA FUNCION, PERO SE RECOMIENDA LA SEGUNDA, YA QUE SE PROTEGE A FUTUROS ERRORES
// function saludar(nombre){
// return `Hola ${nombre}`;
// }

// POSIBLE ERROR
// saludar=20;

// SEGUNDA OPCION
const saludar= function (nombre){
    return `Hola ${nombre}`;
}

// TERCERA OPCION 
const saludar1= (nombre)=>{
    return `Hola1 ${nombre}`;
}

// CUARTA OPCION (funcion flecha[si solo se hay un return en la funcion, esta ees mas inmediata])
const saludar2= (nombre) => `Hola2 ${nombre}`;

// QUINTA OPCION (al ser un valor primitivo no es necesario los parantesis como en la sexta opcion)
const saludar3=()=>`Hola3 pedro`;

// SEXTA OPCION (Si se quiere regresar un objeto con funcion flecha)
const getObject = () =>
({
    id:`1010`,
    username:`Paco`
});

//EJERCICIO
const xd = (nombre) =>
({
    id:`1111`,
    username:nombre
});


console.log(saludar(nombre));
console.log(saludar1 (nombre));
console.log(saludar2(nombre));
console.log(saludar3());
console.log(getObject());
console.log(xd(nombre));