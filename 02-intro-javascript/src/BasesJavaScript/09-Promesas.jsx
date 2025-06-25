import { getHeroeById } from "./BasesJavaScript/08-export-import-filter-find";

const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const heroe = getHeroeById(4);
        resolve(heroe);
        //reject('No se encontro ningun heroe');
    },2000)
});

promesa.then((heroeRecibido)=>{
    console.log(heroeRecibido);
})
.catch(err =>console.warn(err));

//SEGUNDA MANERA

const getHeroByIdAsync = (id) => {
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const heroe = getHeroeById(id);
        if(heroe)
        {
        resolve(heroe);     
        }
        else
        {
        reject('No se encontro ningun xd');
        }
        },3000)
    });
}
getHeroByIdAsync(10)
//.then(console.log)                    Manera corta
.then(heroe=>console.log(heroe))
//.catch(console.warn);                 Manera corta
.catch(err =>console.warn(err));