const urlApi = 'http://api.weatherapi.com/v1/current.json?key=865f197a87974242bc1181451240912&q=Madrid&aqi=no';

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
    })
    .catch((error) => {
        alert('No se ha podido obtener los datos del clima.');
    });