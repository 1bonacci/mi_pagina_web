import galeria from "./galeria.js"

const contenedor = document.getElementById("gallery")

let htmlRenderizar = ``;

galeria.cuadros.forEach((cuadros)=> {
    htmlRenderizar += `<div class="gallery">
    <div class="row">
        <div class="column">
            <div class="artwork">
                <a href="https://es.wikipedia.org/wiki/La_muerte_de_Marat" target="_blank">
                    <img src="multimedia/marat.jpg" alt="Obra de Arte 1">
                </a>
                <div class="caption">
                    <h3>${cuadros.titulo}</h3>
                    <p>${galeria.titulo}</p>                 
                    <p>1793</p>
                    <p>Olio su tela</p>
                    <p>165×128 cm</p>
                    <p>Museo reale delle belle arti del Belgio, Bruxelles</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="artwork">
                <a href="https://es.wikipedia.org/wiki/La_balsa_de_la_Medusa" target="_blank">
                    <img src="multimedia/zattera.jpg" width="330" alt="Obra de Arte 2">
                </a>
                <div class="caption">
                    <h3>La Zattera della Medusa</h3>
                    <p>Théodore Géricault</p>                 
                    <p>1819</p>
                    <p>Olio su tela</p>
                    <p>491x716 cm</p>
                    <p>Museo del Louvre, Parigi</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="artwork">
                <a href="https://es.wikipedia.org/wiki/La_libertad_guiando_al_pueblo" target="_blank">
                    <img src="multimedia/liberta.jpg" width="320" height="250" alt="Obra de Arte 3">
                </a>
                <div class="caption">
                    <h3>La Libertà che guida il popolo</h3>
                    <p>Eugène Delacroix</p>                 
                    <p>1830</p>
                    <p>Olio su tela</p>
                    <p>260×325 cm</p>
                    <p>Museo del Louvre, Parigi</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="artwork">
                <img src="" alt="Obra de Arte 4">
                <div class="caption">
                    <p>Descripción de la obra de arte 4.</p>
                </div>
            </div>
        </div>
    </div>
</div>`
})

contenedor.innerHTML = htmlRenderizar



/* fetch("./generos.json").then((datos)=>{
return datos.json()
}).then((datos)=>{
    console.log(datos)
}) */

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