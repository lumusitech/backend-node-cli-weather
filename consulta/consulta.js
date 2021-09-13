const axios = require("axios");
const colors = require("colors");

const getClima = async (lugar) => {
    let urlBase = "https://api.openweathermap.org/data/2.5/weather?";
    let idUser = '&appid=173b278011cfcf04bb29a0ef6b3e67e2';
    let idioma = '&lang=es';
    let unidad = '&units=metric'

    const instancia = axios.create({
        baseURL: urlBase+lugar+idUser+idioma+unidad,
    });
    
    const respuesta = await instancia.get();

    const zona = respuesta.data.name;
    const temperatura = respuesta.data.main.temp;

    return{
        zona,
        temperatura
    }
}

module.exports = {
    getClima
};