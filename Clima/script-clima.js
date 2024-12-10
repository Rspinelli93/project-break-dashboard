const urlApi ='http://api.weatherapi.com/v1/forecast.json?key=865f197a87974242bc1181451240912&q=madrid&days=7&aqi=no&alerts=no'

// --- Actual --- //
const divActual = document.getElementById('actual')
const city = document.getElementById('location')
const textActual = document.getElementById('textActual')
const currentData = document.getElementById('currentData')
const listaActual = document.getElementById('listaActual')

// --- Forecast --- //
const forecastList = document.getElementById('forecastList')

// --- Llamada api --- //

const apiCall = async (urlApi) => {
    try {
        const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error('No se ha podido cargar la API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

apiCall(urlApi)
    .then((data) => {
        console.log(data);
        tiempoActual(data)
        iterForecast(data)
    })
    .catch((error) => {
        alert('No se ha podido obtener los datos del clima.');
});

// --- FUNCIONES DOM --- //

const tiempoActual = (data) => {

    city.innerText = `${data.location.region} / ${data.location.country}`
    textActual.innerText = `${data.current.condition.text}`

    currentData.innerHTML = `
       <img id="iconActual" src="${data.current.condition.icon}" alt="Icono Condicion Actual">
       <p id="tempActual">${data.current.temp_c}</p>
       <img id="celcius" src="/Img/celcius.png" alt="celcius">
    `

    listaActual.innerHTML = `
        <li>Presipitaciones: ${data.current.precip_mm} mm</li>
        <li>Humedad: ${data.current.humidity} %</li>
        <li>Viento: ${data.current.wind_kph} Km/h</li>
    ` 
}

const iterForecast = (data) => {
    data.forecast.forecastday[0].hour.forEach(element => {
        forecastList.innerHTML += `
            <li class="itemForecast">
            <p>${element.time.slice(-5)}</p>
            <img src="${element.condition.icon}" alt="Icono Condicion">
            <p>${element.temp_c} °C</p>
            </li>
        `
    });
}