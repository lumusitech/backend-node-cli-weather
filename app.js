const argv = require("./config/yargs");
const consulta = require("./consulta/consulta");


let lugar = 'q='+encodeURI(argv.direccion);

consulta.getClima(lugar)
    .then(respuesta => {

        // Validación para que no se deje la dirección vacía o con valores de true o false
        if(respuesta.zona === "True" || respuesta.zona === "False") return console.log("No se indicó una zona para la consulta".red);
        else{
            console.log(`===========================`.yellow,
        `\n\tZona: ${respuesta.zona}
        Temperatura: ${respuesta.temperatura}`.green,
        `\n===========================`.yellow);
        }
        
    })
    .catch(error => console.log(`Error de la consulta ===> ${error.response.data.cod}`.red));