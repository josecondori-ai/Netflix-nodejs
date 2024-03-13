let peliculas=[
    {id:1,titulo:'batman',rating:10},
    {id:2,titulo:'spiderman',rating:8}

]

function agregarPeliculas(pelicula){
peliculas.push(pelicula)
console.log(peliculas)
}



function mostrarPeliculas(){
    for(let pelicula of peliculas){
        console.log(pelicula.titulo, ' -Rating ',pelicula.rating) 
    }
}
// const peliculas=[
//     {id:1,titulo:'batman',rating:10},
//     {id:2,titulo:'spiderman',rating:8},
//     {id:3,titulo:'superman',rating:7}

// ]

function eliminarPelicula(id){
   peliculas =peliculas.filter((pelicula)=>pelicula.id !==id)
    console.log(peliculas)

}

agregarPeliculas({id:3,titulo:'superman',rating:7})
mostrarPeliculas()
eliminarPelicula(1)
mostrarPeliculas()


// const array=["hola","adios","pepe"]

// for(let i=0; i <array.length;i++){
//     if(array[i]==="pepe"){
//         console.log("encontre pepe")
//     }
// }

//filter

//recoore un array - busca por una determinada condicion

// const resultado=array.filter(elemento=>elemento==="pepe")
// console.log(resultado)







