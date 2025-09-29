export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ol'; items: string[] }
  | { type: 'ul'; items: string[] }
  | { type: 'dl'; items: { term: string; def: string }[] }
  | { type: 'subsections'; items: { marker?: string; text: string }[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalES = {
  title: string;
  update: string;
  navigation: { items: { id: string; title: string }[] };
  sections: LegalSection[];
};

export const LEGAL_ES: LegalES = {
  title: "POLÍTICA DE TRATAMIENTOS DE DATOS",
  update: "Actualizado por última vez el 23/09/2025",
  navigation: {
    items: [
      { id: "marco-legal", title: "1. MARCO LEGAL" },
      { id: "objetivo", title: "2. OBJETIVO" },
      { id: "alcance", title: "3. ALCANCE" },
      { id: "obligatoriedad", title: "4. OBLIGATORIEDAD" },
      { id: "definiciones", title: "5. DEFINICIONES" },
      { id: "principios", title: "6. PRINCIPIOS" },
      { id: "finalidades", title: "7. FINALIDADES DEL TRATAMIENTO" },
      { id: "derechos", title: "8. DERECHOS DE LOS TITULARES" },
      { id: "legitimacion", title: "9. LEGITIMACIÓN" },
      { id: "deberes", title: "10. DEBERES" },
      { id: "datos-sensibles", title: "11. TRATAMIENTO DE DATOS SENSIBLES" },
      { id: "acceso-consulta", title: "12. GARANTÍAS: ACCESO Y CONSULTA" },
      { id: "reclamos", title: "13. RECLAMOS" },
      { id: "requisitos-reclamos", title: "14. REQUISITOS PARA RECLAMOS" },
      { id: "rnbd", title: "15. REGISTRO NACIONAL DE BASES DE DATOS" },
      { id: "autorizacion", title: "16. AUTORIZACIÓN DEL TITULAR" },
      { id: "revocatoria", title: "17. REVOCATORIA DE LA AUTORIZACIÓN" },
      { id: "aviso-privacidad", title: "18. AVISO DE PRIVACIDAD" },
      { id: "supresion-datos", title: "19. SUPRESIÓN DE DATOS" },
      { id: "transferencia", title: "20. TRANSFERENCIA DE BASES DE DATOS" },
      { id: "confidencialidad", title: "21. CONFIDENCIALIDAD" },
      { id: "intercambio-info", title: "22. INTERCAMBIO DE INFORMACIÓN" },
      { id: "procedimientos", title: "23. PROCEDIMIENTOS" },
      { id: "responsable", title: "24. RESPONSABLE DEL TRATAMIENTO" },
      { id: "pre-1377", title: "25. DATOS ANTES DEL DECRETO 1377/2013" },
      { id: "medidas-seguridad", title: "26. MEDIDAS DE SEGURIDAD" },
      { id: "vigencia-bd", title: "27. VIGENCIA BASES DE DATOS" }
    ]
  },
  sections: [
    {
      id: "marco-legal",
      title: "1. MARCO LEGAL",
      blocks: [
        { type: "p", text: "La sociedad PRENSA & ENTRETENIMIENTO AGENCIA DE COMUNICACIONES S.A.S., identificada con NIT No. 900.423.752-0, con domicilio principal en Cali (calle 8 Oeste # 28-45) y correo electrónico comercial@marabunta.co, en cumplimiento de la normatividad vigente, presenta su política de tratamiento de la información." },
        { type: "p", text: "La protección de datos personales es la facultad de conocer, actualizar y rectificar informaciones recogidas en bancos de datos y archivos de entidades públicas y privadas." },
        { type: "p", text: "Serán objeto de protección los datos de personas que, en ejercicio de actividades directas o indirectas (académicas, laborales, comerciales, administrativas, permanentes u ocasionales), suministren información personal a PRENSA & ENTRETENIMIENTO AGENCIA DE COMUNICACIONES S.A.S., quien actuará como responsable del tratamiento." },
        { type: "p", text: "El tratamiento comprende conocer, recolectar, almacenar, usar, circular y suprimir datos personales, para garantizar los derechos de consumidores y beneficiarios, conforme al marco legal." },
        {
          type: "ul",
          items: [
            "Constitución Política de Colombia: arts. 15 y 20.",
            "Ley 1581 de 2012.",
            "Decreto 1377 de 2013.",
            "Decreto 886 de 2014.",
            "Decreto 1081 de 2015 y demás normas complementarias."
          ]
        },
        { type: "p", text: "PRENSA & ENTRETENIMIENTO AGENCIA DE COMUNICACIONES S.A.S. podrá modificar este documento; las actualizaciones serán incluidas oportunamente en el RNBD, dentro del marco de la ley." }
      ]
    },
    {
      id: "objetivo",
      title: "2. OBJETIVO",
      blocks: [
        {
          type: "subsections",
          items: [
            { marker: "a)", text: "Definir lineamientos para garantizar protección y reserva de datos personales o cualquier información en bases de datos y archivos de la Compañía." },
            { marker: "b)", text: "Dar seguridad sobre el tratamiento de datos personales de clientes, proveedores, empleados y terceros conforme a la ley de hábeas data." },
            { marker: "c)", text: "Garantizar el derecho constitucional a conocer, actualizar y rectificar la información recolectada en bases de datos o archivos." }
          ]
        }
      ]
    },
    {
      id: "alcance",
      title: "3. ALCANCE",
      blocks: [
        { type: "p", text: "La presente política aplica a todos los datos personales o información que se utilice o repose en bases de datos y archivos de la Compañía, y fija criterios para obtención, recolección, uso, tratamiento, procesamiento, intercambio, transferencia y transmisión, así como responsabilidades internas." }
      ]
    },
    {
      id: "obligatoriedad",
      title: "4. OBLIGATORIEDAD",
      blocks: [
        { type: "p", text: "De obligatorio y estricto cumplimiento por empleados, contratistas y terceros relacionados con la Compañía." },
        { type: "p", text: "Los empleados deben observar estas políticas según el artículo 58 del Código Sustantivo del Trabajo." },
        { type: "p", text: "En relaciones no laborales, los contratos incluirán cláusulas de cumplimiento de estas políticas." }
      ]
    },
    {
      id: "definiciones",
      title: "5. DEFINICIONES",
      blocks: [
        {
          type: "dl",
          items: [
            { term: "Autorización", def: "Consentimiento previo, expreso e informado del Titular para el tratamiento de datos personales, obtenido por cualquier medio que permita consulta posterior." },
            { term: "Aviso de privacidad", def: "Comunicación al Titular sobre políticas de tratamiento aplicables, forma de acceso y finalidades del tratamiento." },
            { term: "Base de datos", def: "Conjunto organizado de datos personales objeto de tratamiento." },
            { term: "RNBD", def: "Directorio público de bases de datos sujetas a tratamiento en el país." },
            { term: "Datos personales", def: "Información vinculada o asociable a personas naturales o jurídicas determinadas o determinables. Pueden ser públicos, semiprivados o privados." },
            { term: "Dato privado", def: "Dato de naturaleza íntima o reservada, relevante solo para el titular." },
            { term: "Dato público", def: "Dato calificado por la ley o la Constitución como público (p. ej., estado civil, profesión, calidad de comerciante o servidor público)." },
            { term: "Dato semiprivado", def: "Dato sin naturaleza íntima ni pública cuya divulgación puede interesar a un sector o a la sociedad (p. ej., financiero y crediticio)." },
            { term: "Datos sensibles", def: "Datos que afectan la intimidad o cuya divulgación puede generar discriminación (origen racial, político, convicciones, salud, vida sexual, biométricos, etc.)." },
            { term: "Encargado del tratamiento", def: "Persona que realiza el tratamiento por cuenta del responsable." },
            { term: "Responsable del tratamiento", def: "Persona que decide sobre la base de datos y/o el tratamiento." },
            { term: "Titular", def: "Persona natural cuyos datos personales son objeto de tratamiento." },
            { term: "Transferencia", def: "Envío de datos personales a un receptor responsable del tratamiento, dentro o fuera del país (países adecuados en protección de datos)." },
            { term: "Transmisión", def: "Comunicación de datos para tratamiento por el Encargado por cuenta del Responsable, dentro o fuera de Colombia." },
            { term: "Tratamiento", def: "Cualquier operación sobre datos personales (recolección, almacenamiento, uso, circulación, supresión)." },
            { term: "Fuente de información", def: "Quien recibe o conoce datos de los titulares y los suministra a un operador o usuario final; responde por la calidad de los datos." }
          ]
        }
      ]
    },
    {
      id: "principios",
      title: "6. PRINCIPIOS",
      blocks: [
        {
          type: "ul",
          items: [
            "Confidencialidad: Toda información no pública debe tratarse como confidencial, incluso después de terminado el vínculo con la Compañía.",
            "Tratamiento posterior: Aun con la terminación del vínculo, los datos se tratarán conforme a la Política y la Ley.",
            "Temporalidad: No se usarán los datos más allá del plazo razonable necesario para la finalidad informada.",
            "Necesidad: Los datos se tratarán solo durante el tiempo y en la medida en que el propósito lo justifique."
          ]
        }
      ]
    },
    {
      id: "finalidades",
      title: "7. FINALIDADES DEL TRATAMIENTO",
      blocks: [
        { type: "p", text: "En desarrollo del objeto social y relaciones con terceros, la Compañía realiza tratamiento de datos para las siguientes finalidades:" },
        { type: "p", text: "a) Fines administrativos:" },
        {
          type: "ul",
          items: [
            "Ejecutar relaciones contractuales con usuarios, clientes, proveedores y trabajadores, incluyendo pagos.",
            "Realizar estudios internos sobre hábitos de consumo.",
            "Seleccionar, evaluar y vincular talento humano.",
            "Soportar auditorías internas o externas.",
            "Gestionar evaluaciones de desempeño, bienestar, seguridad y salud en el trabajo.",
            "Afiliación al Sistema General de Seguridad Social Integral.",
            "Registrar información de empleados y/o pensionados (activos e inactivos)."
          ]
        },
        { type: "p", text: "b) Fines asistenciales, comerciales, informativos, de mercadeo y ventas:" },
        {
          type: "ul",
          items: [
            "Prestar servicios asistenciales a usuarios y familias.",
            "Ofrecer y proveer productos y/o servicios requeridos.",
            "Informar sobre nuevos productos/servicios o cambios.",
            "Evaluar indicadores de oportunidad y calidad del servicio.",
            "Realizar campañas de promoción, marketing y publicidad.",
            "Entregar reportes de obligatorio cumplimiento.",
            "Responder a requerimientos de entidades de control."
          ]
        },
        { type: "p", text: "c) Conocimiento cercano de usuarios, clientes, proveedores, empleados y terceros:" },
        {
          type: "ul",
          items: [
            "Caracterización y seguimiento poblacional para gestión del riesgo.",
            "Envío de información comercial/publicitaria por medios físicos o digitales (SMS/MMS, email, etc.).",
            "Suministro/compartición de datos a filiales o vinculadas en Colombia o países con adecuada protección de datos, para los fines aquí indicados."
          ]
        },
        { type: "p", text: "d) Otros fines:" },
        {
          type: "ul",
          items: [
            "Suministrar información a autoridades competentes cuando sea requerido.",
            "Videovigilancia para seguridad de bienes y personas; captación, conservación y uso conforme al aviso de privacidad.",
            "Pertinencia y custodia: el tratamiento se efectuará por el tiempo pertinente, necesario y razonable; luego se procederá a la supresión salvo obligación legal o contractual."
          ]
        },
        { type: "p", text: "Acciones que podrá ejecutar la Compañía:" },
        {
          type: "ol",
          items: [
            "Obtener, almacenar, compilar, actualizar, recolectar, procesar, reproducir y disponer de datos con debida autorización.",
            "Clasificar, ordenar y separar información suministrada por el titular.",
            "Investigar, comparar, verificar y validar datos con centrales de riesgo crediticio, según relaciones comerciales.",
            "Extender información a empresas contratistas de captura/almacenamiento/manejo de bases de datos previa autorización.",
            "Transferir datos a filiales, comercios, entidades afiliadas y aliados estratégicos."
          ]
        },
        { type: "p", text: "Respecto a datos recolectados en puntos de seguridad, documentos suministrados y videograbaciones dentro o fuera de las instalaciones, éstos se usarán para fines de seguridad y podrán servir como prueba en procesos." },
        { type: "p", text: "La Compañía no venderá, licenciará, transmitirá ni divulgará datos personales salvo que:" },
        {
          type: "ul",
          items: [
            "Exista autorización expresa.",
            "Sea necesario para que contratistas o agentes presten servicios encomendados.",
            "Sea necesario para proveer servicios y/o productos.",
            "Sea necesario divulgar a entidades de mercadeo en nombre de la Compañía o acuerdos de mercado conjunto.",
            "La información se relacione con procesos de reestructuración societaria permitidos por la ley."
          ]
        }
      ]
    },
    {
      id: "derechos",
      title: "8. DERECHOS DE LOS TITULARES",
      blocks: [
        {
          type: "ol",
          items: [
            "Conocer, actualizar y rectificar datos frente a responsables o encargados.",
            "Solicitar prueba de la autorización otorgada (salvo excepciones legales).",
            "Ser informado sobre el uso dado a sus datos.",
            "Presentar quejas ante la SIC por infracciones a la Ley 1581 de 2012.",
            "Revocar autorización y/o solicitar supresión del dato cuando no se respeten principios, derechos y garantías.",
            "Acceder gratuitamente a sus datos objeto de tratamiento.",
            "Conocer modificaciones a esta Política antes de su implementación.",
            "Tener fácil acceso al texto de esta Política y sus modificaciones.",
            "Acceder de manera fácil a sus datos personales bajo control de la Compañía.",
            "Conocer el encargado dentro de la empresa para presentar solicitudes."
          ]
        }
      ]
    },
    {
      id: "legitimacion",
      title: "9. LEGITIMACIÓN PARA EL EJERCICIO DEL DERECHO",
      blocks: [
        {
          type: "ol",
          items: [
            "El titular, acreditando su identidad.",
            "Causahabientes del titular (muerte o incapacidad), acreditando tal calidad.",
            "Representante y/o apoderado del titular, con poder o representación válida."
          ]
        }
      ]
    },
    {
      id: "deberes",
      title: "10. DEBERES DE LA COMPAÑÍA",
      blocks: [
        {
          type: "ol",
          items: [
            "Garantizar el ejercicio del hábeas data.",
            "Solicitar y conservar copia de la autorización del titular.",
            "Conservar información documental en medios físicos o electrónicos por el término normativo.",
            "Informar al titular la finalidad de la recolección y sus derechos.",
            "Conservar la información con condiciones de seguridad.",
            "Garantizar veracidad, integridad, actualidad y comprensibilidad de la información suministrada al encargado.",
            "Actualizar la información y comunicar novedades al encargado.",
            "Rectificar la información cuando sea incorrecta y comunicarlo.",
            "Tramitar consultas y reclamos.",
            "Informar al titular sobre el uso de sus datos.",
            "Informar a la autoridad sobre violaciones de seguridad y riesgos.",
            "No brindar datos personales a terceros sin autorización previa del titular.",
            "Cumplir las demás obligaciones legales aplicables."
          ]
        }
      ]
    },
    {
      id: "datos-sensibles",
      title: "11. TRATAMIENTO DE DATOS SENSIBLES",
      blocks: [
        { type: "p", text: "Datos sensibles son aquellos que afectan la intimidad o cuya divulgación puede generar discriminación (salud, vida sexual, biométricos, creencias, orientación política, etc.)." },
        { type: "p", text: "El tratamiento de datos sensibles solo procederá cuando:" },
        {
          type: "ul",
          items: [
            "Exista autorización informada, explícita y previa del titular (salvo excepciones).",
            "Se trate de antecedentes o condiciones médicas necesarias para la actividad; el titular debe suministrar datos requeridos por el profesional tratante.",
            "Sea necesario para el reconocimiento, ejercicio o defensa de un derecho en proceso judicial.",
            "Tenga finalidad histórica, estadística o científica (adopción de medidas de disociación).",
            "Sea necesario para formularios de afiliación o servicios/subsidios.",
            "Sea necesario para salvaguardar el interés vital del titular incapacitado (autorización de representantes legales)."
          ]
        }
      ]
    },
    {
      id: "acceso-consulta",
      title: "12. GARANTÍAS DEL DERECHO DE ACCESO Y CONSULTA",
      blocks: [
        { type: "p", text: "Se garantizará el acceso del titular a sus datos, previa acreditación de identidad o representación, sin costo, de forma pormenorizada y por medios que permitan acceso directo." },
        { type: "p", text: "El acceso permitirá conocer y actualizar los datos en línea. Los titulares o causahabientes podrán consultar la información que repose en las bases de datos de la Compañía." }
      ]
    },
    {
      id: "reclamos",
      title: "13. RECLAMOS",
      blocks: [
        { type: "p", text: "El titular o causahabientes podrán presentar reclamos para corrección, actualización o supresión, o por presunto incumplimiento legal, ante el responsable del tratamiento a través de la dependencia designada." },
        { type: "p", text: "El reclamo seguirá lo previsto en el artículo 15 de la Ley 1581 de 2012 y normas complementarias." }
      ]
    },
    {
      id: "requisitos-reclamos",
      title: "14. REQUISITOS PARA GARANTIZAR EL DERECHO A EJERCER RECLAMOS",
      blocks: [
        { type: "p", text: "En cualquier momento y de manera gratuita, el titular o su representante podrán solicitar rectificación, actualización o supresión de datos, previa acreditación de identidad." },
        {
          type: "ul",
          items: [
            "El titular o causahabientes, acreditando identidad (también por instrumentos electrónicos).",
            "Su representante, acreditando representación.",
            "Si actúa un tercero distinto del titular, deberá acreditar personería o mandato notariado; de lo contrario, no se dará trámite."
          ]
        }
      ]
    },
    {
      id: "rnbd",
      title: "15. REGISTRO NACIONAL DE BASES DE DATOS (RNBD)",
      blocks: [
        { type: "p", text: "La Compañía mantendrá y catalogará determinada información como confidencial al registrar sus bases de datos ante el RNBD administrado por la Superintendencia de Industria y Comercio." }
      ]
    },
    {
      id: "autorizacion",
      title: "16. AUTORIZACIÓN DEL TITULAR",
      blocks: [
        { type: "p", text: "Los datos personales son propiedad de sus titulares; la Compañía los usará solo para finalidades autorizadas, respetando la normatividad vigente." },
        { type: "p", text: "Salvo excepciones legales, el tratamiento requiere autorización previa, expresa e informada del titular, obtenida por medios verificables." },
        { type: "p", text: "No se requiere autorización cuando:" },
        {
          type: "ul",
          items: [
            "Sea información requerida por autoridad pública o por orden judicial.",
            "Se trate de datos de naturaleza pública.",
            "Haya urgencia médica o sanitaria.",
            "El tratamiento esté autorizado por ley para fines históricos, estadísticos o científicos.",
            "Se trate de datos del Registro Civil.",
            "Otros supuestos previstos por la normativa o esta Política."
          ]
        }
      ]
    },
    {
      id: "revocatoria",
      title: "17. REVOCATORIA DE LA AUTORIZACIÓN",
      blocks: [
        { type: "p", text: "El titular puede revocar el consentimiento en cualquier momento, siempre que no exista impedimento legal o contractual. La Compañía dispondrá mecanismos sencillos y gratuitos para ejercer este derecho." }
      ]
    },
    {
      id: "aviso-privacidad",
      title: "18. AVISO DE PRIVACIDAD",
      blocks: [
        { type: "p", text: "Se utilizará cuando no sea posible poner a disposición del titular la Política completa. Incluirá, como mínimo:" },
        {
          type: "ul",
          items: [
            "Identidad, domicilio y datos de contacto del responsable.",
            "Tipo de tratamiento y finalidad.",
            "Mecanismos para conocer la Política y sus cambios sustanciales.",
            "Forma de acceso o consulta de la Política de tratamiento."
          ]
        }
      ]
    },
    {
      id: "supresion-datos",
      title: "19. SUPRESIÓN DE DATOS",
      blocks: [
        { type: "p", text: "El titular podrá solicitar la supresión de datos cuando:" },
        {
          type: "subsections",
          items: [
            { marker: "a)", text: "No se estén tratando conforme a principios, deberes y obligaciones vigentes." },
            { marker: "b)", text: "Hayan dejado de ser necesarios o pertinentes para la finalidad para la cual fueron recabados." },
            { marker: "c)", text: "Se haya superado el periodo necesario para el cumplimiento de los fines." }
          ]
        },
        { type: "p", text: "La supresión puede negarse cuando:" },
        {
          type: "ul",
          items: [
            "Exista deber legal o contractual de permanecer en la base de datos.",
            "La eliminación obstaculice actuaciones judiciales o administrativas vinculadas a obligaciones fiscales, investigación y persecución de delitos o actualización de sanciones.",
            "Los datos sean necesarios para proteger intereses jurídicamente tutelados, el interés público o cumplir obligaciones del titular."
          ]
        },
        { type: "p", text: "La cancelación o supresión se solicitará por escrito y se tramitará conforme a esta Política." }
      ]
    },
    {
      id: "transferencia",
      title: "20. TRANSFERENCIA DE BASES DE DATOS",
      blocks: [
        { type: "p", text: "La información del titular puede ser transferida al exterior, sujeta a requisitos legales, para relaciones dirigidas a la prestación de servicios. Los datos sensibles no se transferirán sin autorización del titular." }
      ]
    },
    {
      id: "confidencialidad",
      title: "21. CONFIDENCIALIDAD",
      blocks: [
        { type: "p", text: "La Compañía tomará medidas para que terceros receptores de información observen esta Política; solo podrán usar los datos para asuntos directamente relacionados y mientras dure la relación." }
      ]
    },
    {
      id: "intercambio-info",
      title: "22. INTERCAMBIO DE INFORMACIÓN",
      blocks: [
        { type: "p", text: "Podrá intercambiarse información personal con autoridades y terceros participantes en procedimientos, cuando sea necesario o apropiado:" },
        {
          type: "ol",
          items: [
            "Para cumplir leyes vigentes, incluidas las de otros países.",
            "Para cumplir procesos jurídicos.",
            "Para responder solicitudes de autoridades públicas.",
            "Para hacer cumplir términos y condiciones.",
            "Para proteger operaciones.",
            "Para proteger derechos, privacidad, seguridad o propiedad propios o de terceros, y obtener indemnizaciones o limitar perjuicios."
          ]
        }
      ]
    },
    {
      id: "procedimientos",
      title: "23. PROCEDIMIENTOS",
      blocks: [
        { type: "p", text: "La recolección, almacenamiento, uso y circulación de datos personales se realizarán según los procedimientos de esta Política." },
        { type: "p", text: "Antes de iniciar el tratamiento se deberá solicitar autorización de uso de datos al titular por medios que permitan concluir inequívocamente que fue otorgada." },
        { type: "p", text: "Se indicará la existencia de este documento en www.marabunta.co." },
        { type: "p", text: "Generalidades de consulta (art. 21 Decreto 1377 de 2013):" },
        {
          type: "ul",
          items: [
            "El titular podrá consultar gratuitamente al menos una vez por mes calendario.",
            "Siempre que existan modificaciones sustanciales de las Políticas.",
            "Consultas adicionales podrán generar cobro de gastos de envío/reproducción/certificación."
          ]
        },
        { type: "p", text: "Canales de consulta: comercial@marabunta.co" },
        { type: "p", text: "Peticiones, Quejas y Reclamos (PQR):" },
        {
          type: "ul",
          items: [
            "El titular o causahabientes podrán presentar PQR de corrección, actualización o supresión, o por presunto incumplimiento legal.",
            "Derechos ejercibles por titular/causahabientes/representante con acreditación; terceros deben acreditar personería o mandato.",
            "Contenido mínimo del PQR: identificación, correo, teléfonos, opción de respuesta, documentación anexa y motivo con descripción de hechos."
          ]
        },
        { type: "p", text: "Si el reclamo está incompleto, se requerirá subsanar en cinco (5) días. Si en dos (2) meses no se aporta la información, se entenderá desistido." },
        { type: "p", text: "La supresión no se realizará si existe deber legal o contractual de permanencia; en tal caso se suspenderá el uso para la finalidad autorizada." },
        { type: "p", text: "La queja ante la SIC procede una vez agotado el trámite ante el responsable o encargado." }
      ]
    },
    {
      id: "responsable",
      title: "24. RESPONSABLE DEL TRATAMIENTO",
      blocks: [
        {
          type: "dl",
          items: [
            { term: "Razón social", def: "PRENSA & ENTRETENIMIENTO AGENCIA DE COMUNICACIONES S.A.S." },
            { term: "NIT", def: "900.423.752-0" },
            { term: "Domicilio", def: "Calle 8 Oeste # 28-45, Cali, Valle del Cauca" },
            { term: "Correo electrónico", def: "comercial@marabunta.co" }
          ]
        }
      ]
    },
    {
      id: "pre-1377",
      title: "25. DATOS RECOLECTADOS ANTES DEL DECRETO 1377 DE 2013",
      blocks: [
        { type: "p", text: "La Compañía publicará aviso en su página web dirigido a titulares, para dar a conocer la Política y el modo de ejercer derechos respecto de datos recolectados con anterioridad." }
      ]
    },
    {
      id: "medidas-seguridad",
      title: "26. MEDIDAS DE SEGURIDAD",
      blocks: [
        { type: "p", text: "Se adoptarán medidas técnicas, digitales, humanas y administrativas para otorgar seguridad a los registros, evitando adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento." }
      ]
    },
    {
      id: "vigencia-bd",
      title: "27. VIGENCIA BASES DE DATOS",
      blocks: [
        { type: "p", text: "La vigencia será igual al término requerido por la finalidad de recolección y, en todo caso, no mayor al razonable para su desarrollo, conservándose según términos contractuales o legales de documentación." }
      ]
    }
  ]
};