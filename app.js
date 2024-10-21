const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

// const mensajeFinal = ["Gracias por tu contacto", "Puedes volver a escribir para realizar otra consulta"];


const flowImpulsa = addKeyword(['1', 'impulsa'])
    .addAnswer(
        [
            'En este link encontrarás toda la información sobre el programa *Impulsa*:',
            'https://www.santafe.gob.ar/ms/impulsa/'
        ])
    // .addAnswer(mensajeFinal);


const flowPracticasLaborales = addKeyword(['2', 'practicas'])
    .addAnswer(
        [
            'En este link encontrarás toda la información sobre el programa *Prácticas Laborales Formativas*:',
            'https://www.santafe.gob.ar/simtyss/portalempleo/?menu_subportales/ver_info_programa/2/'
        ])
    // .addAnswer(mensajeFinal);


const flowEmpleoJoven = addKeyword(['3', 'empleo'])
    .addAnswer(
        [
            'En este link encontrarás toda la información sobre el programa *Empleo Joven*:',
            'https://www.santafe.gob.ar/simtyss/portalempleo/?home/'
        ])
    // .addAnswer(mensajeFinal);


const flowOtrasConsultas = addKeyword(['4'])
    .addAnswer(
        [
            'Sección *Otras Consultas*:',
        ])
    // .addAnswer(mensajeFinal);


const flowPrincipal = addKeyword([EVENTS.WELCOME])
    .addAnswer('🙌 Bienvenido al Asistente Virtual de la Expo Empleo')
    .addAnswer(
        [
            '¿Qué información deseas ?',
            '👉 *1.* Impulsa',
            '👉 *2.* Prácticas Laborales Formativas',
            '👉 *3.* Empleo Joven',
            '👉 *4.* Otras consultas'
        ],
        null,
        null,
        [flowImpulsa, flowPracticasLaborales, flowEmpleoJoven, flowOtrasConsultas]
    );

    
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
};

main();
