import { Choice } from "@/types/quote";

export const es: {
  id: number;
  prompt: string;
  highlight?: string;
  answers?: Choice[];
  options?: string[][];
  hint? : string,
}[] = [
  {
    id: 0x0001,
    prompt: "¿Qué vamos a $ juntos?",
    highlight: "crear",
    answers: [
      {
        title: "Un proyecto digital",
        description:
          "Estrategias y contenidos que conectan, impulsan tu marca y generan interacción auténtica en redes sociales.",
      },
      {
        title: "Un proyecto de producción",
        description:
          "Gestión creativa y técnica para dar vida a tus ideas, desde la planificación hasta la ejecución logística.",
      },
      {
        title: "Un proyecto de comunicaciones",
        description:
          "Planes integrales que fortalecen la conexión de tu marca con su audiencia, transmitiendo mensajes claros y efectivos.",
      },
      {
        title: "Un proyecto de diseño",
        description:
          "Creaciones visuales impactantes que representan la esencia de tu marca y capturan la atención de tu público objetivo.",
      },
    ],
  },
  {
    id: 0x1000,
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
        title: "Quiero establecer mi marca",
        description:
          "Estrategias creativas para potenciar la identidad de tu marca y conectar emocionalmente con tu audiencia.",
      },
    ],
  },
  {
    id: 0x1100,
    prompt: "¿Qué $ de software?",
    highlight: "tipo",
    answers: [
      {
        title: "Un producto web",
        description:
          "Desarrollos innovadores que aprovechan la web para ofrecer soluciones escalables, accesibles y adaptadas a tus necesidades empresariales.",
      },
      {
        title: "Un producto para computador",
        description:
          "Aplicaciones robustas y eficientes diseñadas para entornos de escritorio, optimizando el rendimiento y la productividad.",
      },
      {
        title: "Un producto móvil",
        description:
          "Apps intuitivas y dinámicas que ofrecen experiencias optimizadas para usuarios en dispositivos móviles.",
      },
    ],
  },
  {
    id: 0x1101,
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
    id: 0x1102,
    prompt: "¿Cuántas $ tiene tu sitio?",
    highlight: "páginas",
    hint: "",
  },
  {
    id: 0x1103,
    prompt: "¿Cuántos $ tiene tu sitio?",
    highlight: "productos",
    hint: "",
  },
  {
    id: 0x1104,
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
        "PayU Latam" + "MercadoPago",
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
    id: 0x1105,
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
    id: 0x1106,
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
    id: 0x1107,
    prompt: "¿Necesitas servicios de $ interna?",
    highlight: "búsqueda",
    answers: [
      {
        title: "Sí, dentro de una página específica del sitio",
      },
      {
        title: "Sí, a nivel global en el sitio",
      },
      {
        title: "No",
      },
      {
        title: "Necesito asesoría decidiendo",
      },
    ],
  },
  {
    id: 0x1108,
    prompt: "¿Ya tienes $?",
    highlight: "Hosting o Dominio",
    answers: [
      {
        title: "Sí, tengo ambos",
      },
      {
        title: "Sólo tengo el hosting",
      },
      {
        title: "Sólo tengo el dominio",
      },
      {
        title: "No tengo ninguno",
      },
    ],
  },
  {
    id: 0x1109,
    prompt: "¿Necesitas servicios de $?",
    highlight: "SEO",
    answers: [
      {
        title: "Sí",
      },
      {
        title: "No los necesito",
      },
      {
        title: "Necesito asesoría decidiendo",
      },
    ],
  },

  {
    id: 0x1201,
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
    id: 0x1202,
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
  {
    id: 0x1203,
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

  {
    id: 0x1401,
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
    id: 0x1402,
    prompt: "¿Cómo quieres el $?",
    highlight: "diseño",
    answers: [
      {
        title: "No requiero diseño.",
        description:
          "Ya cuentas con el diseño o prefieres enfocarte solo en la funcionalidad.",
      },
      {
        title: "Quiero un diseño personalizado.",
        description:
          "Creamos una interfaz única que refleje la identidad de tu marca.",
      },
      {
        title: "Quiero usar una plantilla.",
        description:
          "Ahorra tiempo y costos usando un diseño prediseñado y adaptable.",
      },
      {
        title: "Necesito asesoría decidiendo.",
        description:
          "Te orientamos para elegir la mejor opción según tus objetivos y presupuesto.",
      },
    ],
  },
  {
    id: 0x1403,
    prompt: "¿Datos $?",
    highlight: "sensibles",
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
    id: 0x1404,
    prompt: "¿Cuántas $?",
    highlight: "vistas/pantallas",
    hint: "",
  },
  {
    id: 0x1405,
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
    id: 0x1301,
    prompt: "¿Qué clase de $?",
    highlight: "app",
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
    id: 0x1302,
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
  {
    id: 0x1302,
    prompt: "¿Qué clase de $?",
    highlight: "app",
    answers: [
      {
        title: "App de contenido.",
        description:
          "",
      },
      {
        title: "ECommerce.",
        description:
          "",
      },
      {
        title: "Utilidad / Herramienta.",
        description:
          "",
      },
      {
        title: "A medida.",
        description:
          "",
      },
    ],
  },

  {
    id: 0x1001,
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
    id: 0x1002,
    prompt: "¿Qué nivel de $ necesitas para tu producto?",
    highlight: "interacciones y animaciones",
    answers: [
      {
        title: "No necesito animaciones o interacciones puntuales.",
      },
      {
        title: "Menos de 3 animaciones, o con interacciones estándares.",
      },
      {
        title: "Más de 3 animaciones, o con interacciones complejas.",
      },
      {
        title: "Necesito ayuda decidiendo.",
      },
    ],
  },
  {
    id: 0x1003,
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
];
