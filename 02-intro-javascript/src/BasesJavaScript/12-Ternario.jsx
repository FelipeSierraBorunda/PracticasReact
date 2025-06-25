//Operador condicional ternario

//Codigo usual
const activo=true;

let mensaje = '';

if(activo){
    mensaje='Activo';
}else{
    mensaje='Desactivo';
}
console.log(mensaje)

//operador ternario para dos opciones(cierto y falso)
const mensaje1 = (!activo) ? 'Activo':'Inactivo';
console.log(mensaje1);

//Si solo quieres programar la parte cierta
const mensaje2 = !activo && 'activo';
console.log(mensaje2);