import {heroes,owners} from "../data/heroes";

//impresion
//console.log(heroes);
//console.log(owners);

// Funcionamiento del metodo FIND
const getHeroeById = (id) => heroes.find((objeto) => objeto.id == id);
    //Impresion del find
    //console.log(getHeroeById(2));

//Funcionamiento del metodo FILTER
const getHeroeOwner = (owner) => heroes.filter((objeto) => objeto.owner == owner);
    //Impresion del Filter
    //console.log(getHeroeOwner(`DC`));

//Exportacion
export {
    getHeroeById
};