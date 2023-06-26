"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/*
    Deberá utilizar los datos en formato JSON disponible
    en "data.js" para realizar los siguientes enunciados.
/*

/* 1 - Enunciado

- Levantar los datos data.js parseando el JSON, generando
una array de personas.
- Con el array anterior utilice el metodo filter para generar
un array de personas mayores o igual a 18 años.
- Imprimir en consola el array resultante.

*/ /*
const personas = JSON.parse(personasJSON);

console.log(personas);


const mayoresDeEdad = personas.filter(persona=>persona.edad>18);

console.log(mayoresDeEdad); */

/* 2 - Enunciado

- Con el array de personas filtradas (resultado del enunciado anterior)
utilice le método forEach para en cada iteración con cada persona
renderizar el nombre y edad de esa persona en el HTML.
- Agregue al HTML los elementos que crea necesario e utilice los
mecanismos que prefiera para agregar por cada persona el nombre y edad
en el HTML (es decir, generar el contenido de forma dinámica).

*/
/* let acumulador =""
mayoresDeEdad.forEach(persona =>
  
 acumulador+= `<h3> ${persona.nombre}, ${persona.edad} años </h3>`
    
);
const body = document.querySelector('body')
const section = document.createElement('section')

section.innerHTML = acumulador;
body.appendChild(section) */



/* 3 - BONUS TRACK

- Si misión, en caso que decida aceptarla, es que la edad a filtrar
en el primer enunciado no sea un valor escrito en este script, sino
que sea un valor que se toma del HTML (un input).
- Que toda la acción de filtrado (enunciado 1) y renderizado (enunciado 2)
se dispare al presionar un botón en el HTML que usted agregue.

*/
const personas = JSON.parse(personasJSON);

    console.log(personas);

const body = document.querySelector('body')
const input = document.createElement('input');
const btn = document.createElement('button');
input.placeholder = "Ingrese edad";
btn.innerText = "Consultar";
body.appendChild(input);
body.appendChild(btn);

btn.onclick = () =>{
    input.onchange = () => input.value;

    let inputAge = input.value;

    const searchUser = personas.filter(persona=>persona.edad >= inputAge);

    console.log(searchUser);

    let acumulador =""
    searchUser.forEach(persona =>
  
    acumulador+= `<h3> ${persona.nombre}, ${persona.edad} años </h3>`
    );
    const section = document.createElement('section')

    section.innerHTML = acumulador;
    body.appendChild(section)

    input.value = "";

};






