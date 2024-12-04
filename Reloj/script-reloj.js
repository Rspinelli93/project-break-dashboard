const divReloj = document.getElementById('divReloj')
const divDia = document.getElementById('divDia')
const divFrase = document.getElementById('divFrase')

const dobleDigito = (a) => a.toString().padStart(2, '0')

// -- //

let fecha = new Date();

const diaNum = (fecha) => fecha.getDate()
const diaNombre = (fecha) => {
    let diaSemana = fecha.getUTCDay()
    if (diaSemana == 0){
        diaSemana = 'Domingo'
    } else if (diaSemana === 1) {
        diaSemana = 'Lunes'
    } else if (diaSemana === 2) {
        diaSemana = 'Martes'
    } else if (diaSemana === 3) {
        diaSemana = 'Miercoles'
    } else if (diaSemana === 4) {
        diaSemana = 'Jueves'
    } else if (diaSemana === 5) {
        diaSemana = 'Viernes'
    } else {
        diaSemana = 'Sabado'
    }
    return diaSemana
}

const año = (fecha) => fecha.getFullYear()
const mes = (fecha) => {
    let month = fecha.getMonth()
    if (month == 0){
        month = 'Enero'
    } else if (month == 1) {
        month = 'Febrero'
    } else if (month == 2) {
        month = 'Marzo'
    } else if (month == 3) {
        month = 'Abril'
    } else if (month == 4) {
        month = 'Mayo'
    } else if (month == 5) {
        month = 'Junio'
    } else if (month == 6) {
        month = 'Julio'
    } else if (month == 7) {
        month = 'Agosto'
    } else if (month == 8) {
        month = 'Septiembre'
    } else if (month == 9) {
        month = 'Octubre'
    } else if (month == 10) {
        month = 'Noviembre'
    } else {
        month = 'Diciembre'
    }
    return month
}

const horas = (fecha) => dobleDigito(fecha.getHours());
const minutos = (fecha) => dobleDigito(fecha.getMinutes());
const segundos = (fecha) => dobleDigito(fecha.getSeconds());

// -- // 

const horaActual = setInterval(() => {
    fecha = new Date();
    divReloj.innerHTML = `
        <p id="hora">${horas(fecha)}:${minutos(fecha)}:${segundos(fecha)}</p>
    `;
}, 1000);

const diaActual = setInterval(() => {
    fecha = new Date();
    divDia.innerHTML = `
        <p id="dia">${diaNombre(fecha)} ${diaNum(fecha)} de ${mes(fecha)} del ${año(fecha)}</p>
    `;
}, 1000);

const frase = setInterval(() => {
    fecha = new Date();
    let horas = fecha.getHours()
    if (horas < 7) {
        divFrase.innerHTML = `<p class="frase">Mejor ir a dormir ya &#128164</p>`;
    } else if (horas >= 7 && horas < 12) {
        divFrase.innerHTML = `<p class="frase">Buenos dias. Cafecito y a la cancha! &#9749</p>`;
    } else if (horas >= 12 && horas < 14) {
        divFrase.innerHTML = `<p class="frase">Que tal unos tacos? &#127790</p>`;
    } else if (horas >= 14 && horas < 16) {
        divFrase.innerHTML = `<p class="frase">Es una buena hora para un mate y seguir el dia &#129481</p>`;
    } else if (horas >= 16 && horas < 18) {
        divFrase.innerHTML = `<p class="frase">Ultimo tiron! Tu puedes! &#128556</p>`;
    } else if (horas >= 18 && horas < 20) {
        divFrase.innerHTML = `<p class="frase">Buen Trabajo! Ahora, vamos por unas Cañas! &#127866</p>`;
    } else if (horas >= 20 && horas < 22) {
        divFrase.innerHTML = `<p class="frase">Has pensado que cenar? &#129378</p>`;
    } else {
        divFrase.innerHTML = `<p class="frase">Sigues aqui? Ya apaga el ordenador &#128561</p>`;
    } 
}, 1000);