const nombre="Felipe";
const apellido='Sierra';

//const NombreyApellido = nombre+'-'+apellido;
const NombreyApellido = `${nombre}-${apellido}`;

console.log(NombreyApellido);

function getSaludo(a){
  return 'Hola Mundo y a '+a;
}

console.log(` Estoy usando get saludo que contiene: ${getSaludo(nombre)}`);