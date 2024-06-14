"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Copiar del ejercicio anterior todos los objetos de tipo de pokemon
que ha generado.
Utilice ese objetos para crear una tarjeta de descripción de cada uno,
agregue esa información al HTML utilizando "innerHTML" como se vio
en los últimos ejemplos de clase.

*/


// Template para que utilice:
const tituloPrincipal = document.querySelector(".title");
console.log(tituloPrincipal.textContent);
const data =  [
    {
   titulo_agua: "Tipo Agua",
   descripcion_agua: `Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición.`,
   agua: "./images/water_type.png",
   estiloClase_agua: "agua",

   },
     {
    titulo_planta: "Tipo planta",
    descripcion_planta:`Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate`,
    planta: "./images/grass_type.png",
    estiloClase_planta: "grass",
   
   },
     {
    titulo_normal: "Tipo normal",
    descripcion_normal: `Los Pokémon tipo normal se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición.`,
    normal: "./images/normal_type.png",
    estiloClase_normal: "normal",
   
    },
     {
    titulo_fire: "Tipo fire",
    descripcion_fire: `Los Pokémon tipo fire se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición.`,
    fuego: "./images/fire_type.png",
    estiloClase_fire: "fire",
   
   },
   {
    titulo_electric: "Tipo electric",
    descripcion_electric: `Los Pokémon tipo electric se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición.`,
    electricidad: "./images/electric_type.png",
    estiloClase_electricidad: "electric",
   
   },
]
let accumulator = ""
for(const pokemonTipo of data){

  accumulator += `
<article class="${pokemonTipo.estiloClase}">
<div class="header">
    ${pokemonTipo.titulo}
</div>            
<div>
    <p id="descripcion">
        ${pokemonTipo.descripcion}
    </p>
</div>
<img
  src=${pokemonTipo.icono}
  class="icon-type"
  alt="icon type"
/>
</article>
` 
};
const section = document.querySelector("section");
section.innerHTML = accumulator;