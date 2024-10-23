const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const IMG_EXPO_EMPLEO = 'https://raw.githubusercontent.com/romanrios/chatbot-expoempleo/refs/heads/main/assets/expoempleo_cuadrado.png';


// TERCER NIVEL DE RESPUESTA







// SEGUNDO NIVEL DE RESPUESTA
const mensajeFinal = [
    '👉 *1.* Quiero realizar otra consulta',
    '👉 *2.* ¡Gracias por tu respuesta!',
    '👉 *3.* Quiero contactarme con una persona del equipo',
];

const flowExpoRosario = addKeyword(['1'])
    .addAnswer('Expo Empleo', { media: IMG_EXPO_EMPLEO })
    .addAnswer(
        [
            'La Expo Empleo Rosario se realiza el *Jueves 07/11* en *La Fluvial* desde las *10:00 hs hasta las 18:30 hs*',
            'Es una jornada donde más de 100 empresas van a estar recibiendo postulantes para vacantes en puestos laborales.',
            'Vas a poder postularte a tener *entrevistas* con esas empresas entrando en: LINK A LA PLATAFORMA en caso de quedar preseleccionado, te llegará un mail con tus turnos para ese día.',
            'También, independientemente de quedar seleccionado para las entrevistas o no, vas a poder *postularte* a todas las *búsquedas laborales activas* de *forma digital*, no necesitas llevar tu CV impreso.',
            'Además durante toda la jornada se estarán haciendo charlas, talleres y actividades vinculadas al mundo del trabajo ¡Sumate también a sumar más habilidades para el empleo! ¡Te esperamos!',
        ])
    .addAnswer(mensajeFinal);



const flowExpoSantaFe = addKeyword(['2'])
    .addAnswer('Expo Empleo', { media: IMG_EXPO_EMPLEO })
    .addAnswer(
        [
            'La Expo Empleo Santa Fe se realiza el *Miércoles 20/11* en el *Estadio Cubierto del Club Atlético Unión de Santa Fe* desde las *10:00 hs hasta las 18:30 hs* *',
            'Es una jornada donde más de 100 empresas van a estar recibiendo postulantes para vacantes en puestos laborales. ',
            'Vas a poder postularte a tener *entrevistas* con esas empresas entrando en: LINK A LA PLATAFORMA en caso de quedar preseleccionado, te llegará un mail con tus turnos para ese día.',
            'También, independientemente de quedar seleccionado para las entrevistas o no, vas a poder *postularte* a todas las *búsquedas laborales activas* de *forma digital*, no necesitas llevar tu CV impreso.',
            'Además durante toda la jornada se estarán haciendo charlas, talleres y actividades vinculadas al mundo del trabajo ¡Sumate también a sumar más habilidades para el empleo! ¡Te esperamos!',
        ])
    .addAnswer(mensajeFinal);


const flowImpulsa = addKeyword(['3', 'impulsa'])
    .addAnswer(
        [
            'Impulsa, Aprender, Producir, Trabajar, es una iniciativa liderada por el gabinete productivo de la Provincia de Santa Fe. Este plan se centra en la sinergia entre el Ministerio de Educación, el Ministerio de Desarrollo Productivo y el Ministerio de Trabajo, Empleo y Seguridad Social, con el objetivo de coordinar estratégicamente la capacitación laboral y la formación profesional de las personas. ',
            'Su desafío es mejorar sustancialmente las condiciones de empleabilidad, alineándose con las necesidades del sector privado, optimizando las matrices productivas y atendiendo a las áreas estratégicas que definen el territorio provincial.',
            'Así, se pretende equipar a los ciudadanos con herramientas que potencien su inserción en el mercado laboral y contribuyan al incremento de la productividad dentro de la Provincia de Santa Fe.',
            'Entre el Ministerio de Educación, el Ministerio de Desarrollo Productivo y el Ministerio de Trabajo, Empleo y Seguridad Social se concentra una gran cantidad de oferta formativa a lo largo y a lo ancho de la provincia, con certificación oficial, espacios de aprendizaje continuos, capacidad instalada para realizarlo y programas que acompañan el funcionamiento de los mismos y que éste gabinete busca articular eficientemente.',
            'Si querés conocer toda la oferta formativa vigente ingresá en: https://www.santafe.gob.ar/ms/impulsa/oferta-formativa-completa/',
            'Si querés postular una capacitación ingresá en: https://twww.santafe.gob.ar/simtyss/portalempleo/?menu_subportales/ver_info_programa/1/',
        ])
    .addAnswer(mensajeFinal);


const flowEmpleoJoven = addKeyword(['4', 'empleo'])
    .addAnswer(
        [
            'Empleo Joven es un programa provincial de intermediación laboral entre personas y empresas que busca favorecer la inserción y estabilidad laboral de las personas, brindando un estímulo económico a la contratación laboral registrada.',
            'De esta forma, también acompañamos a quienes producen y generan empleo en todo el territorio provincial.',
            'El estímulo económico es el equivalente al 85% del Salario Mínimo Vital y Móvil y el beneficio se extiende de 4 a 6 meses.',
            'Si estás buscando empleo, registrate en: https://twww.santafe.gob.ar/simtyss/portalempleo/?busqueda_detallada_puesto_pe/',
            'Si estás buscando personal, registrate en: https://twww.santafe.gob.ar/simtyss/portalempleo/?busqueda_detallada_postulante_pe/',
            'Si querés conocer más sobre este programa ingresá a: https://twww.santafe.gob.ar/simtyss/portalempleo/?home/',
        ])
    .addAnswer(mensajeFinal);


const flowPracticasLaborales = addKeyword(['5', 'practicas'])
    .addAnswer(
        [
            'A través del programa de Prácticas Laborales Formativas (PLF) los santafesinos podrán transitar una instancia de capacitación en un ámbito de trabajo real durante un plazo determinado, adquiriendo así conocimientos, competencias y habilidades que mejoren sus condiciones de empleabilidad, mientras perciben por ello un estímulo económico equivalente al 50% del Salario Mínimo Vital y Móvil a cargo del Gobierno de la Provincia de Santa Fe, por un período de hasta 6 meses.',
            'Si tenés una empresa, un comercio o un emprendimiento y querés solicitar el programa Prácticas Laborales Formativas ingresá en: https://www.santafe.gob.ar/trabdigno/login',
            // 'Si querés realizar una Práctica Laboral Formativa inscribite en:',
        ])
    .addAnswer(mensajeFinal);


const flowOtrasConsultas = addKeyword(['6', 'otra'])
    .addAnswer(
        [
            '¡Gracias por comunicarte con la Secretaría de Empleo y Desarrollo Emprendedor del gobierno de Santa Fe! En breve, nuestro equipo se pondrá en contacto con usted.',
        ])



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


const main = async () => {
    // const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        // database: adapterDB,
    })

    QRPortalWeb()
};

main();
