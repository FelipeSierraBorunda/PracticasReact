//Desestructuracion de arreglos
//Ejemplo usual
const arregloPersonajes = ['spiderman','ironman','ingrid'];
console.log(arregloPersonajes);
console.log(arregloPersonajes[0]);  //Posicion especifica dentro del arreglo

//Desestructuracion
const [,p2,]=arregloPersonajes;
console.log(p2);

//Ejemplo funcion en arreglos

const returnArreglo = () =>{
    return ['ABC',123];
}

const [letras,numeros]=returnArreglo();
console.log(letras);

//TAREA
const useState = (valor)=>{
    return [valor, ()=>{console.log('Hola mundo')}];
}
const [nombre,setnombre] = useState('Felipe');
console.log(nombre);
setnombre();