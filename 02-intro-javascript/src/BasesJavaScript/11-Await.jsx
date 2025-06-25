//Para utilizar el await, debe de ser en una funcion async
const getImagen = async ()=>{
    try {
        const apiKey = 'fZezusQisUCKZJrWSOfdUo1u71CEzctI';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);    //El await espera a que se ejecute esta linea de codigo antes de continuar
        const {data} = await respuesta.json();
        console.log(data);
        const {url}=data.images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    } catch (error) {
        //Lo que se hara cuando suceeda el error
    }
}
getImagen();