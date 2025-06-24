//Desestructuracion de arreglos
//Ejemplo usual
const arregloPersonajes = ['spiderman','ironman','ingrid'];
console.log(arregloPersonajes);
console.log(arregloPersonajes[0]);  //Posicion especifica dentro del arreglo

//Desestructuracion
const [,p2,]=arregloPersonajes;
console.log(p2);
