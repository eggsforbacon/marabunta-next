import {TranslationEntry} from "@/services/common";

export const es: TranslationEntry[] = [
    {
        id: "0",
        prompt: "¿Qué vamos a $ juntos?",
        highlight: "crear",
        answers: [
            {
                title: "Un proyecto digital",
                description:
                    "Estrategias y contenidos que conectan, impulsan tu marca y generan interacción auténtica en redes sociales.",
            },
            {
                title: "Un proyecto de diseño",
                description:
                    "Creaciones visuales impactantes que representan la esencia de tu marca y capturan la atención de tu público objetivo.",
            },
            {
                title: "Un proyecto de comunicaciones",
                description:
                    "Planes integrales que fortalecen la conexión de tu marca con su audiencia, transmitiendo mensajes claros y efectivos.",
            },
            {
                title: "Un proyecto de producción",
                description:
                    "Gestión creativa y técnica para dar vida a tus ideas, desde la planificación hasta la ejecución logística.",
            },
        ],
    },

    // DIGITAL
    {
        id: "G0",
        context: "DIGITAL",
        prompt: "¿Cómo te podemos $?",
        highlight: "ayudar",
        answers: [
            {
                title: "Quiero un producto de software",
                description:
                    "Soluciones personalizadas que resuelven tus necesidades tecnológicas, optimizando procesos y brindando experiencias digitales de calidad.",

            },
            {
                title: "Quiero desarrollar mi marca",
                description:
                    "Planes integrales para construir desde cero una marca sólida, reconocible y alineada con tus valores.",

            },
            {
                title: "Quiero producción audiovisual",
                description:
                    "Gestión creativa y técnica para dar vida a tus ideas, desde la planificación hasta la ejecución logística.",

            },
            {
                title: "Quiero gestión de mis redes sociales",
                description:
                    "Diseñamos y administramos contenido estratégico para tus redes, aumentando engagement y visibilidad.",

            },
        ],
    },

    // PRODUCTO DE SOFTWARE

    {
        id: "G1",
        context: "PRODUCTO DE SOFTWARE",
        prompt: "¿Qué tipo de $?",
        highlight: "software",
        answers: [
            {
                title: "Un producto web",
                description:
                    "Desarrollos innovadores que aprovechan la web para ofrecer soluciones escalables, accesibles y adaptadas a tus necesidades empresariales.",

            },
            {
                title: "Un producto móvil",
                description:
                    "Apps intuitivas y dinámicas que ofrecen experiencias optimizadas para usuarios en dispositivos móviles.",

            },
            {
                title: "Un producto para computador",
                description:
                    "Aplicaciones robustas y eficientes diseñadas para entornos de escritorio, optimizando el rendimiento y la productividad.",

            },
        ],
    },

    //MODO COMPLEJO

    // WEB
    {
        id: "G1.1.1",
        context: "WEB",
        prompt: "¿Qué $ de página?",
        highlight: "clase",
        answers: [
            {
                title: "Una landing page",
                description:
                    "Captura leads y aumenta conversiones con una página de destino.",

            },
            {
                title: "Un Ecommerce",
                description:
                    "Vende tus productos y servicios en línea con una tienda virtual.",

            },
            {
                title: "Un blog",
                description:
                    "Atrae tráfico y posiciona tu marca con un blog informativo.",

            },
            {
                title: "Una página web a medida",
                description:
                    "¿Algo más en mente? Creamos tu sitio web a la medida de tus necesidades.",

            },
        ],
    },
    {
        id: "G1a",
        prompt: "¿Cuántos $ tiene tu sitio?",
        highlight: "productos",
        hint: "",
    },
    {
        id: "G1.1.2",
        prompt: "¿Necesitas servicios de $ interna?",
        highlight: "búsqueda",
        answers: [
            {
                title: "Sí, dentro de una página específica del sitio",
                description: "Implementamos búsqueda localizada para encontrar contenido en una sección concreta."
            },
            {
                title: "Sí, a nivel global en el sitio",
                description: "Configuramos búsqueda global para indexar y buscar en todo tu sitio."
            },
            {
                title: "No",
                description: "Omitimos buscador; el sitio se navegará con su estructura de menús estándar."
            },
            {
                title: "Necesito asesoría decidiendo",
                description: "Te asesoramos para definir la mejor estrategia de búsqueda interna."
            },
        ],
    },
    {
        id: "G1.1.3",
        prompt: "¿Ya tienes $?",
        highlight: "Hosting o Dominio",
        answers: [
            {
                title: "Sí, tengo ambos",
                description: "Gestionamos dominio y hosting, asegurando configuración óptima."
            },
            {
                title: "Sólo tengo el hosting",
                description: "Registramos dominio y lo vinculamos con tu hosting existente."
            },
            {
                title: "Sólo tengo el dominio",
                description: "Contratamos y configuramos hosting para tu dominio."
            },
            {
                title: "No tengo ninguno",
                description: "Registramos dominio y contratamos hosting desde cero."
            },
        ],
    },
    {
        id: "G1.1.4",
        prompt: "¿Necesitas servicios de $?",
        highlight: "SEO",
        answers: [
            {
                title: "Sí",
                description: "Analizamos y optimizamos tu sitio para mejorar visibilidad y ranking en buscadores."
            },
            {
                title: "No los necesito",
                description: "Omitimos SEO; confiamos en la visibilidad orgánica actual."
            },
            {
                title: "Necesito asesoría decidiendo",
                description: "Te guiamos en estrategia SEO para definir necesidades y acciones."
            },
        ],
    },

    // Móvil
    {
        id: "G1.2.1",
        context: "MÓVIL",
        prompt: "¿Qué clase de $?",
        highlight: "aplicativo",
        answers: [
            {
                title: "App de contenido.",
                description:
                    "Comparte información, noticias o multimedia desde tu dispositivo móvil.",

            },
            {
                title: "ECommerce.",
                description:
                    "Vende productos o servicios desde una tienda fácil de usar en el celular.",

            },
            {
                title: "Utilidad / Herramienta.",
                description:
                    "Facilita tareas diarias con una app práctica y funcional.",

            },
            {
                title: "A medida.",
                description:
                    "¿Tienes una idea distinta? Creamos tu app móvil desde cero.",

            },
        ],
    },
    {
        id: "G2a",
        prompt: "¿Cuántos $ tiene tu sitio?",
        highlight: "productos",
        hint: "",
    },
    {
        id: "G1.2.2",
        prompt: "¿Para qué $?",
        highlight: "plataformas",
        answers: [
            {
                title: "Android.",
                description:
                    "Desarrolla tu app para la plataforma más usada a nivel global.",

            },
            {
                title: "iOS.",
                description:
                    "Llega a usuarios de iPhone con una app optimizada para Apple.",

            },
            {
                title: "Ambas.",
                description:
                    "Amplía tu alcance con una app disponible en Android y iOS.",

            },
        ],
    },

    // Escritorio
    {
        id: "G1.3.1",
        context: "COMPUTADOR",
        prompt: "¿Qué clase de $?",
        highlight: "aplicación",
        answers: [
            {
                title: "Herramienta interna del negocio (CRM, ERP, etc).",
                description:
                    "Optimiza tu operación con un CRM, ERP u otra solución empresarial.",

            },
            {
                title: "Aplicación de escritorio standalone.",
                description:
                    "Ejecuta sin depender de internet con una app de escritorio independiente.",

            },
            {
                title: "Aplicación lúdica-educativa (videojuego educativo).",
                description:
                    "Enseña de forma divertida con un videojuego educativo personalizado.",

            },
            {
                title: "A medida.",
                description:
                    "¿Tienes una idea única? Creamos la app que necesitas desde cero.",

            },
        ],
    },
    {
        id: "G1.3.2",
        prompt: "¿Para qué $?",
        highlight: "sistema operativo",
        answers: [
            {
                title: "Windows.",
                description:
                    "Optimiza tu app para el sistema operativo más usado del mundo.",

            },
            {
                title: "MacOS/Linux.",
                description:
                    "Desarrolla tu aplicación para entornos Mac o Linux según tu público.",

            },
        ],
    },
    // Se finaliza el flujo si escoge MacOS/Linux
    {
        id: "G1.3.3",
        prompt: "¿Cuál es su $?",
        highlight: "propósito",
        answers: [
            {
                title: "Automatización / Optimización.",
                description:
                    "Ahorra tiempo y mejora procesos con herramientas inteligentes.",

            },
            {
                title: "Análisis de Datos.",
                description:
                    "Toma mejores decisiones con visualizaciones e informes claros.",

            },
            {
                title: "Creación de Contenido.",
                description:
                    "Diseña, edita o produce contenido con herramientas especializadas.",

            },
            {
                title: "Otro.",
                description:
                    "¿Tienes otro objetivo en mente? Lo adaptamos a tu necesidad.",

            },
        ],
    },


    // CONVERGENCIA
    {
        id: "G1b.1",
        prompt: "¿Necesitas $ de terceros?",
        highlight: "integración",
        answers: [
            {
                title: "No.",
                description:
                    "Tu aplicación funcionará de forma independiente, sin conectarse a otros servicios.",

            },
            {
                title: "Sí, básica.",
                description:
                    "Incluye conexión con servicios comunes como correo, APIs o redes sociales.",

            },
            {
                title: "Sí, avanzada.",
                description:
                    "Integra sistemas complejos como pasarelas de pago, CRMs o bases de datos externas.",

            },
        ],
    },
    {
        id: "G1b.2",
        prompt: "¿Offline o $?",
        highlight: "Online",
        answers: [
            {
                title: "Offline y Online.",
                description:
                    "Funciona con o sin conexión para mayor flexibilidad y accesibilidad.",

            },
            {
                title: "Online.",
                description:
                    "Requiere conexión a internet para operar y acceder a sus funciones.",

            },
            {
                title: "Offline.",
                description:
                    "Todo funciona localmente, sin necesidad de conexión a internet.",

            },
        ],
    },
    {
        id: "G1b.3",
        prompt: "¿Cuántas $ necesitas?",
        highlight: "pantallas",
        hint: "",
    },
    {
        id: "G1b.4",
        prompt: "¿Necesitas una $ de pagos?",
        highlight: "pasarela",
        answers: [
            {
                title: "Sí, necesito crearla",
                description:
                    "Te ayudamos a configurar tu pasarela de pagos para que puedas empezar a recibir pagos.",

            },
            {
                title: "Tengo una, necesito integrarla",
                description:
                    "Cuéntanos cuál es y nos encargamos de integrarla a tu sitio web.",

            },
            {
                title: "No",

            },
        ],
        options: [
            [
                "PayU Latam",
                "MercadoPago",
                "Place to Pay",
                "ePayco",
                "PSE (Pagos Seguros en Línea)",
                "Stripe",
                "Square",
                "Provista por un banco (nacional o internacional)",
                "Banco en Linea (como Nequi o Daviplata)",
                "Otra",
            ],
        ],
    },
    {
        id: "G1b.5",
        prompt: "¿Cómo quieres el $?",
        highlight: "diseño",
        answers: [
            {
                title: "Ya tengo uno",
                description:
                    "¡Perfecto! Proporciónanos tu diseño y lo integraremos a una plataforma funcional y optimizada.",

            },
            {
                title: "Quiero un diseño personalizado",
                description:
                    "Creamos un diseño único y a medida que refleje la identidad de tu marca y cautive a tu audiencia.",

            },
            {
                title: "Quiero usar una plantilla",
                description:
                    "Te ayudamos a encontrar y personalizar una plantilla profesional que se adapte a tus necesidades.",

            },
            {
                title: "Necesito asesoría decidiendo",
                description:
                    "¡Con gusto te ayudamos! Te asesoramos para encontrar el diseño que mejor se adapte a tus objetivos y presupuesto.",

            },
        ],
    },
    {
        id: "G1b.6",
        prompt: "¿Necesitas usuarios e $?",
        highlight: "inicio de sesión",
        answers: [
            {
                title: "Sí, para fines administrativos",
                description:
                    "Implementamos sistemas seguros y eficientes para gestionar tu plataforma.",

            },
            {
                title: "Sí, para los usuarios de mi sitio",
                description:
                    "Creamos experiencias de inicio de sesión fáciles de usar, asegurando la protección de datos y la accesibilidad para tus usuarios.",

            },
            {
                title: "Sí, múltiples inicios de sesión",
                description:
                    "Desarrollamos sistemas complejos que gestionan diferentes roles de usuario, priorizando la seguridad y la funcionalidad.",

            },
            {
                title: "No",

            },
        ],
    },
    {
        id: "G1b.7",
        prompt: "¿Tu producto maneja $?",
        highlight: "datos sensibles",
        answers: [
            {
                title: "Si.",
                description:
                    "Tu app manejará información confidencial y requiere altos estándares de seguridad.",

            },
            {
                title: "No.",
                description:
                    "No se gestionará información delicada, el enfoque será funcional y general.",

            },
        ],
    },
    {
        id: "G1b.8",
        prompt: "¿Necesitas varios $ para tu desarrollo?",
        highlight: "idiomas",
        answers: [
            {
                title: "Sí",

            },
            {
                title: "No ",

            },
        ],
        options: [["Español", "Inglés", "Alemán", "Francés", "Italiano", "Otro"]],
    },
    {
        id: "G1b.9",
        prompt: "¿Qué nivel de $ necesitas para tu producto?",
        highlight: "interacciones y animaciones",
        answers: [
            {
                title: "No necesito animaciones o interacciones puntuales.",
                description: "Manejamos un producto estático sin efectos de movimiento o interactividad."
            },
            {
                title: "Menos de 3 animaciones, o con interacciones estándares.",
                description: "Añadimos pocas animaciones simples e interacciones predeterminadas para mejorar UX."
            },
            {
                title: "Más de 3 animaciones, o con interacciones complejas.",
                description: "Implementamos múltiples animaciones e interacciones avanzadas para una experiencia dinámica."
            },
            {
                title: "Necesito ayuda decidiendo.",
                description: "Te asesoramos en definir el nivel óptimo de animaciones e interacciones en caso de verlo necesario."
            },
        ],
    },
    {
        id: "G1b.10",
        prompt: "¿En qué $ se encuentra tu producto?",
        highlight: "etapa",
        answers: [
            {
                title: "En ceros, sólo está la idea.",
                description:
                    "No hay avances previos; partiremos desde cero para conceptualizar, diseñar y desarrollar tu producto completamente.",

            },
            {
                title: "Tengo algunas referencias, pero no hay nada hecho.",
                description:
                    "Tienes una idea general y algunas inspiraciones; trabajaremos para convertir esas referencias en un producto claro y funcional.",

            },
            {
                title: "Ya está en desarrollo.",
                description:
                    "Tu proyecto tiene progreso inicial o intermedio; podemos integrarnos para completar el desarrollo según tus objetivos.",

            },
            {
                title: "Está desarrollada. Quiero actualizarla o migrarla.",
                description:
                    "Tu producto ya existe, y necesitas ayuda para actualizarlo con nuevas características o adaptarlo a otra plataforma o tecnología.",

            },
        ],
    },

    // DESARROLLO DE MARCA
    {
        id: "G2.1",
        context: "DESARROLLO DE MARCA",
        prompt: "¿Cuál es el estado de tu $?",
        highlight: "marca",
        answers: [
            {
                title: "Solo está la idea, no hay nada definido.",
                description:
                    "Partimos desde cero para crear una identidad de marca única, diseñando desde el nombre hasta los elementos visuales que representen tu visión.",

            },
            {
                title: "Tengo algunos bocetos o referencias, pero nada implementado.",
                description:
                    "Tomamos tus ideas iniciales o referencias y las transformamos en una marca coherente y profesional, alineada con tus objetivos.",

            },
            {
                title: "Marca en desarrollo (algunos activos ya existen, pero incompletos).",
                description:
                    "Completamos y optimizamos los elementos existentes de tu marca, asegurando consistencia y un impacto visual sólido en todos los canales.",

            },
            {
                title: "Marca establecida, necesito actualización o ampliación de servicios.",
                description:
                    "Actualizamos o ampliamos tu marca con nuevos elementos visuales, estrategias digitales o campañas para mantenerla relevante y competitiva.",

            },
        ],
    },
    {
        id: "G2.2",
        prompt: "¿Necesitas $?",
        highlight: "naming",
        answers: [
            {
                title: "Quiero que lo generen completamente desde cero.",
                description:
                    "Creamos un nombre único y memorable para tu marca, asegurándonos de que sea distintivo y esté disponible para registro.",

            },
            {
                title: "Ya tengo 2–3 opciones y necesito validación y registro de marca (verificación de disponibilidad).",
                description:
                    "Analizamos tus opciones de nombre, verificamos su disponibilidad legal y te ayudamos a seleccionar la mejor para tu marca.",

            },
            {
                title: "Solo quiero verificar y validar un nombre existente (sin generación).",
                description:
                    "Revisamos tu nombre actual para confirmar su disponibilidad y viabilidad, asegurando que sea adecuado para tu mercado objetivo.",

            },
            {
                title: "No necesito.",
                description:
                    "Si ya tienes un nombre definido, nos enfocamos en otros aspectos de tu marca, como diseño o estrategia de posicionamiento.",

            },
        ],
    },
    {
        id: "G2.3",
        prompt: "¿Necesitas $?",
        highlight: "Benchmarking",
        answers: [
            {
                title: "Si.",
                description:
                    "Realizamos un análisis detallado de tu industria y competidores para identificar oportunidades y posicionar tu marca de manera efectiva.",

            },
            {
                title: "No necesito.",
                description:
                    "Si ya tienes claridad sobre tu mercado, nos enfocamos directamente en desarrollar o mejorar los elementos de tu marca.",

            },
        ],
    },
    {
        id: "G2.4",
        prompt: "¿Ya tienes definidos $ a transmitir?",
        highlight: "valores",
        answers: [
            {
                title: "No, deseo que nos apoyen en definirlos desde cero.",
                description:
                    "Te ayudamos a identificar y articular los valores fundamentales de tu marca, creando una base sólida para su identidad y comunicación.",

            },
            {
                title: "Sí, tengo algunos valores y necesito refinarlos.",
                description:
                    "Trabajamos contigo para pulir y alinear tus valores existentes, asegurando que reflejen la esencia de tu marca y conecten con tu audiencia.",

            },
            {
                title: "Solo necesito validación de la personalidad existente.",
                description:
                    "Revisamos los valores actuales de tu marca para confirmar que son coherentes y efectivos, ofreciendo ajustes si es necesario.",
            },
            {
                title: "Si, no necesito definirlos.",
                description:
                    "Si tus valores ya están definidos, nos enfocamos en integrarlos en tu estrategia de marca y diseño visual",

            },
        ],
    },
    {
        id: "G2.5",
        prompt: "¿Necesitas $?",
        highlight: "diagnostico de marca",
        answers: [
            {
                title: "Si.",
                description:
                    "Realizamos un análisis completo de tu marca actual para evaluar su posicionamiento, coherencia y oportunidades de mejora.",

            },
            {
                title: "No necesito.",
                description:
                    "Si tu marca ya está bien establecida, avanzamos directamente con los servicios de diseño, estrategia o implementación que necesites.",

            },
        ],
    },
    {
        id: "G2.6",
        prompt: "¿Necesitas $?",
        highlight: "análisis de mercado",
        answers: [
            {
                title: "Si.",
                description:
                    "Estudiamos tu mercado objetivo para identificar tendencias, necesidades y oportunidades que fortalezcan la estrategia de tu marca.",

            },
            {
                title: "No necesito.",
                description:
                    "Si ya conoces tu mercado, nos enfocamos en crear o mejorar los elementos visuales y estratégicos de tu marca.",

            },
        ],
    },
    {
        id: "G2.7",
        prompt: "¿Ya tienes un borrador de $?",
        highlight: "objetivos, misión y/o visión",
        answers: [
            {
                title: "No, es desde cero.",
                description:
                    "Creamos desde cero tu misión, visión y objetivos, asegurando que representen la esencia de tu marca y guíen su estrategia.",

            },
            {
                title: "Sí, tengo un borrador y necesito revisión y ajuste.",
                description:
                    "Revisamos y optimizamos tu borrador de misión, visión y objetivos para que sean claros, inspiradores y alineados con tu marca.",

            },
            {
                title: "Solo quiero validación rápida (feedback puntual).",
                description:
                    "Evaluamos rápidamente tu misión, visión y objetivos existentes, proporcionando feedback para asegurar su efectividad.",

            },
            {
                title: "Si, no necesito.",
                description:
                    "Si ya tienes misión, visión y objetivos definidos, nos enfocamos en integrarlos en tu estrategia de branding y diseño.",

            },
        ],
    },
    {
        id: "G2.8",
        prompt: "¿Necesitas $?",
        highlight: "análisis de competencia",
        answers: [
            {
                title: "Si.",
                description:
                    "Analizamos a tus competidores para identificar fortalezas, debilidades y oportunidades que posicionen tu marca de manera única.",

            },
            {
                title: "No necesito.",
                description:
                    "Si ya tienes un análisis de competencia, nos enfocamos en desarrollar o mejorar los elementos de tu marca directamente.",

            },
        ],
    },
    {
        id: "G2.9",
        prompt: "¿Necesitas realizar $?",
        highlight: "lanzamiento de marca",
        answers: [
            {
                title: "Si.",
                description:
                    "Planificamos y ejecutamos una estrategia de lanzamiento impactante para presentar tu marca al mercado con éxito.",

            },
            {
                title: "No necesito.",
                description:
                    "Si tu marca ya está lanzada, nos enfocamos en optimizarla o en crear nuevos elementos para su crecimiento.",

            },
        ],
    },

    // PRODUCCION AUDIOVISUAL
    {
        id: "G3.1",
        context: "PRODUCCIÓN AUDIOVISUAL",
        prompt: "¿Cuentas con $ o recursos?",
        highlight: "insumos",
        answers: [
            {
                title: "Si, ya cuento con imagenes de archivo.",
                description:
                    "Usamos tus imágenes de archivo para crear contenido audiovisual de alta calidad, optimizando tiempo y recursos.",

            },
            {
                title: "Si, cuento con recursos pero quiero realizar nuevo rodaje.",
                description:
                    "Combinamos tus recursos existentes con un nuevo rodaje para producir contenido fresco y alineado con tu visión.",

            },
            {
                title: "No tengo insumos o recursos.",
                description:
                    "Producimos todo desde cero, incluyendo rodaje, fotografía y edición, para crear contenido audiovisual impactante.",

            },
        ],
    },
    {
        id: "G3.2",
        prompt: "¿El $ mostrará a alguien hablando o solo imágenes del lugar?",
        highlight: "video",
        answers: [
            {
                title: "Persona hablando a cámara.",
                description:
                    "Creamos un video con una persona comunicando tu mensaje directamente, ideal para transmitir cercanía y autenticidad.",

            },
            {
                title: "Solo tomas del lugar.",
                description:
                    "Producimos un video con imágenes del entorno, perfecto para destacar locaciones, productos o experiencias visuales.",

            },
            {
                title: "Ambas.",
                description:
                    "Combinamos tomas de personas hablando y escenas del lugar para un video dinámico y completo que capte la atención.",

            },
        ],
    },
    {
        id: "G3.3",
        prompt: "¿Tienes la $ para tu video?",
        highlight: "idea",
        answers: [
            {
                title: "Necesito ayuda con la idea y el storyboarding",
                description:
                    "Creamos desde cero la idea creativa y el guion gráfico para tu video, asegurando un concepto claro y visualmente impactante.",

            },
            {
                title: "Tengo la idea pero necesito el storyboarding",
                description:
                    "Tomamos tu idea y la convertimos en un guion gráfico detallado, listo para guiar la producción de tu video.",

            },
            {
                title: "Tengo el storyboarding hecho",
                description:
                    "Usamos tu guion gráfico existente para producir un video profesional, optimizando cada detalle según tus objetivos.",

            },
        ]
    },
    {
        id: "G3.4",
        prompt: "¿Se requiere $ de iluminación y sonido?",
        highlight: "equipos",
        answers: [
            {
                title: "Si.",
                description:
                    "Proporcionamos equipos profesionales de iluminación y sonido para garantizar una producción audiovisual de alta calidad.",

            },
            {
                title: "No.",
                description:
                    "Si no necesitas equipos especializados, optimizamos la producción con recursos básicos para cumplir tus objetivos.",

            },
            {
                title: "Necesito asesoría.",
                description:
                    "Te ayudamos a determinar qué equipos de iluminación y sonido son necesarios según el tipo de video que deseas.",

            },
        ],
    },
    {
        id: "G3.5",
        prompt: "¿Cuántos $ necesitas?",
        highlight: "videos",
        hint: "",
    },

    {
        id: "G3.6",
        prompt: "¿De cuanto es la $ aproximada del video?",
        highlight: "duracion",
        hint: "",
    },

    // GESTION DE REDES SOCIALES
    {
        id: "G4.1",
        context: "GESTIÓN DE REDES SOCIALES",
        prompt: "¿Qué $ sociales?",
        highlight: "redes",
        answers: [
            {
                title: "Selecciona las redes sociales que necesites",

            },
        ],
        options: [
            [
                "LinkedIn",
                "Instagram",
                "Facebook",
                "Twitter/X",
                "TikTok",
                "YouTube",
                "Pinterest",
                "WhatsApp",
                "Otra",
            ],
        ],
    },

    {
        id: "G4.2",
        prompt: "¿Necesitas $ y cronoposts?",
        highlight: "publicaciones",
        answers: [
            {
                title: "Si.",
                description: "Creamos y programamos publicaciones según tu calendario editorial."
            },
            {
                title: "No.",
                description: "Omitimos programación; nos centramos en otros formatos de contenido."
            },
        ],
    },

    {
        id: "G4.3",
        prompt: "¿Necesitas $ tu comunidad?",
        highlight: "gestionar",
        answers: [
            {
                title: "Si.",
                description: "Moderamos y fomentamos la interacción para fortalecer el vínculo con tu audiencia."
            },
            {
                title: "No.",
                description: "No gestionamos comunidad; mantienes comunicación directa con tus seguidores."
            },
        ],
    },

    // MODO SIMPLE

    {
        id: "GS1.1.1",
        prompt: "¿Qué $ de página?",
        highlight: "clase",
        answers: [
            {
                title: "Una landing page.",
                description:
                    "Captura leads y aumenta conversiones con una página de destino.",

            },
            {
                title: "Un Ecommerce.",
                description:
                    "Vende tus productos y servicios en línea con una tienda virtual.",

            },
            {
                title: "Otro.",
                description:
                    "¿Algo más en mente? Creamos tu sitio web a la medida de tus necesidades.",

            },
        ],
    },
    {
        id: "GS1.2.1",
        prompt: "¿Qué clase de $?",
        highlight: "aplicativo",
        answers: [
            {
                title: "App simple.",
                description:
                    "Aplicación básica enfocada en funcionalidades esenciales y experiencia directa.",

            },
            {
                title: "Un Ecommerce.",
                description:
                    "App de tienda online con catálogo, carrito y pasarelas de pago integradas.",

            },
            {
                title: "Utilidad.",
                description:
                    "Herramienta para resolver tareas específicas o automatizar procesos.",

            },
        ],
    },
    {
        id: "GS1.3.1",
        prompt: "¿Qué clase de $?",
        highlight: "aplicación",
        answers: [
            {
                title: "Herramienta ligera.",
                description:
                    "Aplicación de escritorio enfocada en tareas puntuales y bajo consumo de recursos.",

            },
            {
                title: "Herramienta compleja.",
                description:
                    "Aplicación robusta con múltiples módulos, integración y alto rendimiento.",

            },
        ],
    },
    {
        id: "GS1b.1",
        prompt: "¿Qué rango de $ estimas?",
        highlight: "páginas, vistas o módulos",
        answers: [
            {
                title: "Pocos, hasta 8.",
                description:
                    "Sitio pequeño, estructura simple, desarrollo más rápido y costo menor.",

            },
            {
                title: "Varios, de 8 a 16.",
                description:
                    "Sitio mediano con secciones variadas y funcionalidades moderadas.",

            },
            {
                title: "Muchos, más de 16.",
                description:
                    "Proyecto grande y complejo con múltiples módulos, mayor tiempo y costo.",

            },
        ],
    },
    {
        id: "GS1b.2",
        prompt: "¿Posees $ o alguna plataforma ya existente?",
        highlight: "hosting",
        answers: [
            {
                title: "Si",
                description:
                    "Tengo hosting/plataforma; gestionamos integración, configuración y despliegue.",

            },
            {
                title: "No.",
                description:
                    "No tengo; contratamos y configuramos hosting y plataforma desde cero.",

            },
        ],
    },

    // MARCA
    {
        id: "GS2.2",
        prompt: "¿Necesitas $?",
        highlight: "naming",
        answers: [
            {
                title: "Si.",
                description:
                    "Creamos, analizamos o revisamos un nombre único y memorable para tu marca.",

            },
            {
                title: "No necesito.",
                description:
                    "Si ya tienes un nombre definido, nos enfocamos en otros aspectos de tu marca, como diseño o estrategia de posicionamiento.",

            },
        ],
    },

    // PRODUCCIÓN AUDIOVISUAL
    {
        id: "GS3.1",
        prompt: "¿Cuentas con $?",
        highlight: "insumos o recursos",
        answers: [
            {
                title: "Si, tengo material existente.",
                description:
                    "Usamos tus imágenes de archivo para crear contenido audiovisual de alta calidad, optimizando tiempo y recursos.",

            },
            {
                title: "No tengo insumos o recursos.",
                description:
                    "Producimos todo desde cero, incluyendo rodaje, fotografía y edición, para crear contenido audiovisual impactante.",

            },
        ],
    },

    {
        id: "GS3.2",
        prompt: "¿Se requiere equipos de $?",
        highlight: "iluminación y sonido",
        answers: [
            {
                title: "Si.",
                description:
                    "Proporcionamos equipos profesionales de iluminación y sonido para garantizar una producción audiovisual de alta calidad.",

            },
            {
                title: "No, no necesito.",
                description:
                    "Si no necesitas equipos especializados, optimizamos la producción con recursos básicos para cumplir tus objetivos.",

            },
        ],
    },

    {
        id: "GS3.3",
        prompt: "¿Cuántos $ necesitas?",
        highlight: "videos",
        answers: [
            {
                title: "Solo uno.",
                description:
                    "",

            },
            {
                title: "Más de uno.",
                description:
                    "",

            },
        ],
    },

    {
        id: "GS3.4",
        prompt: "¿De cuanto es la $ aproximada del video?",
        highlight: "duración",
        answers: [
            {
                title: "Hasta un minuto.",
                description:
                    "",

            },
            {
                title: "De más de un minuto.",
                description:
                    "",

            },
        ],
    },

    // REDES SOCIALES


//DISEÑO
// MODO COMPLEJO

    {
        id: "D0",
        context: "DISEÑO",
        prompt: "¿Cómo te podemos $?",
        highlight: "ayudar",
        answers: [
            {
                title: "Quiero diseño gráfico y 2D",
                description:
                    "Creamos diseños visuales impactantes en 2D, desde logotipos hasta materiales corporativos, para fortalecer la identidad de tu marca.",

            },
            {
                title: "Quiero diseño animado",
                description:
                    "Producimos animaciones dinámicas en 2D o 3D que capturan la atención y comunican tu mensaje de forma creativa.",

            },
            {
                title: "Quiero un diseño 3D estático",
                description:
                    "Desarrollamos modelos 3D estáticos para productos, espacios o visualizaciones, con alto nivel de detalle y realismo.",

            },
            {
                title: "Quiero fotografía y postproducción",
                description:
                    "Ofrecemos sesiones fotográficas profesionales y edición avanzada para crear imágenes impactantes para tu marca o proyecto.",

            },
        ],

    },

//DISEÑO GRAFICO Y 2D 

    {
        id: "D1",
        context: "DISEÑO GRÁFICO Y 2D",
        prompt: "¿Qué $ requieres?",
        highlight: "servicio",
        answers: [
            {
                title: "Branding",
                description:
                    "Creamos o renovamos la identidad visual de tu marca, incluyendo logotipos, paletas de colores y tipografías únicas.",

            },
            {
                title: "Material Corporativo",
                description:
                    "Diseñamos piezas corporativas como tarjetas de presentación, folletos y banners, alineadas con la identidad de tu marca.",

            },
            {
                title: "Diseño Editorial",
                description:
                    "Producimos publicaciones como revistas, catálogos o libros con un diseño atractivo y una diagramación profesional.",

            },
            {
                title: "Ilustración",
                description:
                    "Creamos ilustraciones personalizadas para campañas, productos o contenido digital, adaptadas a tu estilo y necesidades.",
            },
        ]
    },

//BRANDING

    {
        id: "D1.1.1",
        context: "BRANDING",
        prompt: "¿Necesitas nuevo $ o rediseño?",
        highlight: "branding",
        answers: [
            {
                title: "Nuevo branding",
                description:
                    "Desarrollamos una identidad de marca desde cero, creando elementos visuales que representen tu visión y conecten con tu audiencia.",
            },
            {
                title: "Rediseño",
                description:
                    "Actualizamos tu branding existente para modernizarlo, mejorar su impacto y alinearlo con tus objetivos actuales.",
            },
        ]
    },

    {
        id: "D1.1.2",
        prompt: "¿Necesitas $ de marca?",
        highlight: "manual",
        answers: [
            {
                title: "Si.",
                description: "Desarrollamos manual de marca con lineamientos de identidad visual y uso correcto."
            },
            {
                title: "No necesito.",
                description: "Omitimos manual; puedes usar tus propias guías de identidad visual."
            },
        ]
    },

    {
        id: "D1.1.3",
        prompt: "¿Necesitas $ de logotipo?",
        highlight: "diseño",
        answers: [
            {
                title: "Si.",
                description: "Creamos un logotipo único y alineado con la identidad de tu marca."
            },
            {
                title: "No necesito.",
                description: "Omitimos diseño de logotipo; puedes usar uno existente o proporcionarlo."
            },
        ]
    },

//MATERIAL CORPORATIVO

    {
        id: "D1.2.1",
        context: "MATERIAL CORPORATIVO",
        prompt: "¿Qué tipo de $ necesitas",
        highlight: "piezas",
        answers: [
            {
                title: "Piezas grandes",
                description:
                    "Diseñamos materiales de gran formato como vallas, pendones o carteles para un impacto visual máximo en eventos o espacios públicos.",
            },
            {
                title: "Piezas pequeñas",
                description:
                    "Creamos elementos compactos como tarjetas de presentación, volantes o etiquetas, perfectos para detalles corporativos.",
            },
            {
                title: "Piezas digitales",
                description:
                    "Producimos gráficos optimizados para redes sociales, sitios web o campañas digitales, adaptados a tus necesidades online.",
            },
        ]
    },
    {
        id: "D1.2.2",
        prompt: "¿Cantidad de piezas $ a diseñar?",
        highlight: "distintas",
        hint: "",
    },

//DISEÑO EDITORIAL

    {
        id: "D1.3.1",
        context: "DISEÑO EDITORIAL",
        prompt: "¿Qué tipo de $ necesitas?",
        highlight: "publicación",
        answers: [
            {
                title: "Revista",
                description:
                    "Diseñamos revistas atractivas con una diagramación profesional que combina estética y funcionalidad para captar a tu audiencia.",
            },
            {
                title: "Catalogo",
                description:
                    "Creamos catálogos visualmente impactantes para mostrar tus productos o servicios de manera clara y organizada.",
            },
            {
                title: "Libro",
                description:
                    "Producimos el diseño y diagramación de libros, asegurando un formato elegante y legible que resalte tu contenido.",
            },
            {
                title: "Informe",
                description:
                    "Diseñamos informes profesionales con gráficos claros y un diseño limpio para comunicar datos de manera efectiva.",
            },
        ]
    },

    {
        id: "D1.3.2",
        prompt: "¿Necesitas $ o solo diseño?",
        highlight: "diagramación",
        answers: [
            {
                title: "Necesito diagramación y diseño.",
                description:
                    "Creamos el diseño visual y la diagramación completa de tu publicación, asegurando un resultado profesional y cohesivo.",
            },
            {
                title: "Necesito solo diagramación.",
                description:
                    "Organizamos tu contenido existente en un formato claro y atractivo, optimizando la estructura de la publicación.",
            },
            {
                title: "Necesito solo diseño.",
                description:
                    "Diseñamos elementos visuales para tu publicación, como portadas o gráficos, sin incluir la diagramación completa.",
            },
            {
                title: "No necesito.",
                description:
                    "Si ya tienes el diseño y la diagramación, nos enfocamos en otros aspectos de tu proyecto editorial.",
            },
        ]
    },

    {
        id: "D1.3.3",
        prompt: "¿Número estimado de $?",
        highlight: "páginas",
        hint: "",
    },


//ILUSTRACION

    {
        id: "D1.4.1",
        context: "ILUSTRACIÓN",
        prompt: "¿Qué tipo de $ necesitas??",
        highlight: "ilustración",
        answers: [
            {
                title: "Ilustración conceptual",
                description:
                    "Creamos ilustraciones abstractas que transmiten ideas o conceptos, ideales para campañas creativas o narrativas visuales.",
            },
            {
                title: "Ilustración de personaje",
                description:
                    "Diseñamos personajes únicos para tu marca, historias o campañas, con un estilo que conecta con tu audiencia.",
            },
            {
                title: "Ilustración técnica",
                description:
                    "Producimos ilustraciones precisas para manuales, diagramas o productos, con un enfoque en claridad y detalle.",
            },

        ]
    },

    {
        id: "D1.4.2",
        prompt: "¿Qué $ de ilustración buscas?",
        highlight: "estilo",
        answers: [
            {
                title: "Sketch",
                description:
                    "Creamos ilustraciones con un estilo de boceto a mano, perfecto para un look orgánico y creativo.",
            },
            {
                title: "Vectorial",
                description:
                    "Diseñamos ilustraciones vectoriales escalables, ideales para branding, impresiones y uso digital sin pérdida de calidad.",
            },
            {
                title: "Digital",
                description:
                    "Producimos ilustraciones digitales con acabados modernos, adaptadas a tus necesidades en redes sociales o campañas.",
            },
        ]
    },
    {
        id: "D1.4.3",
        prompt: "¿Número $ estimadas?",
        highlight: "piezas",
        hint: "",
    },

//DISEÑO ANIMADO

    {
        id: "D2.1",
        context: "DISEÑO ANIMADO",
        prompt: "¿Qué clase de $ necesitas?",
        highlight: "animación",
        answers: [
            {
                title: "Animación 2D",
                description:
                    "Creamos animaciones bidimensionales vibrantes, perfectas para videos explicativos, anuncios o contenido digital.",
            },
            {
                title: "Animación 3D",
                description:
                    "Producimos animaciones tridimensionales con alto nivel de detalle, ideales para productos o visualizaciones inmersivas.",
            },
            {
                title: "Animación 2D y 3D",
                description:
                    "Combinamos técnicas 2D y 3D para crear animaciones únicas que destacan por su creatividad y versatilidad.",
            },
        ]
    },

    {
        id: "D2.2",
        prompt: "¿Qué nivel de $ deseas?",
        highlight: "realismo",
        answers: [
            {
                title: "Cartoon",
                description:
                    "Diseñamos animaciones con un estilo caricaturesco, ideal para contenido lúdico, educativo o de entretenimiento.",
            },
            {
                title: "Realista",
                description:
                    "Creamos animaciones con un enfoque realista, perfectas para visualizaciones de productos o proyectos técnicos.",
            },
        ]
    },

    {
        id: "D2.3",
        prompt: "¿Qué tipo de $ buscas?",
        highlight: "contenido",
        answers: [
            {
                title: "Producto",
                description:
                    "Animamos productos para destacar sus características y atraer a tu audiencia en campañas o presentaciones.",
            },
            {
                title: "Arquitectura",
                description:
                    "Creamos animaciones de espacios arquitectónicos para visualizar proyectos de diseño o construcciones de manera impactante.",
            },
            {
                title: "Personajes",
                description:
                    "Diseñamos y animamos personajes que dan vida a historias o campañas, conectando emocionalmente con tu público.",
            },
        ]
    },

    {
        id: "D2.4",
        prompt: "¿Qué tipo de $ buscas?",
        highlight: "animación",
        answers: [
            {
                title: "Explicativa",
                description:
                    "Producimos animaciones que explican conceptos o procesos de forma clara y atractiva, ideales para tutoriales o presentaciones.",
            },
            {
                title: "Storytelling",
                description:
                    "Creamos animaciones narrativas que cuentan historias envolventes para conectar emocionalmente con tu audiencia.",
            },
            {
                title: "Motion graphics",
                description:
                    "Diseñamos gráficos en movimiento modernos para anuncios, intros o contenido digital que capte la atención.",
            },
        ]
    },

    {
        id: "D2.5",
        prompt: "¿Duración estimada de la $?",
        highlight: "animación",
        hint: "",
    },

    {
        id: "D2.6",
        prompt: "¿Deseas agregar algo más a la $?",
        highlight: "animación",
        answers: [
            {
                title: "Voz en off",
                description:
                    "Incluimos una narración profesional que guía al espectador, aporta contexto adicional y refuerza el mensaje de tu animación.",
            },
            {
                title: "Música",
                description:
                    "Añadimos una banda sonora original o libre de derechos para potenciar la atmósfera, evocar emociones y hacer tu animación más envolvente.",
            },
            {
                title: "Subtítulos",
                description:
                    "Incorporamos subtítulos sincronizados para asegurar la accesibilidad, facilitar la comprensión en entornos sin sonido y llegar a audiencias multilingües.",
            },
            {
                title: "Ninguna",
                description:
                    "Optamos por dejar la animación sin elementos adicionales, manteniendo su simplicidad y pureza para un enfoque directo en lo visual.",
            },
        ]
    },


//DISEÑO 3D ESTATICO

    {
        id: "D3.1",
        context: "DISEÑO 3D ESTÁTICO",
        prompt: "¿Que $ necesitas?",
        highlight: "servicios",
        answers: [
            {
                title: "Modelado 3D",
                description:
                    "Creamos modelos tridimensionales detallados para productos, objetos o personajes, listos para renderizado o uso digital.",
            },
            {
                title: "Stands y espacios",
                description:
                    "Diseñamos visualizaciones 3D de stands o espacios para eventos, ferias o presentaciones, con un enfoque en impacto visual.",
            },
            {
                title: "Modelado de espacios",
                description:
                    "Producimos modelos 3D de entornos arquitectónicos o interiores, ideales para proyectos de diseño o planificación.",
            },
        ]
    },

//MODELO 3D 

    {
        id: "D3.1.1",
        context: "MODELADO 3D",
        prompt: "¿Qué tipo de $ necesitas?",
        highlight: "objeto",
        answers: [
            {
                title: "Mueble",
                description:
                    "Modelamos muebles en 3D con detalles precisos, perfectos para catálogos, visualizaciones o diseño de interiores.",
            },
            {
                title: "Electrodoméstico",
                description:
                    "Creamos modelos 3D de electrodomésticos, optimizados para presentaciones de productos o campañas publicitarias.",
            },
            {
                title: "Pieza industrial",
                description:
                    "Diseñamos piezas industriales en 3D con alta precisión, ideales para prototipos o visualizaciones técnicas.",
            },
            {
                title: "Otro",
                description:
                    "¿Tienes un objeto único en mente? Creamos un modelo 3D personalizado según tus necesidades específicas.",
            },
        ]
    },

    {
        id: "D3.1.2",
        prompt: "¿Cuántos $ distintos?",
        highlight: "objetos",
        hint: "",
    },

    {
        id: "D3.1.3",
        prompt: "¿Deseas solo el $ base o incluir el render?",
        highlight: "modelo",
        answers: [
            {
                title: "Modelo base + Render",
                description:
                    "Producimos el modelo 3D y un render de alta calidad para visualizar tu objeto con detalles realistas.",
            },
            {
                title: "Modelo base",
                description:
                    "Creamos únicamente el modelo 3D, listo para que lo uses en otros procesos como animación o impresión.",
            },
        ]
    },

    {
        id: "D3.1.4",
        prompt: "¿Qué tipo de detalle quieres para el $?",
        highlight: "modelado",
        answers: [
            {
                title: "Texturizado",
                description:
                    "Añadimos texturas detalladas al modelo 3D para un acabado visualmente rico y adaptado a tu proyecto.",
            },
            {
                title: "Materiales realistas",
                description:
                    "Aplicamos materiales realistas al modelo 3D, ideales para renders que requieren un alto nivel de autenticidad.",
            },
        ]
    },

//STANDS Y ESPACIOS

    {
        id: "D3.2.1",
        context: "STANDS Y ESPACIOS",
        prompt: "¿Para qué tipo de $ lo buscas?",
        highlight: "espacio ",
        answers: [
            {
                title: "Feria",
                description:
                    "Diseñamos stands 3D impactantes para ferias, optimizados para atraer visitantes y destacar tu marca.",
            },
            {
                title: "Showroom",
                description:
                    "Creamos visualizaciones 3D de showrooms para mostrar productos o servicios en un entorno elegante y funcional.",
            },
            {
                title: "Instalación",
                description:
                    "Modelamos instalaciones artísticas o funcionales en 3D, perfectas para eventos o espacios personalizados.",
            },
            {
                title: "Otros",
                description:
                    "¿Tienes un espacio único en mente? Diseñamos una solución 3D personalizada para tus necesidades.",
            },
        ]
    },

    {
        id: "D3.2.2",
        prompt: "¿Cuántos $ distintos?",
        highlight: "objetos",
        hint: "",
    },

    {
        id: "D3.2.3",
        prompt: "¿Cómo necesitas la $?",
        highlight: "entrega",
        answers: [
            {
                title: "Para construcción real",
                description:
                    "Proporcionamos diseños 3D detallados con especificaciones técnicas para la construcción física de tu espacio.",
            },
            {
                title: "Para visualización",
                description:
                    "Creamos renders 3D de alta calidad para visualizar tu espacio, ideales para presentaciones o aprobaciones.",
            },
        ]
    },

//MODELO DE ESPACIOS

    {
        id: "D3.3.1",
        context: "MODELADO DE ESPACIOS",
        prompt: "¿Qué tipo de $ lo buscas?",
        highlight: "estilo",
        answers: [
            {
                title: "Realista",
                description:
                    "Diseñamos modelos 3D con un estilo realista, perfectos para visualizaciones arquitectónicas o presentaciones profesionales.",
            },
            {
                title: "Cartoon",
                description:
                    "Creamos modelos 3D con un estilo caricaturesco, ideales para proyectos lúdicos o educativos.",
            },
            {
                title: "Estilizado",
                description:
                    "Producimos modelos 3D con un estilo artístico único, combinando creatividad y detalle para un impacto visual distintivo.",
            },

        ]
    },

    {
        id: "D3.3.2",
        prompt: "¿Cuántos $ deseas?",
        highlight: "personajes",
        hint: "",
    },

    {
        id: "D3.3.3",
        prompt: "¿Cuál es la $ de estos?",
        highlight: "finalidad",
        answers: [
            {
                title: "Render",
                description:
                    "Creamos renders 3D de alta calidad para visualizar tus personajes o espacios con un acabado profesional.",
            },
            {
                title: "Impresión 3D",
                description:
                    "Diseñamos modelos 3D optimizados para impresión, asegurando precisión y compatibilidad con impresoras 3D.",
            },
            {
                title: "Animación",
                description:
                    "Producimos modelos 3D listos para animación, con detalles optimizados para movimientos y narrativas dinámicas.",
            },
        ]
    },

    {
        id: "D3.3.4",
        prompt: "¿Incluye $ o solo malla?",
        highlight: "rigging",
        answers: [
            {
                title: "Malla + Rigging",
                description:
                    "Creamos el modelo 3D con rigging completo, listo para animaciones fluidas y movimientos realistas.",
            },
            {
                title: "Solo malla",
                description:
                    "Producimos únicamente la malla 3D, ideal para renders estáticos o usos que no requieren animación.",
            },
        ]


    },

//FOTOGRÁFIA Y POSTPRODUCCION

    {
        id: "D4.1",
        context: "FOTOGRAFÍA Y POSTPRODUCCIÓN",
        prompt: "¿Cuántas $ necesitas?",
        highlight: "fotografías",
        hint: "",
    },
    {
        id: "D4.2",
        prompt: "¿Qué nivel de $ necesitas?",
        highlight: "edición",
        answers: [
            {
                title: "Corrección básica",
                description:
                    "Ajustamos color, brillo y contraste para mejorar tus fotos, manteniendo un look natural y profesional.",
            },
            {
                title: "Retoque",
                description:
                    "Realizamos retoques detallados, como eliminación de imperfecciones o ajustes avanzados, para un acabado impecable.",
            },
            {
                title: "Manipulación digital",
                description:
                    "Creamos efectos avanzados o modificaciones complejas, ideales para fotos creativas o campañas publicitarias.",
            },
        ]
    },
    {
        id: "D4.3",
        prompt: "¿Cual es la $ o medio que buscas?",
        highlight: "finalidad",
        answers: [
            {
                title: "Para web",
                description:
                    "Optimizamos tus fotos para sitios web, asegurando tiempos de carga rápidos y calidad visual en digital.",
            },
            {
                title: "Para impresión",
                description:
                    "Preparamos tus fotos con alta resolución para impresiones físicas, garantizando nitidez y detalle.",
            },
            {
                title: "Para redes sociales",
                description:
                    "Editamos tus fotos para destacar en redes sociales, adaptándolas a formatos y estilos que maximicen el engagement.",
            },
            {
                title: "Otros",
                description:
                    "¿Tienes un propósito específico en mente? Personalizamos la edición según tus necesidades únicas.",
            },
        ]
    },

// MODO SIMPLE

    {
        id: "DS2.2",
        prompt: "¿Tienes una $ definida para el video?",
        highlight: "idea",
        answers: [
            {
                title: "Si, tengo clara la idea.",
                description:
                    "Tienes guion/brief; producimos el diseño fiel a tu concepto.",
            },
            {
                title: "No, necesito ayuda creativa.",
                description:
                    "Desarrollamos idea, guion y propuesta visual para tu diseño.",
            }
        ]
    },

    {
        id: "DS2.3",
        prompt: "¿Cuál es el $ del video?",
        highlight: "objetivo",
        answers: [
            {
                title: "Explicar algo.",
                description:
                    "Presentar conceptos o procesos de forma clara y visualmente atractiva.",
            },
            {
                title: "Promocionar un producto.",
                description:
                    "Destacar beneficios y características para generar interés y ventas.",
            },
            {
                title: "Contar una historia.",
                description:
                    "Narrativa emocional que conecta con la audiencia y refuerza tu mensaje.",
            },
            {
                title: "No estoy seguro.",
                description:
                    "Te asesoramos para definir objetivo y orientar la propuesta creativa.",
            }
        ]
    },

    {
        id: "DS2.4",
        prompt: "¿Duración estimada de la $?",
        highlight: "animación",
        answers: [
            {
                title: "Menos de 1 minuto.",
                description:
                    "",
            },
            {
                title: "1 a 3 minutos.",
                description:
                    "",
            },
            {
                title: "Más de 3 minutos.",
                description:
                    "",
            }
        ]
    },

//COMUNICACIONES

    {
        id: "C0",
        context: "COMUNICACIONES",
        prompt: "¿Cómo te podemos $?",
        highlight: "ayudar",
        answers: [
            {
                title: "Estrategia y Conceptualización",
                description:
                    "Desarrollamos estrategias de comunicación creativas y efectivas, desde la idea hasta la ejecución, para conectar con tu audiencia.",
            },
            {
                title: "Redacción y Guionaje",
                description:
                    "Creamos textos y guiones claros y atractivos para campañas, videos o publicaciones que transmitan tu mensaje con impacto.",
            },
            {
                title: "Producción de Audio",
                description:
                    "Producimos contenido de audio profesional, como cuñas radiales o efectos sonoros, para potenciar tus proyectos.",
            },
            {
                title: "Producción Audiovisual",
                description:
                    "Realizamos videos y fotos de alta calidad, desde la grabación hasta la postproducción, para destacar tu marca.",
            },
        ]
    },

//ESTRATEGIA Y CONCEPTUALIZACIÓN

    {
        id: "C1.1",
        context: "ESTRATEGIA Y CONCEPTUALIZACIÓN",
        prompt: "¿En cuáles de estos $ te gustaría apoyarte?",
        highlight: "servicios",
        answers: [
            {
                title: "Conceptualización de campaña (idea y mensaje central)",
                description:
                    "Creamos el concepto y mensaje central de tu campaña, asegurando que sea memorable y conecte con tu público.",
            },
            {
                title: "Plan de Medios (elección de canales y presupuestos)",
                description:
                    "Diseñamos un plan de medios estratégico, seleccionando los canales y presupuestos ideales para maximizar tu alcance.",
            },
            {
                title: "Minuto a minuto (guía detallada de timing y contenidos)",
                description:
                    "Elaboramos una guía detallada con cronogramas y contenidos para asegurar una ejecución fluida de tu campaña.",
            },
        ]
    },

//REDACCION Y GUIONAJE

    {
        id: "C2.1",
        context: "REDACCIÓN Y GUIONAJE",
        prompt: "¿Necesitas que realicemos el $?",
        highlight: "guion",
        answers: [
            {
                title: "Sí.",
                description: "Redactamos y estructuramos el guion para garantizar claridad y coherencia."
            },
            {
                title: "No.",
                description: "No generamos guion; adaptamos o revisamos el tuyo según tus indicaciones."
            },
        ],
    },

    {
        id: "C2.2",
        prompt: "¿Requieres textos para piezas $ (banners, posts, flyers)?",
        highlight: "publicitarias",
        answers: [
            {
                title: "Sí.",
                description: "Creamos textos atractivos y persuasivos para tus banners, posts y flyers."
            },
            {
                title: "No.",
                description: "No generamos textos; puedes usar o adaptar los tuyos propios."
            },
        ],
    },

    {
        id: "C2.3",
        prompt: "¿Te gustaría incluir $ o captions?",
        highlight: "subtítulos",
        answers: [
            {
                title: "Sí, subtítulos completos.",
                description: "Añadimos subtítulos sincronizados para accesibilidad y claridad."
            },
            {
                title: "No, no los necesito.",
                description: "Omitimos subtítulos; mantenemos solo audio y visual."
            },
        ],
    },
    {
        id: "C2.4",
        prompt: "¿Deseas un $ informativo ?",
        highlight: "boletín",
        answers: [
            {
                title: "Sí, envíos regulares.",
                description: "Diseñamos y enviamos boletines con contenido relevante para tu audiencia."
            },
            {
                title: "No, no lo necesito.",
                description: "No generamos boletines; nos enfocamos en otros formatos de comunicación."
            },
        ],
    },
    {
        id: "C2.5",
        prompt: "¿Planeas un $ sencillo?",
        highlight: "mailing",
        answers: [
            {
                title: "Sí.",
                description: "Creamos y enviamos mailings simples con diseño limpio y mensaje conciso."
            },
            {
                title: "No.",
                description: "No diseñamos mailings; priorizamos otros canales de comunicación."
            },
        ],
    },
    {
        id: "C2.6",
        prompt: "¿Quieres $ para una revista?",
        highlight: "contenidos",
        answers: [
            {
                title: "Sí.",
                description: "Creamos artículos y diseños adaptados al estilo de tu revista."
            },
            {
                title: "No.",
                description: "No elaboramos contenidos; puedes usar los tuyos propios."
            },
        ],
    },


//PRODUCCION DE AUDIO

    {
        id: "C3.1",
        context: "PRODUCCIÓN DE AUDIO",
        prompt: "¿Qué $ necesitas??",
        highlight: "servicios",
        answers: [
            {
                title: "Cuña radial (spot para radio)",
                description:
                    "Producimos cuñas radiales impactantes que transmiten tu mensaje de forma clara y atractiva para la audiencia.",
            },
            {
                title: "Edición y montaje de pistas de audio",
                description:
                    "Editamos y mezclamos pistas de audio para crear contenido profesional, optimizado para tu proyecto o campaña.",
            },
            {
                title: "Diseño de efectos sonoros (SFX)",
                description:
                    "Creamos efectos sonoros personalizados para videos, animaciones o juegos, añadiendo impacto y realismo.",
            },
            {
                title: "Musicalización royalty-free",
                description:
                    "Seleccionamos o componemos música libre de derechos para complementar tus proyectos audiovisuales con el tono perfecto.",
            },
        ]
    },

//PRODUCCION AUDIOVISUAL

    {
        id: "C4.1",
        context: "PRODUCCIÓN AUDIOVISUAL",
        prompt: "¿Requieres $ fotográfica o videográfica?",
        highlight: "cobertura",
        answers: [
            {
                title: "Necesito cobertura fotográfica",
                description:
                    "Capturamos imágenes profesionales de eventos, productos o espacios para destacar tu marca con calidad visual.",
            },
            {
                title: "Necesito cobertura videográfica",
                description:
                    "Producimos videos de alta calidad para eventos o campañas, grabando momentos clave con un enfoque creativo.",
            },
            {
                title: "No necesito",
                description:
                    "Si no requieres cobertura, nos enfocamos en otros aspectos como edición o producción de contenido audiovisual.",
            },
        ]
    },
    {
        id: "C4.2",
        prompt: "¿Quieres $ un video (reel, spot, etc)?",
        highlight: "producir",
        answers: [
            {
                title: "Si.",
                description: "Creamos reels y spots con grabación, edición y producción profesional."
            },
            {
                title: "No necesito.",
                description: "No producimos videos; ofrecemos edición y consultoría audiovisual."
            },
        ]
    },

    {
        id: "C4.3",
        prompt: "¿Necesitas una $ fotográfica profesional?",
        highlight: "sesión",
        answers: [
            {
                title: "Si.",
                description: "Organizamos sesión fotográfica profesional con iluminación, dirección y retoque de alta calidad."
            },
            {
                title: "No necesito.",
                description: "Omitimos sesión; podemos usar o mejorar fotos existentes según tus necesidades."
            },
        ]
    },

    {
        id: "C4.4",
        prompt: "¿Deseas $ o editar un video ya existente?",
        highlight: "adaptar",
        answers: [
            {
                title: "Si.",
                description: "Adaptamos y editamos tu video existente para mejorar calidad y estilo."
            },
            {
                title: "No necesito.",
                description: "No editamos videos; nos enfocamos en nueva producción audiovisual."
            },
        ]
    },

    {
        id: "C4.5",
        prompt: "¿Necesitas un $ digital de imágenes o videos?",
        highlight: "retoque ",
        answers: [
            {
                title: "Si.",
                description: "Realizamos retoque digital profesional para mejorar color, iluminación y detalles."
            },
            {
                title: "No necesito.",
                description: "Omitimos retoque; mantenemos la calidad original de tus imágenes o videos."
            },
        ]
    },

    {
        id: "P0",
        prompt: "¿Cómo te podemos $?",
        highlight: "ayudar",
        answers: [
            {
                title: "Eventos",
                description:
                    "Planeación, transporte, montaje, apoyo logístico, y todo lo que tu idea pueda necesitar para ser un evento inolvidable.",
            },
            {
                title: "Mobiliario",
                description:
                    "Desde tarimas hasta vallas, desde cercas metálicas hasta asientos; lo tenemos todo para tu evento.",
            },
        ]
    },

    // EVENTOS
    {
        id: "P1.1",
        prompt: "¿Necesitas $ para tu evento?",
        highlight: "transporte",
        answers: [
            {
                title: "Sí, de elementos",
            },
            {
                title: "Sí, de personal",
            },
            {
                title: "Sí, de personal y elementos",
            },
            {
                title: "No requiero transporte",
            },
        ]
    },
    {
        id: "P1.2",
        prompt: "¿Cuál la proyección $ para tu evento?",
        highlight: "logística",
        answers: [
            {
                title: "De 5 a 10 logísticos de apoyo",
                description: "Un equipo logístico de apoyo pequeño, bien sea para un evento del mismo tamaño o para complementar grupos logísticos existentes.",
            },
            {
                title: "De 10 a 50 logísticos",
                description: "Un equipo logístico de apoyo pequeño, bien sea para un evento del mismo tamaño o para complementar grupos logísticos existentes.",
            },
            {
                title: "De 50 a 100 logísticos",
                description: "Un equipo logístico de apoyo pequeño, bien sea para un evento del mismo tamaño o para complementar grupos logísticos existentes.",
            },
            {
                title: "No lo tengo claro, o requiero más de 100 logísticos",
                description: "Un equipo logístico de apoyo pequeño, bien sea para un evento del mismo tamaño o para complementar grupos logísticos existentes.",
            },
        ]
    },
    {
        id: "P1.3",
        prompt: "¿Cuál es la $ de tu evento?",
        highlight: "ubicación",
        answers: [
            {
                title: "En la ciudad o el departamento",
                description: "Un equipo logístico de apoyo pequeño, bien sea para un evento del mismo tamaño o para complementar grupos logísticos existentes.",
            },
            {
                title: "Fuera del departamento, dentro del país",
                description: "Un equipo logístico de apoyo pequeño, bien sea para un evento del mismo tamaño o para complementar grupos logísticos existentes.",
            },
            {
                title: "Fuera del país",
                description: "Un equipo logístico de apoyo pequeño, bien sea para un evento del mismo tamaño o para complementar grupos logísticos existentes.",
            },
        ]
    },

];
