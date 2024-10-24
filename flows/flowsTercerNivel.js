const { addKeyword } = require('@bot-whatsapp/bot');

// const {
//     flowExpoRosario,
//     flowExpoSantaFe,
//     flowImpulsa,
//     flowPracticasLaborales,
//     flowEmpleoJoven,
//     flowOtrasConsultas
// } = require('./flowsSegundoNivel');


// TERCER NIVEL DE RESPUESTA

const flowQuieroRealizarOtraConsulta = addKeyword(['1'])
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
        // [flowExpoRosario, flowExpoSantaFe, flowImpulsa, flowPracticasLaborales, flowEmpleoJoven, flowOtrasConsultas]
    )


const flowGracias = addKeyword(['2'])
    .addAnswer('¡Gracias por comunicarte con la Secretaría de Empleo y Desarrollo Emprendedor del Gobierno de Santa Fe! ¡Por cualquier otra consulta no dudes en escribirme!')



const flowContactarme = addKeyword(['3'])
    .addAnswer('¡Gracias por comunicarte con la Secretaría de Empleo y Desarrollo Emprendedor del Gobierno de Santa Fe! En breve, nuestro equipo se pondrá en contacto con usted.')





module.exports = {
    flowQuieroRealizarOtraConsulta,
    flowGracias,
    flowContactarme,
};