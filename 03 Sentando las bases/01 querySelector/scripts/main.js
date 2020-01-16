console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')
/*E1*/

const DivComentarios = document.querySelectorAll(".comment");


DivComentarios[1].classList.add("commentAgus");

/*E2*/

let hr = document.querySelectorAll("hr");

for(let i= 0;i<hr.length; i++){
    hr[i].classList.add("banana");
    console.log('hr'+'['+i+']'+'.classList.add("banana")')
}

/*let numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i<numeros.length;i++){
    console.log (2*numeros[i])
}*/

/*E3*/

/*Ocultar los comentarios de más de 50 caracteres 

busco los comentarios 
selecciono el primer comentario el que quiero contar
empiezo a contar las las letras y espacios
comparo los caracteres contados con 50 
si es mayor a 50 se debe ocultar




*/


let comentarios = document.querySelectorAll(".comment--text-1")  //esta linea crea a un variable que se llama comentarios que contiene una lista de etiquetas que tengan la class comment--text 
for (let i=0; i<comentarios.length; i++){ //el for es para que me recorra toda la lista 
    if (comentarios[i].textContent.length > 50){ //si el comentario tiene mas de 50 caracteres 
        comentarios[i].classList.add("oculto"); //entonces pasa esto: entra a los comentarios va a sus clases y agrega los class de oculto 
    }    
}


/*E4*/

/*Ocultar el comentario más largo.

busco comentarios 
agarro el primer comentario 
comienzo a contar las letras y espacios para saber cual es el que tiene mas entre todos los comentarios 
guardo el resultado del primero 
hago lo mismo con el segundo
luego comparo el primero con el segundo
me quedo con el mayor resultado 
vuelvo a comparar el mayor con el siguiente comentario

*/


let comentariosLista = document.querySelectorAll(".comment--text")
let comentarioMayor = comentariosLista[0].textContent.length;
for (let i=0; i < comentariosLista.length; i++){
    if(comentariosLista[i].textContent.length > comentarioMayor){
        comentarioMayor = comentariosLista[i]; 
        console.log('asd')
    }
}
    comentarioMayor.classList.add("oculto");
