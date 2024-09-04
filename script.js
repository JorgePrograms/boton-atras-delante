'use strict';

const url=document.getElementById('index');

const botonAtras= document.getElementById('atras');
const botonAdelante= document.getElementById('adelante');
const comentario=document.querySelector('.commentario')

//FUNCIONES
let index=1;

const btnAtras =()=>{
  if(index>1){
    index--;
    establecerImagen();
    comentario.innerHTML=`Este es el pokemon numero ${index}`;
  }
}
const btnAdelante=()=>{
  if(index<4){
    index++;
    establecerImagen();
    comentario.innerHTML=`Este es el pokemon numero ${index}`;
  }
}

botonAtras.addEventListener('click',btnAtras);
botonAdelante.addEventListener('click',btnAdelante);


const imagenVarible=document.getElementById('imagen-varibale');
const establecerImagen=()=>{
imagenVarible.innerHTML=`<img src='./images/pokemon-${index}.png' alt='' class='img-pokemon'>`;
}

establecerImagen();
/*
botonAtras.addEventListener('click',()=>boton('atras'));
botonAdelante.addEventListener('click',()=>boton('adelante'));
*/