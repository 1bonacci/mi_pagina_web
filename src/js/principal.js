import galeria from "./galeria.js"

const contenedor = document.getElementById("row")

let htmlRenderizar = ``;

galeria.cuadros.forEach((cuadro)=> {
    htmlRenderizar += `
        <div class="column">
            <div class="artwork">
                <a href=${cuadro.link} target="_blank">
                    <img src=${cuadro.imagen} alt="Obra de Arte 1">
                </a>
                <div class="caption">
                    <h3>${cuadro.titulo}</h3>
                    <p>${cuadro.autor}</p>
                    <p>${cuadro.anio}</p>
                    <p>${cuadro.tecnica}</p>
                    <p>${cuadro.dimensiones}</p>
                    <p>${cuadro.ubicacion}</p>
                </div>
            </div>
        </div>
`
})

contenedor.innerHTML = htmlRenderizar

fetch("./galeria.json").then((datos)=>{
return datos.json()
}).then((datos)=>{
    console.log(datos)
})

const toggleBtn = document.querySelector('.toggle__btn')
const toggleBtnIcon = document.querySelector('.toggle__btn i')
const dropDownMenu = document.querySelector('.header__mobile')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Select all image elements
let imgs = document.querySelectorAll('.artwork img');

// Check if there are at least 3 images
if (imgs.length >= 3) {
    // Change the third image's width and height
    imgs[2].style.width = '300px';
    imgs[2].style.height = '230px';
}

{ //lineHeight
// Select the first caption div
let caption = document.querySelector('.caption');

// Select the last p element within the caption
let lastP = caption.querySelector('p:last-child');

// Change the line height
lastP.style.lineHeight = '1';
}