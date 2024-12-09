const nomPag = document.getElementById('nombrePagina')
const linkPag = document.getElementById('linkPagina')
const botonAgregar = document.getElementById('agregar')
const listaLinks = document.getElementById('listaLinks')

const listado = (userInput, userLink) => {

    //---DOM---//
    const newLi = document.createElement("li");

    const newAnchor = document.createElement("a");
    newAnchor.href = userLink;
    newAnchor.target = "_blank";
    newAnchor.textContent = userInput;

    const botonElim = document.createElement("button");
    botonElim.id = 'botonElim';
    botonElim.innerHTML = '<img id="bomb" src="/Img/bomb.png" alt="bomb">';

    newLi.appendChild(newAnchor);
    newLi.appendChild(botonElim);
    listaLinks.appendChild(newLi);

    //---LOCAL---//

    localStorage.setItem(`${userInput}`,`${userLink}`)

    botonElim.addEventListener('click', () => {
            localStorage.removeItem(`${userInput}`)
            newLi.remove();
        })
};


// ---BOTON AGREGAR--- //

botonAgregar.addEventListener('click', () => {

    if (nomPag.value == "" || validarURL(linkPag.value) == false) {
        alert("Por favor, introduce un nombre y un enlace válido.");
        return;
    }
    if (localStorage.getItem(nomPag.value)) {
        alert("Este enlace ya existe.");
        return;
    }
    listado(nomPag.value, linkPag.value)
})

// ---VALIDAR URL--- //

const validarURL = (string) => {
    try {
        new URL(string); 
        return true;   
    } catch (_) {
        return false;
    }
};

// ---IMPRIMIR DESPUES DE RECARGAR--- //

for (const [name, value] of Object.entries(localStorage)) {
    listado(name,value)
}

console.log(localStorage);
