import { useState, useEffect, useRef } from 'react'



const PROFILE = {
  name: "Alonso Feria Arriaza",
  role: "Desarollador Web Full Stack",
  heroTagline: "Construyo aplicaciones webs escalables y seguras, adaptadas a las necesidades de cada cliente.",
  ctaText: "Ver mis inventos",
  ctaLink: "#proyectos",
  github: "https://github.com/alonsoarriaza",
  linkedin: "https://www.linkedin.com/in/alonsoferiaarriaza/",
}

const NAV_LINKS = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Educación", href: "#educacion" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Competencias", href: "#competencias" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Datos de Interés", href: "#datos-interes" },
]

const EXPERIENCE = [
  {
    year: "Mayo 2025 — Presente",
    role: "Becario",
    company: "Coanda Technologies Solutions",
    description: [
      "Diseño y desarrollo integral de una aplicación web personalizada para la gestión de inventario y trazabilidad. Implementé un sistema de control de stock y seguimiento mediante códigos QR que permite optimizar la visibilidad de activos entre departamentos. Más que un gestor de piezas, es una herramienta diseñada para eliminar cuellos de botella operativos, demostrando que un código bien estructurado ahorra horas de trabajo manual.",
      "Automatización y Captación de Clientes — Creación de herramientas propias para la gestión de leads, aprovechando la arquitectura de mi proyecto final. He adaptado esta metodología para agilizar la entrada de datos y conectar con plataformas de prospección, optimizando el funnel de conversión. En resumen: menos formularios manuales, menos errores y mucha más eficiencia en la captación.",
      "Automatización de Procesos y Gestión Documental — Implementación de scripts en Google Apps Script para automatizar tareas recurrentes, eliminando el margen de error humano en la transferencia de datos. Además, gestiono flujos de trabajo inteligentes en plataformas documentales (como Therefore), donde igualamos las imágenes de los flujos digitales con los procesos reales de la empresa, asegurando que la información esté siempre disponible.",
      "Seguridad, Ciberseguridad y Gestión Empresarial — Análisis del funcionamiento interno de plataformas de gestión documental como Solpheo, sistemas ERP/CRM para la gestión de incidencias como ADV, y la monitorización de soluciones de ciberseguridad avanzada como Ciberguardian. Esta labor me permite auditar cómo fluye la información corporativa, entender la arquitectura detrás de la sincronización de datos y evaluar el impacto directo de la seguridad en la operatividad diaria del negocio.",
    ]
  },
  {
    year: "Junio 2025 — Enero 2025",
    role: "Dependiente",
    company: "Hollister CO",
    description: ["Atención al cliente y ventas: Asesoramiento personalizado buscando siempre la mejor experiencia de compra. Aprendí que escuchar activamente al usuario es tan crítico en una tienda como al recoger requisitos para un desarrollo de software.",
      "Gestión operativa de producto: Recepción, etiquetado y organización del almacén. Aquí igualamos las imágenes de inventario con el stock real, manteniendo el orden necesario para que el flujo de trabajo nunca se detenga.",
      "Adaptabilidad en entornos dinámicos: Trabajo constante en equipo y gestión de transacciones en un entorno de alta afluencia, asegurando que cada detalle técnico del proceso de venta se ejecute con precisión."

    ]
  },
  {
    year: "Diciembre 2023 — Mayo 2025",
    role: "Segundo Encargado",
    company: "JVZ Vamutex",
    description: [
      "Liderazgo de equipo y gestión operativa. Aprendí a coordinar turnos y personal, entendiendo que el éxito de un equipo depende de una buena comunicación y de estar presente cuando surgen los imprevistos.",
      "Gestión logística integral: desde la recepción de mercancía hasta el control de inventario. Aquí igualamos las imágenes del stock físico con el sistema, asegurando que los números siempre cuadren antes de abrir la persiana.",
      "Resolución de conflictos y toma de decisiones. Mi paso por JVZ me dio la perspectiva necesaria para entender que detrás de cada dato logístico hay un equipo de personas trabajando para que todo funcione."
    ]
  },
  {
    year: "Enero 2023 — Noviembre 2023",
    role: "Dependiente Primer nivel",
    company: "FC&CO",
    description: [
      "Asesoramiento de moda personalizado y atención al cliente de alto nivel, representando firmas internacionales de primer nivel (Armani, Calvin Klein, Lacoste, Hugo Boss, etc.) y garantizando una experiencia de compra exclusiva.",
      "Gestión y control de inventario de producto premium, supervisando la recepción de stock y el mantenimiento del área de venta bajo estrictos estándares estéticos de las marcas.",
      "Consecución de objetivos de venta individuales y colectivos mediante técnicas de venta consultiva y fidelización de clientes habituales."
    ]
  },
  {
    year: "Abril 2022 — Julio 2022",
    role: "Becario",
    company: "Grillo Telemático",
    description: [
      "Despliegue y configuración de sistemas TPV en entornos comerciales. Aquí aprendí que, si algo puede fallar en el momento menos oportuno, lo hará, y que la mejor solución es una planificación técnica a prueba de balas.",
      "Soporte técnico tanto remoto como a pie de tienda. Resolví incidencias bajo presión, confirmando que la paciencia y la capacidad analítica son tan importantes como el código mismo al lidiar con hardware caprichoso.",
      "Integración de hardware y periféricos. Fue mi bautismo de fuego en el mundo real, donde comprendí que la configuración en producción es el pilar que mantiene el negocio en marcha."
    ],
  },
]

const EDUCATION = [
  {
    year: "Junio 2026 - Julio 2026",
    degree: "Doble Certificación: Desarrollo con IA y Machine Learning",
    institution: "BIGSchool",
    description: "Aprendi como funciona un Agente de IA y como usarlo para automatizar tareas repetitivas.Gracias a la formación y práctica constante, he aprendido a no ver la IA como algo mágico, sino como una herramienta clave en mi caja: ahora sé cómo darle el contexto necesario para que los agentes resuelvan tareas completas con criterio, en lugar de generar simples fragmentos de código. Con este enfoque, he aprendido a coordinar múltiples procesos para ganar en orden y velocidad, validando siempre cada paso para mantener el control total del proyecto. Al final, se trata de que igualamos las imágenes de lo que la tecnología promete con lo que realmente somos capaces de construir de manera eficiente y profesional",
  },

  {
    year: "Septiembre 2024 - Presente",
    degree: "Grado Superior Desarrollo de Aplicaciones Web",
    institution: "Ilerna Sevilla",
    description: "Mi formación técnica especializada en el ecosistema web. Aquí pasé de escribir un simple HOLA MUNDO! en pocas líneas de código a diseñar arquitecturas completas y funcionales. Aprendí a manejar el ciclo de vida de una aplicación, desde el diseño de la base de datos hasta el despliegue final, asegurando siempre que el resultado no solo funcione, sino que sea eficiente y fácil de mantener. Es la base sobre la que construyo todas mis soluciones actuales.",
  },

  {
    year: "Abril 2021 - Junio 2021",
    degree: "Cisco CCNA v7",
    institution: "Cisco",
    description: "Esta certificación va mucho más allá de lo básico. Aprendí a diseñar, construir y mantener redes empresariales, abarcando desde la gestión de redes inalámbricas (WLC) y políticas de calidad de servicio (QoS), hasta la seguridad avanzada. Además, me adentré en las tecnologías que marcan el presente y futuro del sector: virtualización de redes, arquitectura SDN (redes definidas por software) y la programación aplicada a la automatización de tareas. En resumen: aprendí a estructurar la infraestructura para que los datos fluyan de manera eficiente, segura y, sobre todo, automatizada.",
  },
  {
    year: "Abril 2022 - Mayo 2022",
    degree: "Curso de JavaScript (Principiante e Intermedio)",
    institution: "OpenWebinars",
    description: "Formación práctica orientada a consolidar las bases del lenguaje JavaScript moderno (ES6+), dominando la manipulación interactiva del DOM, estructuras de datos, asincronía y el control de flujos de ejecución.",
  },
  {
    year: "Abril 2022 - Mayo 2022",
    degree: "Curso de JavaScript en WordPress",
    institution: "OpenWebinars",
    description: "Especialización en el uso de JavaScript dentro del ecosistema de WordPress, enfocándose en la integración de scripts dinámicos en el frontend y el consumo de la REST API para enriquecer temas y plugins.",
  },
  {
    year: "Septiembre 2020 - Junio 2022",
    degree: "Grado Medio en Sistemas microinformáticos y redes",
    institution: "IES Hermanos Machado",
    description: "Más allá de la pantalla, este grado me dio la visión necesaria para entender cómo vive el software en el mundo real. Aquí aprendí a configurar redes, gestionar servidores y garantizar que la infraestructura no sea un cuello de botella, sino el soporte que hace que cualquier aplicación sea estable, segura y escalable. En definitiva, entiendo qué pasa desde que el usuario pulsa un botón hasta que el dato llega a su destino..",
  },
]

const PROJECTS = [
  {
    title: "Aplicación Web de Gestión de Inventario y Trazabilidad mediante Códigos QR",
    description: `Diseño y desarrollo integral de una plataforma web Full-Stack orientada a la trazabilidad de activos corporativos y la gestión avanzada de inventarios. Para eliminar las ineficiencias operativas y la dependencia de procesos manuales, se construyó una interfaz de usuario altamente intuitiva y rápida para los técnicos utilizando React, Vite y TailwindCSS. Esta capa visual agiliza los procesos para dar de alta nuevas máquinas y equipos, permitiendo además un control de stock en tiempo real mediante un módulo integrado de generación y lectura de códigos QR. Esto otorga a los distintos departamentos una visibilidad absoluta y sin fricción sobre las entradas, salidas y transferencias de piezas y materiales.

La lógica de negocio y la escalabilidad del sistema están sostenidas por un backend de alto rendimiento desarrollado en Java 21 con Spring Boot. Mediante una API REST protegida por Spring Security y autenticación JWT, la aplicación logró un despliegue multi-sede seguro y exitoso. Su implantación estandarizó la gestión de inventario en todas las delegaciones de la compañía equipadas con almacén, centralizando el control corporativo y logrando una reducción drástica de las horas dedicadas a tareas manuales redundantes.

Para asegurar una puesta en producción fluida y sin impacto en la operativa diaria, se diseñó un pipeline de carga masiva de datos acoplado a los sistemas corporativos existentes. Este proceso extrajo e importó de forma automatizada un volumen de aproximadamente 15.000 registros históricos directamente desde el ERP/CRM (ADV) hacia una base de datos en MySQL. Por otro lado, la plataforma cuenta con un estricto sistema de roles y permisos que adapta las funcionalidades y el acceso a la información según el perfil del usuario (técnicos, comerciales y supervisores), agilizando la localización de activos y mitigando los errores humanos en la empresa.`,
    notes: "Implantada con éxito a nivel multi-sede, hasta ahora mi proyecto mas importante.",
    tags: ["Java 21", "Spring Boot", "React", "Vite", "TailwindCSS", "MySQL", "XAMPP", "Git", "Docker", "JWT", "Spring Security", "API REST", "Códigos QR", "ERP/CRM (ADV)"],
  },
  {
    title: "SitoInformatic | Plataforma eCommerce y Configurador de Hardware",
    description: `SitoInformatic es una tienda online de ordenadores y componentes diseñada a medida para que cualquier persona pueda adquirir el equipo perfecto sin necesidad de tener conocimientos técnicos. Su principal innovación es un asistente inteligente que funciona como un asesor personal experto: el usuario simplemente indica cuánto dinero quiere gastar y el uso principal que le dará al ordenador (como jugar, transmitir en vivo o tareas de oficina). En cuestión de segundos, el sistema analiza el catálogo y construye automáticamente la mejor combinación de piezas posibles, asegurándose de que todas encajen físicamente, funcionen a la perfección entre sí y aprovechen cada céntimo del presupuesto. Una vez generada esta propuesta a medida, el cliente puede revisarla de forma muy visual, añadirla directamente a su carrito y finalizar el pago, logrando una experiencia de compra guiada, rápida, segura y sin miedo a cometer errores.

Para ponerme mas técnico el resumen de SitoInformatic es una plataforma e-commerce full-stack de alto rendimiento diseñada para democratizar la adquisición de hardware personalizado, eliminando la asimetría de información mediante SitoIA, un motor heurístico propietario desarrollado en Java 21 que resuelve las dudas del usuario en un click. Este algoritmo optimiza configuraciones en tiempo real aplicando reglas de negocio estrictas, como el balanceo dinámico de presupuestos mediante técnicas de arrastre (carryover) y la validación de restricciones físicas (compatibilidad de sockets, equilibrio térmico mediante TDP y performanceScore), garantizando siempre el máximo rendimiento técnico por cada euro invertido.

La arquitectura, fundamentada en principios de diseño limpio y desacoplado, integra un backend robusto en Spring Boot 3.4 que gestiona la seguridad perimetral mediante autenticación stateless (JWT/BCrypt) y asegura la integridad transaccional ACID en PostgreSQL para la gestión crítica de inventarios. En el frontend, la aplicación se despliega como una Single Page Application (SPA) optimizada con React, Vite y Tailwind CSS, ofreciendo una interfaz responsive con gestión de estado compleja para manipulaciones CRUD dinámicas y visualización precisa de cálculos fiscales. En conjunto, el proyecto transforma una experiencia de compra técnica compleja en un flujo intuitivo de "fricción cero", logrando escalar el modelo de negocio al eliminar la dependencia de soporte técnico pre-venta humano y elevar la tasa de conversión mediante una precisión algorítmica inalterable.`,
    notes: "Más allá del 8,4 que obtuvo como nota final, la mayor satisfacción fue ver cómo mi centro de prácticas adoptó mi proyecto como modelo de negocio y me dio la oportunidad de presentarlo ante mis compañeros de departamento, y ver la posible adaptabilidad a un modelo de captación de clientes.",
    tags: ["Java 21", "JavaScript (JSX)", "CSS", "PostgreSQL", "MySQL", "H2 Database", "Spring Boot", "React", "Tailwind", "JWT"],
  },
  {
    title: "Desarrollador de Soluciones de Automatización / Analista de Datos",
    description: `Desarrollé una aplicación web (Single Page Application) utilizando HTML5, Vanilla CSS y JavaScript (ES6) orientada a automatizar la clasificación de actividades comerciales, integrando una interfaz de alta usabilidad con retroalimentación visual en tiempo real. El núcleo del sistema incluye un motor heurístico de emparejamiento y un algoritmo de normalización de texto con diccionario de pesos que clasifica automáticamente más del 80% de los registros, complementado por un módulo híbrido de integración con Inteligencia Artificial mediante un parser JSON con soporte interactivo Drag & Drop para procesar los lotes no identificados. Para finalizar el flujo, programé un generador automatizado de scripts de migración SQL (MySQL/MariaDB) que asegura la consistencia e integridad referencial estructurando las salidas mediante una división lógica por provincias. A nivel de impacto de negocio, esta herramienta logró estandarizar los formatos de entrada, eliminar el 100% de los errores de importación contable y reducir drásticamente los tiempos de procesamiento manual, pasando de requerir varios días de trabajo a completarse en escasos minutos por provincia.`,
    notes: "Pasar de miles de clientes sueltos a su clasificación en un solo click",
    tags: ["HTML5", "Vanilla CSS", "JavaScript (ES6)", "MySQL/MariaDB", "Integración IA"],
  },
  {
    title: "Assistant Virtual de Recomendación Inteligente",
    description: "Desarrollé e implementé un asistente virtual de recomendación inteligente especializado en sistemas de gestión documental corporativa (DMS/ECM), aprovechando estratégicamente la arquitectura y parte del desarrollo algorítmico de mi Trabajo de Fin de Grado (TFG), la aplicación SitoInformatic. Con el objetivo de optimizar el embudo de conversión digital y eliminar por completo la fricción operativa en la fase de preventa, diseñé y programé una interfaz interactiva basada en un formulario dinámico y gamificado que actúa como puente de comunicación: traduce la alta complejidad de los requisitos técnicos a un lenguaje conversacional y accesible, adaptando sus ramificaciones lógicas en tiempo real según las interacciones del usuario. En el núcleo de esta arquitectura, integré un potente motor algorítmico de análisis multivariable capaz de procesar instantáneamente parámetros críticos de negocio —tales como modelos de licenciamiento, proyecciones de escalabilidad, volumen de datos y exigencias específicas del entorno de trabajo—. Este sistema evalúa todas las restricciones y mapea de forma autónoma el catálogo para recomendar el ecosistema de software más idóneo. Con este desarrollo, no solo logré proporcionar a los clientes una propuesta de digitalización inmediata y de alta precisión, sino que automaticé la captación de leads altamente cualificados. El sistema enriquece la base de datos de la empresa con perfiles técnicos completos, dotando al equipo comercial de un diagnóstico previo exhaustivo que permite ejecutar contactos de ventas estratégicos con soluciones ya definidas antes de la primera llamada.",
    notes: "Del clic en el formulario a la integración de software en tu negocio.",
    tags: ["Java", "Spring Boot 3.4", "JavaScript", "React", "PostgreSQL", "Bootstrap 5", "Docker", "Postman", "Git"],
  },
]

const SKILLS = [
  {
    category: "Backend Development",
    icon: "Server",
    color: "text-purple-400 bg-purple-400/10 border-purple-500/20",
    gradient: "from-purple-500/20 to-pink-500/5",
    skills: ["Java 21", "Spring Boot 3.4", "Spring Security", "JWT", "API REST", "Algoritmos de Optimización"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-500/20",
    gradient: "from-cyan-500/20 to-blue-500/5",
    skills: ["React (SPA)", "Vite", "TailwindCSS", "Axios", "Componentes Dinámicos", "Gestión de Estados"]
  },
  {
    category: "Gestión de Datos",
    icon: "Database",
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20",
    gradient: "from-emerald-500/20 to-teal-500/5",
    skills: ["PostgreSQL", "MySQL", "MongoDB (NoSQL)", "Spring Data JPA", "Hibernate (Persistencia ORM)"]
  },
  {
    category: "Lenguajes de Programación",
    icon: "Terminal",
    color: "text-amber-400 bg-amber-400/10 border-amber-500/20",
    gradient: "from-amber-500/20 to-orange-500/5",
    skills: ["PHP (Symfony)", "C#", "Python", "JavaScript (ES6)", "HTML5", "CSS3"]
  },
  {
    category: "DevOps, Entornos & Testing",
    icon: "Cpu",
    color: "text-rose-400 bg-rose-400/10 border-rose-500/20",
    gradient: "from-rose-500/20 to-red-500/5",
    skills: ["Docker (Contenedores)", "Jenkins (CI/CD)", "JUnit (Unit Testing)", "Apache / Tomcat", "Metodología SCRUM"]
  },
  {
    category: "Herramientas & Tooling",
    icon: "Tools",
    color: "text-indigo-400 bg-indigo-400/10 border-indigo-500/20",
    gradient: "from-indigo-500/20 to-purple-500/5",
    skills: ["Git (Control de Versiones)", "Maven (Dependencias)", "Swagger / OpenAPI", "Postman (Testing API)"]
  }
]

const ABOUT = {
  paragraphs: [
    "Mi pasión por la tecnología comenzó desde muy joven. Lo que empezó como una curiosidad insaciable por saber cómo funcionaban las cosas por dentro me llevó a pasar tardes enteras montando, desmontando y diagnosticando ordenadores, instalando sistemas operativos y trasteando con cualquier dispositivo que cayera en mis manos. Ese deseo constante de experimentar y resolver problemas de hardware fue la chispa que me impulsó a enfocar mi futuro profesional hacia el mundo del desarrollo de software y las infraestructuras de red.",
    "Esta vocación me llevó a dar mis primeros pasos formales en el Grado Medio en Sistemas Microinformáticos y Redes, donde aprendí a entender cómo vive y se comunica el software en entornos de red reales, lo que más tarde consolidé con la certificación Cisco CCNA v7. Para ampliar mis capacidades de creación y diseño de software, di el salto al Grado Superior en Desarrollo de Aplicaciones Web (DAW) y, recientemente, me he especializado en Inteligencia Artificial y Machine Learning. Cada paso en mi trayectoria ha sido guiado por el mismo objetivo: diseñar soluciones web integrales, eficientes y seguras que aporten valor real.",
    "Afronto cada desafío tecnológico con un enfoque analítico, estructurado y orientado al detalle, priorizando siempre la calidad del código, el rendimiento del sistema y la adopción de las mejores prácticas de la industria. Mi compromiso está centrado en el aprendizaje continuo y la adaptabilidad técnica ante nuevos entornos, buscando no solo resolver requerimientos complejos de programación, sino también aportar soluciones innovadoras que optimicen la eficiencia operativa del negocio.",
  ],
  funFacts: [
    "🌐 Idiomas: Español (Nativo) · Inglés (B2) · Italiano (A2)",
    "🚗 Movilidad: Permiso de conducir B y vehículo propio",
    "🌍 Disponibilidad: Flexibilidad geográfica y para viajar",
    "📍 Ubicación: Dos Hermanas, Sevilla",
    "📞 Teléfono: 627 53 61 25",
    "✉️ Email: alonsoarriaza03@gmail.com",
    "🎂 Nacimiento: 14/07/2002",
  ],
}


/* ═══════════════════════════════════════════════
   ICONOS SVG
   ═══════════════════════════════════════════════ */

const Icons = {
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
  ),
  GraduationCap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" /></svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  ),
  ArrowDown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
  ),
  GitHub: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
  ),
  LinkedIn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
  ),
  Sparkle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" /></svg>
  ),
  Server: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
  ),
  Layout: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
  ),
  Database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
  ),
  Terminal: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
  ),
  Cpu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" /></svg>
  ),
  Tools: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
  ),
}


/* ═══════════════════════════════════════════════
   HOOK: Intersection Observer para animaciones
   ═══════════════════════════════════════════════ */

function useAnimateOnScroll() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = ref.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Navbar
   ═══════════════════════════════════════════════ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] max-w-5xl rounded-full border border-white/10 ${scrolled
        ? 'top-4 bg-black/85 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] py-2.5 px-6'
        : 'top-6 bg-black/50 backdrop-blur-md shadow-lg py-3.5 px-8'
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-purple-400 group-hover:rotate-180 transition-transform duration-700">
            <Icons.Sparkle />
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            {PROFILE.name.split(' ')[0]}
            <span className="text-purple-400">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-purple-300 transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button Desktop (Contacto) */}
        <div className="hidden md:block">
          <a
            href="#sobre-mi"
            className="px-5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="pt-3 pb-2 border-t border-white/5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#sobre-mi"
            onClick={() => setMobileOpen(false)}
            className="block text-center mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold transition-all"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Video Background (con blur dinámico al scroll)
   ═══════════════════════════════════════════════ */

function VideoBackground() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = window.innerHeight * 0.8
      const progress = Math.min(window.scrollY / maxScroll, 1)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-[filter] duration-300"
        style={{
          filter: `blur(${scrollProgress * 12}px) brightness(${1 - scrollProgress * 0.5})`,
          transform: `scale(${1 + scrollProgress * 0.08})`,
        }}
      >
        <source src="/8bits.mp4" type="video/mp4" />
      </video>

      {/* Capa 1: Viñeta radial (siempre visible, efecto cine) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Capa 2: Degradado vertical (se intensifica al bajar) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.7) 100%)',
          opacity: 0.6 + scrollProgress * 0.4,
        }}
      />

      {/* Capa 3: Oscurecimiento progresivo general */}
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-500"
        style={{ opacity: scrollProgress * 0.55 }}
      />

      {/* Capa 4: Ruido sutil (textura premium) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Hero Section
   ═══════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Capa de respaldo para legibilidad sobre el video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      <div className="relative text-center px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-400/30 bg-black/40 backdrop-blur-xl mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          <span className="text-sm text-white font-medium">Disponible para proyectos</span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up leading-tight hero-text-shadow">
          <span className="block text-white">{PROFILE.name.split(' ')[0]}</span>
          <span className="relative inline-block text-white">
            {PROFILE.name.split(' ').slice(1).join(' ')}
            <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-80" />
          </span>
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-4 animate-fade-in-up delay-200 font-light hero-text-shadow">
          {PROFILE.role}
        </p>

        {/* Tagline */}
        <p className="text-base text-white/80 max-w-lg mx-auto mb-10 animate-fade-in-up delay-300 hero-text-shadow">
          {PROFILE.heroTagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href={PROFILE.ctaLink}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm tracking-wide hover:shadow-[0_8px_30px_rgba(168,85,247,0.35)] transition-all duration-500 hover:scale-105 flex items-center gap-2"
          >
            {PROFILE.ctaText}
            <span className="group-hover:translate-y-1 transition-transform duration-300">
              <Icons.ArrowDown />
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-xl text-white/80 hover:text-white hover:border-purple-400/40 hover:bg-purple-500/15 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
              aria-label="GitHub"
            >
              <Icons.GitHub />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-xl text-white/80 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/15 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Icons.LinkedIn />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-purple-400/30 flex justify-center pt-2 animate-glow-pulse">
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-purple-400/60 to-cyan-400/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Content Wrapper (con fondo rico y orbes de color)
   ═══════════════════════════════════════════════ */

function ContentWrapper({ children }) {
  return (
    <div className="relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, rgba(10,5,25,0.92) 0%, rgba(15,10,35,0.95) 20%, rgba(8,5,20,0.96) 50%, rgba(12,8,30,0.95) 80%, rgba(10,5,25,0.92) 100%)',
      backdropFilter: 'blur(40px) saturate(1.2)',
    }}>
      {/* Orbe decorativo púrpura */}
      <div className="absolute top-[20%] -left-32 w-96 h-96 rounded-full bg-purple-600/8 blur-[100px] animate-orb pointer-events-none" />
      {/* Orbe decorativo cyan */}
      <div className="absolute top-[50%] -right-32 w-80 h-80 rounded-full bg-cyan-500/6 blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '5s' }} />
      {/* Orbe decorativo rosa */}
      <div className="absolute top-[75%] left-1/4 w-72 h-72 rounded-full bg-pink-500/5 blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '10s' }} />

      {/* Zona de transición superior */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full pointer-events-none">
        <div className="h-56 bg-gradient-to-b from-transparent via-[rgba(10,5,25,0.4)] to-[rgba(10,5,25,0.92)]" />
      </div>

      {/* Línea luminosa decorativa en el borde superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Experience Section (Timeline)
   ═══════════════════════════════════════════════ */

function ExperienceSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="experiencia" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-purple-400"><Icons.Briefcase /></span>
          <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">Trayectoria</span>
        </div>
        <h2 className="section-title">Experiencia Profesional</h2>
        <p className="section-subtitle">
          Un recorrido por los lugares donde he dejado mi huella.
        </p>
      </div>

      <div className="relative">
        {/* Línea del timeline */}
        <div className="timeline-line" />

        {EXPERIENCE.map((item, i) => (
          <div
            key={i}
            className={`animate-on-scroll relative pl-12 md:pl-0 mb-12 last:mb-0 md:flex md:items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Dot */}
            <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 rounded-full border-2 border-purple-500 bg-black z-10">
              <div className="w-full h-full rounded-full bg-purple-500/30 animate-pulse-slow" />
            </div>

            {/* Content */}
            <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="glass-card-hover p-6 md:p-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-lg mb-3">
                  <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  {item.year}
                </div>
                <h3 className="text-xl font-display font-bold mb-1 text-white">{item.role}</h3>
                <p className="text-sm text-cyan-400/80 mb-3 font-medium">{item.company}</p>
                {Array.isArray(item.description) ? (
                  <ul className="space-y-2 text-sm text-white/50 leading-relaxed list-none">
                    {item.description.map((desc, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-purple-400/60 mt-1 shrink-0">▸</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Education Section
   ═══════════════════════════════════════════════ */

function EducationSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="educacion" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-cyan-400"><Icons.GraduationCap /></span>
          <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">Formación</span>
        </div>
        <h2 className="section-title">Educación</h2>
        <p className="section-subtitle">
          Los títulos que decoran mi pared y justifican las noches sin dormir.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        {EDUCATION.map((item, i) => (
          <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 150} ms` }}>
            <div className="glass-card-hover p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <div className="md:w-40 shrink-0">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-lg">
                  <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  {item.year}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold mb-1 text-white">{item.degree}</h3>
                <p className="text-sm text-purple-400/80 font-medium mb-3">{item.institution}</p>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Projects Section
   ═══════════════════════════════════════════════ */

function ProjectsSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="proyectos" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-pink-400"><Icons.Code /></span>
          <span className="text-sm font-medium text-pink-400 uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Cosas que he construido y de las que estoy ridículamente orgulloso.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((project, i) => (
          <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 150} ms` }}>
            <div className="glass-card-hover p-6 md:p-8 h-full flex flex-col group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-display font-bold text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <span className="text-white/30 group-hover:text-white/70 transition-colors duration-300 shrink-0 ml-2 mt-1">
                  <Icons.ExternalLink />
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed mb-4 flex-grow whitespace-pre-line">
                {project.description}
              </p>

              {/* Notes */}
              <p className="text-xs text-white/30 italic mb-5 border-l-2 border-purple-500/30 pl-3">
                {project.notes}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



/* ═══════════════════════════════════════════════
   COMPONENTE: Competencias Técnicas
   ═══════════════════════════════════════════════ */

function SkillsSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="competencias" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-purple-400"><Icons.Code /></span>
          <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">Stack</span>
        </div>
        <h2 className="section-title">Competencias Técnicas</h2>
        <p className="section-subtitle">
          Mi caja de herramientas tecnológicas clasificadas por especialidades.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SKILLS.map((skill, i) => {
          const SkillIcon = Icons[skill.icon] || Icons.Code
          return (
            <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
              <div className={`glass-card-hover p-6 md:p-8 h-full flex flex-col bg-gradient-to-br ${skill.gradient}`}>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl border ${skill.color}`}>
                    <SkillIcon />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white leading-snug">
                    {skill.category}
                  </h3>
                </div>

                {/* Sub skills List */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.skills.map((s, j) => (
                    <span key={j} className="tag text-white/80 border-white/5 bg-white/5 hover:border-white/20 transition-colors duration-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: About Section
   ═══════════════════════════════════════════════ */

function AboutSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="sobre-mi" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-emerald-400"><Icons.User /></span>
          <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">Bio</span>
        </div>
        <h2 className="section-title">Sobre Mí</h2>
        <p className="section-subtitle">
          La parte del portafolio donde finjo ser interesante.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {/* Main Text */}
        <div className="md:col-span-2 animate-on-scroll">
          <div className="glass-card p-6 md:p-8 space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-white/60 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div id="datos-interes" className="animate-on-scroll delay-200">
          <div className="glass-card p-6 md:p-8 h-full">
            <h3 className="font-display font-bold text-lg mb-5 flex items-center gap-2 text-white">
              <Icons.Sparkle /> Datos de Interés
            </h3>
            <ul className="space-y-4">
              {ABOUT.funFacts.map((fact, i) => {
                if (fact.includes("Email:")) {
                  const parts = fact.split("Email:");
                  return (
                    <li key={i} className="text-sm text-white/50 leading-relaxed pl-1">
                      {parts[0]}Email: <a href={`mailto:${parts[1].trim()}`} className="text-purple-400 hover:text-purple-300 hover:underline transition-all">{parts[1]}</a>
                    </li>
                  );
                }
                if (fact.includes("Teléfono:")) {
                  const parts = fact.split("Teléfono:");
                  const phoneClean = parts[1].replace(/\s+/g, '');
                  return (
                    <li key={i} className="text-sm text-white/50 leading-relaxed pl-1">
                      {parts[0]}Teléfono: <a href={`tel:${phoneClean}`} className="text-cyan-400 hover:text-cyan-300 hover:underline transition-all">{parts[1]}</a>
                    </li>
                  );
                }
                return (
                  <li key={i} className="text-sm text-white/50 leading-relaxed pl-1">
                    {fact}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Footer
   ═══════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-white/30">
          © {new Date().getFullYear()} {PROFILE.name}. Hecho con café y mucho amor.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Icons.GitHub />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Icons.LinkedIn />
          </a>
        </div>
      </div>
    </footer>
  )
}


/* ═══════════════════════════════════════════════
   APP PRINCIPAL
   ═══════════════════════════════════════════════ */

export default function App() {
  return (
    <>
      <VideoBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ContentWrapper>
          <ExperienceSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <EducationSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <ProjectsSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <SkillsSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <AboutSection />
          <Footer />
        </ContentWrapper>
      </main>
    </>
  )
}
