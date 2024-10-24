const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');

const {
    flowExpoRosario,
    flowExpoSantaFe,
    flowImpulsa,
    flowPracticasLaborales,
    flowEmpleoJoven,
    flowOtrasConsultas
} = require('./flowsSegundoNivel');


// PRIMER NIVEL DE RESPUESTA
const flowPrincipal = addKeyword([EVENTS.WELCOME])
    .addAnswer('¡Hola! Soy el Asistente Virtual de la Secretaría de Empleo y Desarrollo Emprendedor del Gobierno Santa Fe 👋 ')
    .addAnswer(
        [
            '¿Sobre qué tema te interesaría consultarme?',
            '👉 *1.* Expo Empleo Rosario',
            '👉 *2.* Expo Empleo Santa Fe',
            '👉 *3.* Impulsa',
            '👉 *4.* Empleo Joven',
            '👉 *5.* Prácticas Laborales Formativas',
            '👉 *6.* Otra consulta',
        ],
        null,
        null,
        [flowExpoRosario, flowExpoSantaFe, flowImpulsa, flowPracticasLaborales, flowEmpleoJoven, flowOtrasConsultas]
    );


module.exports = {
    flowPrincipal,
};