const persona = {
  nombre: 'Felipe',
  apellido: 'Sierra',
  edad:22,
  direccion :{
    ciudad:'Merida',
    Zip:1234,
  }
}

//Para indicar que queremos crear un nuebo objeto con las misma propiedades que otro

const persona2 = {...persona};

console.table(persona);
console.log(persona);