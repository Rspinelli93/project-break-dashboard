const nomPag = document.getElementById('nombrePagina')
const linkPag = document.getElementById('linkPagina')
const botonAgregar = document.getElementById('agregar')
const listaLinks = document.getElementById('listaLinks')

const listado = (userInput) => {
    
    const newLi = document.createElement("li");
    const newText = document.createTextNode(userInput);

    newLi.appendChild(newText);
    listaLinks.appendChild(newLi);
}

botonAgregar.addEventListener('click', () => {
    listado(nomPag.value)
})