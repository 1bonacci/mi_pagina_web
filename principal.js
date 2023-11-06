/* import generos from "./generos.js"

//Referencia
const principal= document.getElementById("generos")

principal.innerHTML= `${productos.tienda}`

//Principal
console.log(principal)
 */

fetch("./generos.json").then((datos)=>{
return datos.json()
}).then((datos)=>{
    console.log(datos)
})