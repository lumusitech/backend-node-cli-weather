const argv = require("yargs")
    .options({
        direccion: {
            desc: "ciudad de la que se solicita el clima",
            alias: "d",
            demand: true
        }
    })
    .help()
    .argv;

module.exports = argv;