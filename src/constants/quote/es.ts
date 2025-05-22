import {Choice} from "@/types/quote";

export const es: {id: number, prompt : string, highlight? : string, answers?: Choice[], options?: string[][]}[] = [
    {
        id: 0x0001,
        "prompt": "¿Qué vamos a $ juntos?",
        "highlight": "crear",
        "answers": [
            {
                "title": "Un proyecto digital",
                "description": "Estrategias y contenidos que conectan, impulsan tu marca y generan interacción auténtica en redes sociales."
            },
            {
                "title": "Un proyecto de producción",
                "description": "Gestión creativa y técnica para dar vida a tus ideas, desde la planificación hasta la ejecución logística."
            },
            {
                "title": "Un proyecto de comunicaciones",
                "description": "Planes integrales que fortalecen la conexión de tu marca con su audiencia, transmitiendo mensajes claros y efectivos."
            },
            {
                "title": "Un proyecto de diseño",
                "description": "Creaciones visuales impactantes que representan la esencia de tu marca y capturan la atención de tu público objetivo."
            }
        ],
    },
    {
        id: 0x1000,
        "prompt": "¿Cómo te podemos $?",
        "highlight": "ayudar",
        "answers": [
            {
                "title": "Quiero un producto de software",
                "description": "Soluciones personalizadas que resuelven tus necesidades tecnológicas, optimizando procesos y brindando experiencias digitales de calidad."
            },
            {
                "title": "Quiero desarrollar mi marca",
                "description": "Planes integrales para construir desde cero una marca sólida, reconocible y alineada con tus valores."
            },
            {
                "title": "Quiero establecer mi marca",
                "description": "Estrategias creativas para potenciar la identidad de tu marca y conectar emocionalmente con tu audiencia."
            },
        ]
    },
    {
        id: 0x1100,
        "prompt": "¿Qué $ de software?",
        "highlight": "tipo",
        "answers": [
            {
                "title": "Un producto web",
                "description": "Desarrollos innovadores que aprovechan la web para ofrecer soluciones escalables, accesibles y adaptadas a tus necesidades empresariales."
            },
            {
                "title": "Un producto para computador",
                "description": "Aplicaciones robustas y eficientes diseñadas para entornos de escritorio, optimizando el rendimiento y la productividad."
            },
            {
                "title": "Un producto móvil",
                "description": "Apps intuitivas y dinámicas que ofrecen experiencias optimizadas para usuarios en dispositivos móviles."
            }
        ]
    },
    {
        id: 0x1101,
        "prompt": "¿Qué $ de página?",
        "highlight": "clase",
        "answers": [
            {
                "title": "Una landing page",
                "description": "Captura leads y aumenta conversiones con una página de destino."
            },
            {
                "title": "Un Ecommerce",
                "description": "Vende tus productos y servicios en línea con una tienda virtual."
            },
            {
                "title": "Un blog",
                "description": "Atrae tráfico y posiciona tu marca con un blog informativo."
            },
            {
                "title": "Una página web a medida",
                "description": "¿Algo más en mente? Creamos tu sitio web a la medida de tus necesidades."
            },
        ]
    },
    {
        id: 0x1102,
        "prompt": "¿Cómo quieres el $?",
        "highlight": "diseño",
        "answers": [
            {
                "title": "Ya tengo uno",
                "description": "¡Perfecto! Proporciónanos tu diseño y lo integraremos a una plataforma funcional y optimizada."
            },
            {
                "title": "Quiero un diseño personalizado",
                "description": "Creamos un diseño único y a medida que refleje la identidad de tu marca y cautive a tu audiencia."
            },
            {
                "title": "Quiero usar una plantilla",
                "description": "Te ayudamos a encontrar y personalizar una plantilla profesional que se adapte a tus necesidades."
            },
            {
                "title": "Necesito asesoría decidiendo",
                "description": "¡Con gusto te ayudamos! Te asesoramos para encontrar el diseño que mejor se adapte a tus objetivos y presupuesto."
            },
        ]
    },
    {
        id: 0x1103,
        "prompt": "¿Qué tan $ es tu sitio?",
        "highlight": "grande",
    },
    {
        id: 0x1105,
        "prompt": "¿Necesitas una $ de pagos?",
        "highlight": "pasarela",
        "answers": [
            {
                "title": "Sí, necesito crearla",
                "description": "Te ayudamos a configurar tu pasarela de pagos para que puedas empezar a recibir pagos."
            },
            {
                "title": "Tengo una, necesito integrarla",
                "description": "Cuéntanos cuál es y nos encargamos de integrarla a tu sitio web."
            },
            {
                "title": "No",
            },
        ],
        options: [
            [
                "PayU Latam" +
                "MercadoPago",
                "Place to Pay",
                "ePayco",
                "PSE (Pagos Seguros en Línea)",
                "Stripe",
                "Square",
                "Provista por un banco (nacional o internacional)",
                "Banco en Linea (como Nequi o Daviplata)",
                "Otra"
            ]
        ]
    },
    {
        id: 0x1106,
        "prompt": "¿Necesitas usuarios e $?",
        "highlight": "inicio de sesión",
        "answers": [
            {
                "title": "Sí, para fines administrativos",
                "description": "Implementamos sistemas seguros y eficientes para gestionar tu plataforma."
            },
            {
                "title": "Sí, para los usuarios de mi sitio",
                "description": "Creamos experiencias de inicio de sesión fáciles de usar, asegurando la protección de datos y la accesibilidad para tus usuarios."
            },
            {
                "title": "Sí, múltiples inicios de sesión",
                "description": "Desarrollamos sistemas complejos que gestionan diferentes roles de usuario, priorizando la seguridad y la funcionalidad."
            },
            {
                "title": "No",
            },
        ]
    },
    {
        id: 0x1107,
        "prompt": "¿Necesitas servicios de $ interna?",
        "highlight": "búsqueda",
        "answers": [
            {
                "title": "Sí, dentro de una página específica del sitio",
            },
            {
                "title": "Sí, a nivel global en el sitio",
            },
            {
                "title": "No",
            },
            {
                "title": "Necesito asesoría decidiendo",
            },
        ]
    },
    {
        id: 0x1108,
        "prompt": "¿Ya tienes $?",
        "highlight": "Hosting o Dominio",
        "answers": [
            {
                "title": "Sí, tengo ambos",
            },
            {
                "title": "Sólo tengo el hosting",
            },
            {
                "title": "Sólo tengo el dominio",
            },
            {
                "title": "No tengo ninguno",
            },
        ]
    },
    {
        id: 0x1109,
        "prompt": "¿Necesitas servicios de $?",
        "highlight": "SEO",
        "answers": [
            {
                "title": "Sí",
            },
            {
                "title": "No los necesito",
            },
            {
                "title": "Necesito asesoría decidiendo",
            },
        ]
    },
    {
        id: 0x1001,
        "prompt": "¿Necesitas varios $ para tu desarrollo?",
        "highlight": "idiomas",
        "answers": [
            {
                "title": "Sí",
            },
            {
                "title": "No ",
            },
        ],
        options: [
            [
                "Español" +
                "Inglés",
                "Alemán",
                "Francés",
                "Italiano",
                "Otro",
            ]
        ]
    },
    {
        id: 0x1002,
        "prompt": "¿Qué nivel de $ necesitas para tu producto?",
        "highlight": "interacciones y animaciones",
        "answers": [
            {
                "title": "No necesito animaciones o interacciones puntuales.",
                "description": "El producto será estático, sin animaciones o interacciones adicionales. Esto es ideal para proyectos simples y funcionales."
            },
            {
                "title": "Menos de 3 animaciones, o con interacciones estándares.",
                "description": "Con animaciones básicas, para mejorar la experiencia del usuario de forma discreta."
            },
            {
                "title": "Más de 3 animaciones, o con interacciones complejas.",
                "description": "Con animaciones avanzadas o interacciones dinámicas, como movimientos personalizados, efectos complejos y elementos interactivos diseñados a medida."
            },
            {
                "title": "Necesito ayuda decidiendo.",
            },
        ]
    },
    {
        id: 0x1003,
        "prompt": "¿Qué tipo de $ necesitas después de la entrega?",
        "highlight": "apoyo técnico",
        "answers": [
            {
                "title": "No quiero mantenimiento o soporte.",
                "description": "El producto se entregará completamente terminado y no incluirá actualizaciones, soporte o mantenimiento después de la entrega."
            },
            {
                "title": "Sí, quiero mantenimiento periódico por un periodo de tiempo definido.",
                "description": "Se ofrecerá mantenimiento regular, como actualizaciones y corrección de errores durante el tiempo acordado."
            },
            {
                "title": "Sí, quiero mantenimiento periódico por un periodo de tiempo indefinido.",
                "description": "El soporte técnico incluirá mantenimiento continuo a largo plazo, con actualizaciones regulares y resolución de problemas cuando sea necesario."
            },
            {
                "title": "Sí, necesito mantenimiento concreto en tiempos preestablecidos.",
                "description": "¡Lo hablamos! Te programamos soporte técnico únicamente en fechas específicas para cubrir necesidades puntuales como actualizaciones o ajustes."
            }
        ],
        options: [
            [
                "6 meses/2 fechas",
                "12 meses/4 fechas",
                "18 meses/6 fechas",
                "2 años/10 fechas",
                "3 años/15 fechas",
            ],
            [
                "Cada 6 meses/2 veces al año",
                "Cada 3 meses/8 veces al año",
                "Cada 2 meses/10 veces al año",
                "Mensualmente/12 veces al año",
                "A necesidad"
            ]
        ]
    },
    {
        "id": 0x1004,
        "prompt": "¿En qué $ se encuentra tu producto?",
        "highlight": "etapa",
        "answers": [
            {
                "title": "En ceros, sólo está la idea.",
                "description": "No hay avances previos; partiremos desde cero para conceptualizar, diseñar y desarrollar tu producto completamente."
            },
            {
                "title": "Tengo algunas referencias, pero no hay nada hecho.",
                "description": "Tienes una idea general y algunas inspiraciones; trabajaremos para convertir esas referencias en un producto claro y funcional."
            },
            {
                "title": "Ya está en desarrollo.",
                "description": "Tu proyecto tiene progreso inicial o intermedio; podemos integrarnos para completar el desarrollo según tus objetivos."
            },
            {
                "title": "Está desarrollada. Quiero actualizarla o migrarla.",
                "description": "Tu producto ya existe, y necesitas ayuda para actualizarlo con nuevas características o adaptarlo a otra plataforma o tecnología."
            }
        ]
    }
];
