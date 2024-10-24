const { addKeyword } = require('@bot-whatsapp/bot');


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
        { capture: true },
        async (ctx, { gotoFlow }) => {
            const body = ctx.body;
            if (body.includes('1')) {
                const { flowExpoRosario } = require('./flowsSegundoNivel');
                return gotoFlow(flowExpoRosario);
            } else if (body.includes('2')) {
                const { flowExpoSantaFe } = require('./flowsSegundoNivel');
                return gotoFlow(flowExpoSantaFe);
            } else if (body.includes('3')) {
                const { flowImpulsa } = require('./flowsSegundoNivel');
                return gotoFlow(flowImpulsa);
            } else if (body.includes('4')) {
                const { flowEmpleoJoven } = require('./flowsSegundoNivel');
                return gotoFlow(flowEmpleoJoven);
            } else if (body.includes('5')) {
                const { flowPracticasLaborales } = require('./flowsSegundoNivel');
                return gotoFlow(flowPracticasLaborales);
            } else if (body.includes('6')) {
                const { flowOtrasConsultas } = require('./flowsSegundoNivel');
                return gotoFlow(flowOtrasConsultas);
            }
        },
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