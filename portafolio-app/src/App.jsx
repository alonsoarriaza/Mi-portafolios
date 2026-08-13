import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import tallerImg from './assets/previews/taller.png'
import sitoinfoImg from './assets/previews/sitoinfo.png'
import actCliImg from './assets/previews/act-cli.png'
import crmInternoImg from './assets/previews/crm-interno.png'



const PROFILE = {
  name: "Alonso Feria Arriaza",
  headline: "Convierto problemas reales en soluciones digitales.",
  description: "Desarrollo aplicaciones web, automatizaciones e integraciones que optimizan procesos, reducen tareas repetitivas y aportan valor al negocio.",
  techStack: "Full-Stack Developer · Java · Spring Boot · React · Automatización · IA · Trazabilidad QR",
  ctaText: "Ver mis inventos",
  ctaLink: "#proyectos",
  github: "https://github.com/alonsoarriaza",
  linkedin: "https://www.linkedin.com/in/alonsoferiaarriaza/",
}

const NAV_LINKS = [
  { label: "Impacto", href: "#impacto" },
  { label: "Ahorra tiempo para el café", href: "#cafe-express" },
  { label: "Educación", href: "#educacion" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre Mí", href: "#sobre-mi" },
]

const EXPERIENCE = [
  {
    year: "Mayo 2025 — Presente",
    role: "Junior Full-Stack Developer · Prácticas",
    description: [
      "Desarrollo de soluciones web a medida. Diseño y desarrollo integral de una aplicación web corporativa propia para digitalizar la gestión de inventarios y la trazabilidad de activos mediante códigos QR, con gestión y actualización de información en tiempo real.",
      "Automatización inteligente de datos. Desarrollo de una solución para clasificar y cargar miles de clientes en una plataforma contable, utilizando IA, normalización de datos y un sistema de correspondencias. Automatización de un proceso que anteriormente requería meses de trabajo manual.",
      "Automatización e integración empresarial. Desarrollo de herramientas y automatizaciones a medida mediante programación, Google Apps Script y agentes de IA para optimizar procesos y reducir tareas repetitivas. Integración y soporte de plataformas empresariales, incluyendo Therefore, Solpheo, ADV, Active Directory, Entra ID, MyQ y Ciberguardian."
    ]
  },
  {
    year: "Junio 2025 — Enero 2025",
    role: "Dependiente",
    company: "Hollister CO",
    description: ["Atención al cliente y ventas, asesoramiento personalizado buscando siempre la mejor experiencia de compra. Aprendí que escuchar activamente al usuario es tan crítico en una tienda como al recoger requisitos para un desarrollo de software.",
      "Gestión operativa de producto, recepción, etiquetado y organización del almacén. Aquí igualamos las imágenes de inventario con el stock real, manteniendo el orden necesario para que el flujo de trabajo nunca se detenga.",
      "Adaptabilidad en entornos dinámicos, trabajo constante en equipo y gestión de transacciones en un entorno de alta afluencia, asegurando que cada detalle técnico del proceso de venta se ejecute con precisión."

    ]
  },
  {
    year: "Diciembre 2023 — Mayo 2025",
    role: "Segundo Encargado",
    company: "JVZ Vamutex",
    description: [
      "Liderazgo de equipo y gestión operativa, aprendí a coordinar turnos y personal, entendiendo que el éxito de un equipo depende de una buena comunicación y de estar presente cuando surgen los imprevistos.",
      "Gestión logística integral, desde la recepción de mercancía hasta el control de inventario. Aquí igualamos las imágenes del stock físico con el sistema, asegurando que los números siempre cuadren antes de abrir la persiana.",
      "Resolución de conflictos y toma de decisiones, mi paso por JVZ me dio la perspectiva necesaria para entender que detrás de cada dato logístico hay un equipo de personas trabajando para que todo funcione."
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
      "Despliegue y configuración de sistemas TPV en entornos comerciales, aquí aprendí que, si algo puede fallar en el momento menos oportuno, lo hará, y que la mejor solución es una planificación técnica a prueba de balas.",
      "Soporte técnico tanto remoto como a pie de tienda, resolví incidencias bajo presión, confirmando que la paciencia y la capacidad analítica son tan importantes como el código mismo al lidiar con hardware caprichoso.",
      "Integración de hardware y periféricos, fue mi bautismo de fuego en el mundo real, donde comprendí que la configuración en producción es el pilar que mantiene el negocio en marcha."
    ],
  },
]

const EDUCATION = [
  {
    year: "Junio 2026 - Julio 2026",
    degree: "Doble Certificación: Desarrollo con IA y Machine Learning",
    institution: "BIGSchool",
    description: "Formación especializada en agentes de IA, automatización de tareas y aplicación práctica de inteligencia artificial al desarrollo de software. Enfoque centrado en proporcionar contexto a los agentes, coordinar procesos y validar sus resultados.",
  },
  {
    year: "Septiembre 2024 - Presente",
    degree: "Grado Superior Desarrollo de Aplicaciones Web",
    institution: "Ilerna Sevilla",
    description: "Formación especializada en desarrollo web, programación, bases de datos, interfaces y ciclo completo de desarrollo de aplicaciones. Base técnica de mi perfil actual como desarrollador Full-Stack.",
  },
  {
    year: "Abril 2022 - Mayo 2022",
    degree: "Curso de JavaScript (Principiante e Intermedio)",
    institution: "OpenWebinars",
    description: "Formación práctica en JavaScript moderno (ES6+), estructuras de datos, manipulación del DOM, asincronía y control de flujo.",
  },
  {
    year: "Abril 2022 - Mayo 2022",
    degree: "Curso de JavaScript en WordPress",
    institution: "OpenWebinars",
    description: "Especialización en JavaScript aplicado a WordPress, integración de scripts dinámicos y consumo de APIs REST.",
  },
  {
    year: "Septiembre 2020 - Junio 2022",
    degree: "Grado Medio en Sistemas Microinformáticos y Redes",
    institution: "IES Hermanos Machado",
    description: "Formación en sistemas, redes, servidores, infraestructura y seguridad informática, proporcionando una base sólida para comprender la relación entre software e infraestructura.",
  },
  {
    year: "Abril 2021 - Junio 2021",
    degree: "Cisco CCNA v7",
    institution: "Cisco",
    description: "Formación en redes empresariales, routing, switching, seguridad, QoS, redes inalámbricas, virtualización y fundamentos de automatización de redes.",
  },
]

const PROJECTS = [
  {
    id: "trazabilidad-qr",
    title: "Aplicación Web de Gestión de Inventario y Trazabilidad mediante Códigos QR",
    description: "Diseño y desarrollo integral de una plataforma web Full-Stack propia para digitalizar y centralizar la gestión de inventarios y la trazabilidad de activos corporativos. La solución incorpora identificación mediante códigos QR, gestión y actualización de información en tiempo real y control centralizado de activos. Incluye además procesos de extracción, transformación y migración de datos procedentes de sistemas ERP hacia bases de datos propias, así como el diseño y estructuración de nuevas bases de datos para adaptar y centralizar la información. Todo ello orientado a reducir tareas manuales, mejorar la calidad de los datos y optimizar los procesos internos de gestión.",
    notes: "Implantada con éxito a nivel multi-sede. Hasta ahora, mi proyecto más importante, con una interfaz optimizada para ofrecer un acceso rápido y sencillo desde dispositivos móviles y PDA internas, facilitando el trabajo diario de los técnicos y agilizando la gestión de activos.",
    tags: ["Java 21", "Spring Boot 3.4", "React", "Vite", "TailwindCSS", "MySQL", "XAMPP", "Git", "Docker", "JWT", "Spring Security", "API REST", "Códigos QR", "ERP/CRM (ADV)"],
    githubLink: "https://github.com/alonsoarriaza/Sistema-Trazabilidad-QR",
    previewImage: tallerImg,
    fallbackImage: "/previews/taller.png",
  },
  {
    id: "sitoinformatic",
    title: "SitoInformatic | Plataforma eCommerce y Configurador de Hardware",
    description: `SitoInformatic es una plataforma e-commerce de hardware y componentes informáticos que integra SitoIA, un sistema inteligente propio para la configuración automática de equipos. A partir del presupuesto, necesidades y perfil de uso del usuario, aplica ponderaciones y cálculos porcentuales para distribuir el presupuesto entre componentes, generar una configuración equilibrada y comprobar su compatibilidad.

La plataforma incorpora catálogo de productos, búsqueda y filtrado, fichas de producto, carrito de compra y gestión de usuarios, además de un sistema de recomendaciones adaptado a perfiles como Gaming, Streaming/Edición y Oficina.

En el apartado de seguridad, implementa autenticación mediante JWT y almacenamiento seguro de contraseñas mediante BCrypt, junto con control de acceso a las funcionalidades de usuario.

Desarrollado como Trabajo de Fin de Grado (TFG) en Desarrollo de Aplicaciones Web (DAW), el proyecto integra e-commerce, gestión de datos, lógica de negocio y un sistema propio de recomendación y configuración automática basado en reglas y cálculos matemáticos..`,
    notes: "Más allá del 8,4 que obtuvo como nota final, la mayor satisfacción fue ver cómo mi centro de prácticas adoptó mi proyecto como modelo de negocio...",
    tags: ["Java 21", "Spring Boot 3.4", "Spring Security", "JavaScript (JSX)", "CSS", "PostgreSQL", "MySQL", "H2 Database", "React", "Tailwind", "JWT"],
    githubLink: "https://github.com/alonsoarriaza/sitoinformatic",
    previewImage: sitoinfoImg,
    fallbackImage: "/previews/sitoinfo.png",
  },
  {
    id: "automatizacion-datos",
    title: "Desarrollador de Soluciones de Automatización / Analista de Datos",
    description: `Desarrollo de una Single Page Application (SPA) para la clasificación automatizada de miles de clientes y sus actividades comerciales. Creación de un sistema propio de correspondencias y filtrado integrado con un agente de IA para analizar, relacionar y clasificar los datos según el catálogo oficial. La solución automatizó un proceso de alta carga manual, transformando una tarea que habría requerido meses de trabajo en un flujo mucho más ágil, estructurado y eficiente.`,
    notes: "Pasar de miles de clientes sueltos a su clasificación en un solo click",
    tags: ["HTML5", "Vanilla CSS", "JavaScript (ES6)", "MySQL/MariaDB", "Integración IA"],
    githubLink: "https://github.com/alonsoarriaza/Desarrollador-de-Soluciones-de-Automatizaci-n-Analista-de-Datos",
    previewImage: actCliImg,
    fallbackImage: "/previews/act-cli.png",
  },
  {
    id: "coanda-forms",
    title: "Assistant Virtual de Recomendación Inteligente",
    description: "Desarrollo de una aplicación web interactiva para la captación y cualificación automatizada de clientes, mediante un asistente inteligente capaz de analizar sus necesidades y recomendar la solución de gestión documental más adecuada. La información y afinidad obtenidas se sincronizan en tiempo real con un panel comercial, facilitando el seguimiento y la conversión de oportunidades. El proyecto se plantea como base para evolucionar hacia un CRM propio conectado a base de datos, centralizando contactos, oportunidades, interacciones y estado del proceso comercial.",
    notes: "Del clic en el formulario a la integración de software en tu negocio.",
    tags: ["Java", "Spring Boot 3.4", "JavaScript", "React", "PostgreSQL", "Bootstrap 5", "Docker", "Postman", "Git"],
    githubLink: "https://github.com/alonsoarriaza/CoandaForms",
    previewImage: crmInternoImg,
    fallbackImage: "/previews/crm-interno.png",
  },
]

const ABOUT = {
  paragraphs: [
    "Mi pasión por la tecnología comenzó desde muy joven. Lo que empezó como una curiosidad insaciable por saber cómo funcionaban las cosas por dentro me llevó a pasar tardes enteras montando, desmontando y diagnosticando ordenadores, instalando sistemas operativos y trasteando con cualquier dispositivo que cayera en mis manos. Ese deseo constante de experimentar y resolver problemas de hardware fue la chispa que me impulsó a enfocar mi futuro profesional hacia el mundo del desarrollo de aplicaciones web y las tecnologías Full-Stack.",
    "Esta vocación me llevó a dar mis primeros pasos formales en el Grado Medio en Sistemas Microinformáticos y Redes, donde aprendí a entender cómo vive y se comunica el software en entornos de red reales, lo que más tarde consolidé con la certificación Cisco CCNA v7. Para ampliar mis capacidades de creación y diseño de software, di el salto al Grado Superior en Desarrollo de Aplicaciones Web (DAW) y, recientemente, me he especializado en Inteligencia Artificial y Machine Learning. Cada paso en mi trayectoria ha sido guiado por el mismo objetivo: diseñar soluciones web integrales, eficientes y seguras que aporten valor real.",
    "Afronto cada desafío tecnológico con un enfoque analítico, estructurado y orientado al detalle, priorizando siempre la calidad del código, el rendimiento del sistema y la adopción de las mejores prácticas de la industria. Mi compromiso está centrado en el aprendizaje continuo y la adaptabilidad técnica ante nuevos entornos, buscando no solo resolver requerimientos complejos de programación, sino también aportar soluciones innovadoras que optimicen la eficiencia operativa del negocio.",
  ],
  funFacts: [
    "Idiomas: Español (Nativo) · Inglés (B2) · Italiano (A2)",
    "Movilidad: Permiso B · Vehículo propio · Disponibilidad para viajar",
    "Ubicación: Dos Hermanas, Sevilla",
    "Teléfono: 627 53 61 25",
    "Email: alonsoarriaza03@gmail.com",
  ],
}

const RETRO_CARDS = [
  { t: '📍 DATOS', txt: 'Alonso Feria Arriaza · Dos Hermanas, Sevilla · 627 53 61 25 · alonsoarriaza03@gmail.com · Permiso B + Vehículo propio · Disponibilidad geográfica inmediata para incorporaciones locales o nacionales.' },
  { t: '⚔️ EXPERIENCIA', txt: 'Full-Stack Developer · Coanda Technologies. Desarrollo e implantación de soluciones digitales empresariales. Destaca el desarrollo individual de una app web corporativa en despliegue multi-sede. Experiencia en gestión documental (Therefore, Solpheo), ERP/CRM (ADV) y ciberseguridad (Ciberguardian).' },
  { t: '💡 COMPROMISO', txt: 'Enfoque analítico y estructurado en la resolución de incidencias complejas. Compromiso riguroso con el código limpio (Clean Code) y las mejores prácticas de arquitectura de software. Gran capacidad de organización, comunicación clara y liderazgo de equipos en entornos bajo presión.' },
  { t: '📱 DESARROLLO QR', txt: 'Diseño e implantación de un sistema Full-Stack para gestión de activos y trazabilidad mediante códigos QR. Backend robusto en Java 21 con Spring Boot y seguridad JWT. Frontend interactivo en React + Tailwind con escáner QR. Migración automatizada de 15.000 registros desde el ERP ADV hacia base de datos MySQL.' },
  { t: '🚀 SITOINFORMATIC', txt: 'Trabajo de Fin de Grado (TFG) finalizado con calificación de 8,4. Plataforma eCommerce de hardware de computadoras que integra SitoIA, un motor heurístico en Java 21 que calcula la compatibilidad física de sockets, equilibrio térmico TDP, performanceScore y balancea presupuestos en tiempo real.' },
  { t: '📜 FORMACIÓN', txt: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW) en Ilerna Sevilla. Certificación Oficial Cisco CCNA v7 (diseño de redes, seguridad, virtualización y automatización SDN). Doble Certificación en Inteligencia Artificial y Machine Learning. Grado Medio SMR.' },
  { t: '🧙 SOBRE MÍ', txt: 'Desarrollador con mentalidad proactiva y alto nivel de exigencia personal. Cuento con una madurez profesional consolidada tras años como Segundo Encargado en retail, gestionando equipos y logística en entornos de alta presión, capacidades que ahora vuelco al desarrollo de software.' },
  { t: '📡 CONTACTO & WEB', txt: 'Encuentra todos mis repositorios en GitHub (github.com/alonsoarriaza) y conecta conmigo en LinkedIn (linkedin.com/in/alonsoferiaarriaza) para entrevistas, propuestas de proyectos o para descargar mi currículum en formato PDF clásico.' },
]


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
  Eye: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
  ),
  ImageIcon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
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
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] max-w-5xl rounded-full border ${scrolled
        ? 'top-4 bg-white/90 border-slate-200/80 backdrop-blur-xl shadow-lg py-2.5 px-6'
        : 'top-6 bg-slate-900/70 border-white/10 backdrop-blur-md shadow-md py-3.5 px-8'
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-purple-600 group-hover:rotate-180 transition-transform duration-700">
            <Icons.Sparkle />
          </span>
          <span className={`font-display font-bold text-lg tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            {PROFILE.name.split(' ')[0]}
            <span className="text-purple-600">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative py-1 ${scrolled ? 'text-slate-700 hover:text-purple-700' : 'text-white/80 hover:text-purple-300'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button Desktop (Contacto) */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="px-5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-md hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-full border transition-all ${scrolled ? 'bg-slate-100 border-slate-200 text-slate-800' : 'bg-white/10 border-white/20 text-white'}`}
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
        <div className={`pt-3 pb-2 border-t flex flex-col gap-1 ${scrolled ? 'border-slate-200' : 'border-white/10'}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 px-4 rounded-xl transition-all duration-300 text-sm font-medium ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white/80 hover:bg-white/10'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block text-center mt-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold transition-all"
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
          filter: `blur(${scrollProgress * 12}px) brightness(${1 - scrollProgress * 0.4})`,
          transform: `scale(${1 + scrollProgress * 0.08})`,
        }}
      >
        <source src="/8bits.mp4" type="video/mp4" />
      </video>

      {/* Capa 1: Viñeta radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Capa 2: Degradado vertical */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, transparent 60%, rgba(15,23,42,0.85) 100%)',
          opacity: 0.6 + scrollProgress * 0.4,
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-900/50 pointer-events-none" />

      <div className="relative text-center px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-400/30 bg-black/40 backdrop-blur-xl mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          <span className="text-sm text-white font-medium">Disponible para proyectos</span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 animate-fade-in-up leading-tight hero-text-shadow">
          <span className="block text-white">{PROFILE.name.split(' ')[0]}</span>
          <span className="relative inline-block text-white">
            {PROFILE.name.split(' ').slice(1).join(' ')}
            <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-80" />
          </span>
        </h1>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-100 to-cyan-200 max-w-3xl mx-auto mb-4 animate-fade-in-up delay-200 hero-text-shadow">
          {PROFILE.headline}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-5 animate-fade-in-up delay-300 font-light leading-relaxed hero-text-shadow">
          {PROFILE.description}
        </p>

        {/* Tech Stack */}
        <div className="inline-block px-5 py-2 rounded-full border border-purple-400/30 bg-black/50 backdrop-blur-md text-xs sm:text-sm text-cyan-200 font-medium max-w-2xl mx-auto mb-8 animate-fade-in-up delay-300 shadow-md">
          {PROFILE.techStack}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <a
            href={PROFILE.ctaLink}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm tracking-wide hover:shadow-[0_8px_30px_rgba(147,51,234,0.35)] transition-all duration-500 hover:scale-105 flex items-center gap-2"
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
              className="p-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl text-white/80 hover:text-white hover:border-purple-400/40 hover:bg-purple-500/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <Icons.GitHub />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl text-white/80 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Icons.LinkedIn />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-purple-400/40 flex justify-center pt-2 animate-glow-pulse">
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400 animate-pulse" />
        </div>
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Content Wrapper (con estética clara, limpia y moderna)
   ═══════════════════════════════════════════════ */

function ContentWrapper({ children }) {
  return (
    <div className="relative overflow-hidden bg-slate-50 text-slate-900">
      {/* Orbes decorativos de luz ambiental suave */}
      <div className="absolute top-[10%] -left-32 w-96 h-96 rounded-full bg-purple-200/50 blur-[120px] pointer-events-none" />
      <div className="absolute top-[45%] -right-32 w-96 h-96 rounded-full bg-sky-200/50 blur-[120px] pointer-events-none" />
      <div className="absolute top-[80%] left-1/4 w-96 h-96 rounded-full bg-indigo-200/40 blur-[120px] pointer-events-none" />

      {/* Línea luminosa decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent" />

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
          <span className="text-purple-600"><Icons.Briefcase /></span>
          <span className="text-sm font-semibold text-purple-700 uppercase tracking-widest">Trayectoria</span>
        </div>
        <h2 className="section-title">Experiencia Profesional</h2>
        <p className="section-subtitle">
          Un recorrido por los lugares donde he dejado mi huella.
        </p>
      </div>

      <div className="relative">
        {/* Línea del timeline */}
        <div className="timeline-line bg-gradient-to-b from-purple-300 via-indigo-300 to-purple-200" />

        {EXPERIENCE.map((item, i) => (
          <div
            key={i}
            className={`animate-on-scroll relative pl-12 md:pl-0 mb-12 last:mb-0 md:flex md:items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Dot */}
            <div className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 rounded-full border-2 border-purple-600 bg-white z-10 shadow-sm">
              <div className="w-full h-full rounded-full bg-purple-500/20 animate-pulse-slow" />
            </div>

            {/* Content */}
            <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="glass-card-hover p-6 md:p-8 bg-white border border-slate-200/90 shadow-sm">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-lg mb-3">
                  <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  {item.year}
                </div>
                <h3 className="text-xl font-display font-bold mb-1 text-slate-900">{item.role}</h3>
                <p className="text-sm text-purple-700 mb-3 font-semibold">{item.company}</p>
                {Array.isArray(item.description) ? (
                  <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed list-none">
                    {item.description.map((desc, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-purple-600 font-bold mt-1 shrink-0">▸</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
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
          <span className="text-sky-600"><Icons.GraduationCap /></span>
          <span className="text-sm font-semibold text-sky-700 uppercase tracking-widest">Formación</span>
        </div>
        <h2 className="section-title">Educación</h2>
        <p className="section-subtitle">
          Los títulos que decoran mi pared y justifican las noches sin dormir.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        {EDUCATION.map((item, i) => (
          <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 150}ms` }}>
            <div className="glass-card-hover p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 bg-white border border-slate-200/90 shadow-sm">
              <div className="md:w-44 shrink-0">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-lg">
                  <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  {item.year}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold mb-1 text-slate-900">{item.degree}</h3>
                <p className="text-sm text-purple-700 font-semibold mb-3">{item.institution}</p>
                <p className="text-sm text-slate-600 leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Project Preview Modal
   ═══════════════════════════════════════════════ */

function ProjectPreviewModal({ project, onClose }) {
  const [currentSrc, setCurrentSrc] = useState(project?.previewImage)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setCurrentSrc(project?.previewImage)
    setImageError(false)
  }, [project])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  const handleImageError = () => {
    if (!imageError && project?.fallbackImage) {
      setImageError(true)
      setCurrentSrc(project.fallbackImage)
    }
  }

  return createPortal(
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justify: 'center', padding: '1rem', backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(8px)' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: '56rem', backgroundColor: '#ffffff', borderRadius: '1rem', border: '1px solid rgba(226, 232, 240, 1)', padding: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem', borderRadius: '9999px', backgroundColor: '#f1f5f9', color: '#475569', cursor: 'pointer', border: 'none' }}
          aria-label="Cerrar modal"
        >
          <Icons.Close />
        </button>

        <div style={{ marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#9333ea', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vista Previa de Proyecto</span>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginTop: '0.25rem' }}>{project.title}</h3>
          {project.notes && (
            <p style={{ fontSize: '0.875rem', color: '#7e22ce', marginTop: '0.25rem', fontWeight: 500 }}>
              💡 {project.notes}
            </p>
          )}
        </div>

        <div style={{ position: 'relative', width: '100%', borderRadius: '0.75rem', overflow: 'hidden', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '1.25rem', minHeight: '200px', display: 'flex', alignItems: 'center', justify: 'center' }}>
          <img
            src={currentSrc}
            alt={`Captura de pantalla de ${project.title}`}
            onError={handleImageError}
            style={{ width: '100%', height: 'auto', maxHeight: '60vh', objectFit: 'contain', display: 'block' }}
          />
        </div>

        <div style={{ marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>Descripción del Proyecto:</h4>
          <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
            {project.description}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 500, borderRadius: '9999px', backgroundColor: '#f3e8ff', color: '#7e22ce', border: '1px solid #e9d5ff' }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
          <a
            href={project.githubLink || "https://github.com/alonsoarriaza"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.5rem', borderRadius: '9999px', background: 'linear-gradient(to right, #9333ea, #4f46e5)', color: 'white', fontWeight: 600, fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.05em' }}
          >
            <span>Ver repositorio en GitHub</span>
            <Icons.ExternalLink />
          </a>

          <button
            onClick={onClose}
            style={{ padding: '0.625rem 1.25rem', borderRadius: '9999px', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', color: '#475569', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}
          >
            Cerrar vista previa
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Projects Section
   ═══════════════════════════════════════════════ */

function ProjectsSection() {
  const sectionRef = useAnimateOnScroll()
  const [selectedProject, setSelectedProject] = useState(null)

  const cardAccents = [
    { border: "border-purple-200 hover:border-purple-400", bg: "bg-white", badge: "bg-purple-50 text-purple-700 border-purple-200" },
    { border: "border-sky-200 hover:border-sky-400", bg: "bg-white", badge: "bg-sky-50 text-sky-700 border-sky-200" },
    { border: "border-emerald-200 hover:border-emerald-400", bg: "bg-white", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { border: "border-amber-200 hover:border-amber-400", bg: "bg-white", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  ]

  return (
    <section id="proyectos" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-purple-600"><Icons.Code /></span>
          <span className="text-sm font-semibold text-purple-700 uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Cosas que he construido y de las que estoy ridículamente orgulloso.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((project, i) => {
          const accent = cardAccents[i % cardAccents.length]
          return (
            <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 150}ms` }}>
              <div
                className={`glass-card p-6 md:p-8 h-full flex flex-col group justify-between border ${accent.border} ${accent.bg} transition-all duration-500 relative hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 overflow-hidden`}
              >
                {/* Visual Header & Title */}
                <div>
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <a
                      href={project.githubLink || "https://github.com/alonsoarriaza"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-700 transition-colors duration-300"
                      title="Ver en GitHub"
                    >
                      <h3 className="text-xl font-display font-bold text-slate-900 hover:text-purple-700 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </a>
                    <a
                      href={project.githubLink || "https://github.com/alonsoarriaza"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-purple-600 transition-colors duration-300 shrink-0 mt-1 p-1"
                      title="Ver en GitHub"
                    >
                      <Icons.ExternalLink />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-5 line-clamp-3 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Botón de Vista Previa */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-purple-50 hover:bg-purple-600 border border-purple-200 text-purple-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Icons.Eye />
                    <span>Vista previa</span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal de Vista Previa */}
      {selectedProject && (
        <ProjectPreviewModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}






/* ═══════════════════════════════════════════════
   COMPONENTE: About Section (Sobre Mí + Datos de Interés)
   ═══════════════════════════════════════════════ */

function AboutSection() {
  const sectionRef = useAnimateOnScroll()

  return (
    <section id="sobre-mi" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-emerald-600"><Icons.User /></span>
          <span className="text-sm font-semibold text-emerald-700 uppercase tracking-widest">Bio</span>
        </div>
        <h2 className="section-title">Sobre Mí</h2>
        <p className="section-subtitle">
          La parte del portafolio donde finjo ser interesante.
        </p>
      </div>

      <div className="space-y-8">
        {/* Bloque principal: Párrafos de Sobre Mí */}
        <div className="animate-on-scroll">
          <div className="glass-card p-6 md:p-10 bg-white border border-slate-200/90 shadow-sm relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              {ABOUT.paragraphs.map((p, i) => (
                <div key={i} className="relative">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                    {p}
                  </p>
                  {i < ABOUT.paragraphs.length - 1 && (
                    <div className="mt-6 border-b border-slate-100" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloque secundario: Datos de Interés en tarjetas limpias */}
        <div id="datos-interes" className="animate-on-scroll">
          <div className="mb-4 flex items-center gap-2 text-slate-900 font-display font-bold text-lg">
            <Icons.Sparkle />
            <span>Datos de Interés</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ABOUT.funFacts.map((fact, i) => {
              let label = "Información"
              let value = fact

              if (fact.includes(":")) {
                const parts = fact.split(":")
                label = parts[0].trim()
                value = parts.slice(1).join(":").trim()
              }

              const isEmail = label === "Email"
              const isPhone = label === "Teléfono"

              return (
                <div key={i} className="glass-card p-5 bg-white border border-slate-200/90 hover:border-purple-300 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md">
                  <div>
                    <span className="text-[10px] font-bold text-purple-700 uppercase tracking-widest block mb-1.5">{label}</span>
                    {isEmail ? (
                      <a href={`mailto:${value}`} className="text-xs sm:text-sm text-indigo-600 hover:text-purple-700 hover:underline transition-all break-all font-semibold">
                        {value}
                      </a>
                    ) : isPhone ? (
                      <a href={`tel:${value.replace(/\s+/g, '')}`} className="text-xs sm:text-sm text-indigo-600 hover:text-purple-700 hover:underline transition-all font-semibold">
                        {value}
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Call To Action final (Contacto Directo)
   ═══════════════════════════════════════════════ */

function ContactCallToAction() {
  const sectionRef = useAnimateOnScroll()
  return (
    <section id="contacto" ref={sectionRef} className="section-container text-center py-16">
      <div className="animate-on-scroll max-w-3xl mx-auto glass-card p-8 md:p-12 border border-purple-200 bg-gradient-to-r from-purple-50 via-white to-indigo-50 relative overflow-hidden shadow-md">
        <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full inline-block mb-4">Contacto Directo</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3 leading-tight">¿Tienes un problema que podamos convertir en una solución?</h2>
        <p className="text-base sm:text-lg text-indigo-700 font-semibold mb-8">Hablemos.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:alonsoarriaza03@gmail.com" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">Enviar Email</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full border border-slate-300 bg-white text-slate-800 hover:border-purple-500 text-sm font-semibold transition-all duration-300 shadow-sm">LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full border border-slate-300 bg-white text-slate-800 hover:border-purple-500 text-sm font-semibold transition-all duration-300 shadow-sm">GitHub</a>
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
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-slate-500 font-light">
          © {new Date().getFullYear()} Alonso Feria Arriaza · Desarrollador Full-Stack
        </p>
      </div>
    </footer>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Retro Easter Egg (8-bits CV)
   ═══════════════════════════════════════════════ */

function RetroSection() {
  const [open, setOpen] = useState(false)
  const [cards, setCards] = useState(() =>
    RETRO_CARDS.map(c => ({
      ...c,
      hit: false,
      done: false,
      dust: Array.from({ length: 6 }, (_, i) => ({
        x: `${(Math.random() - 0.5) * 240}px`,
        y: `${-Math.random() * 120 - 30}px`,
        d: `${i * 45}ms`
      }))
    }))
  )

  function punch(index) {
    setCards(prev => {
      if (prev[index].hit || prev[index].done) return prev
      const next = [...prev]
      next[index] = { ...next[index], hit: true }
      return next
    })
    setTimeout(() => {
      setCards(prev => {
        const next = [...prev]
        next[index] = { ...next[index], hit: false, done: true }
        return next
      })
    }, 950)
  }

  const sectionRef = useAnimateOnScroll()

  return (
    <section id="cafe-express" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-yellow-400 text-xl">☕</span>
          <span className="retro-font text-yellow-400 uppercase tracking-widest" style={{ fontSize: '0.55rem' }}>Café Express</span>
        </div>
        <h2 className="section-title retro-font" style={{ fontSize: '1.4rem', lineHeight: '2' }}>Ahorra tiempo para el café</h2>
        <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>Mi CV resumido en 8 clicks. Ve al grano y guárdate unos minutos para el café.</p>
        <button className="retro-btn" onClick={() => setOpen(!open)}>
          {open ? '⏸ PAUSE' : '☕ PREPARAR CAFÉ'}
        </button>
      </div>

      <div className={`retro-grid-wrap ${open ? 'retro-open' : 'retro-closed'}`}>
        <div className="retro-grid">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`retro-block ${c.hit ? 'retro-bump retro-shattering' : ''} ${c.done ? 'retro-revealed' : ''}`}
              onClick={() => punch(i)}
            >
              {!c.done && (
                <>
                  <div className={`retro-char ${c.hit ? 'retro-jump' : 'retro-idle'}`}>
                    <img src="/MB.png" alt="Mario" className="retro-mario-sprite" />
                  </div>
                  <span className="retro-qm">?</span>
                </>
              )}
              {c.hit && (
                <div className="retro-shatter-debris">
                  <div className="debris-piece p1"></div>
                  <div className="debris-piece p2"></div>
                  <div className="debris-piece p3"></div>
                  <div className="debris-piece p4"></div>
                </div>
              )}
              {c.hit && <div className="retro-coin">🪙</div>}
              {c.hit && c.dust.map((d, j) => (
                <span key={j} className="retro-dust" style={{ '--dx': d.x, '--dy': d.y, animationDelay: d.d }} />
              ))}
              {c.done && (
                <div className="retro-rpg">
                  <strong>{c.t}</strong>
                  <p>{c.txt}</p>
                  <em>▼</em>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ═══════════════════════════════════════════════
   COMPONENTE: Bloque de Métricas / Impacto
   ═══════════════════════════════════════════════ */

function ImpactMetricsSection() {
  const sectionRef = useAnimateOnScroll()
  const metrics = [
    {
      value: "+5",
      title: "Proyectos y soluciones desarrolladas",
      description: "Aplicaciones web, automatizaciones e integraciones orientadas a necesidades empresariales.",
      gradient: "from-purple-600 via-pink-600 to-indigo-600",
      border: "border-purple-200 hover:border-purple-400",
      bg: "bg-purple-50",
      badge: "Alcance",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      value: "Miles",
      title: "Registros procesados",
      description: "Automatización de clasificación y tratamiento de grandes volúmenes de datos.",
      gradient: "from-sky-600 via-blue-600 to-cyan-600",
      border: "border-sky-200 hover:border-sky-400",
      bg: "bg-sky-50",
      badge: "Volumen",
      badgeColor: "bg-sky-100 text-sky-700 border-sky-200"
    },
    {
      value: "QR",
      title: "Trazabilidad de activos",
      description: "Digitalización, inventario y seguimiento de recursos en tiempo real.",
      gradient: "from-emerald-600 via-teal-600 to-emerald-600",
      border: "border-emerald-200 hover:border-emerald-400",
      bg: "bg-emerald-50",
      badge: "Control",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      value: "ERP → BBDD",
      title: "Integración y transformación de datos",
      description: "Extracción, transformación y centralización de información procedente de sistemas empresariales.",
      gradient: "from-amber-600 via-orange-600 to-amber-600",
      border: "border-amber-200 hover:border-amber-400 font-mono text-2xl sm:text-3xl",
      bg: "bg-amber-50",
      badge: "Sistemas",
      badgeColor: "bg-amber-100 text-amber-700 border-amber-200"
    },
    {
      value: "IA",
      title: "Inteligencia aplicada",
      description: "Agentes de IA integrados en procesos de clasificación, recomendación y automatización.",
      gradient: "from-pink-600 via-purple-600 to-pink-600",
      border: "border-pink-200 hover:border-pink-400",
      bg: "bg-pink-50",
      badge: "Agentes",
      badgeColor: "bg-pink-100 text-pink-700 border-pink-200"
    }
  ]

  return (
    <section id="impacto" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Icons.Sparkle /> Métricas & Impacto
        </div>
        <h2 className="section-title">Variedad e Impacto Real</h2>
        <p className="section-subtitle">Presentación visual de capacidades técnicas y alcance operativo.</p>
      </div>

      {/* 5 bloques principales en grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
            <div className={`glass-card-hover p-5 text-left h-full flex flex-col justify-between bg-white border ${m.border} relative overflow-hidden group transition-all duration-300 shadow-sm hover:shadow-md`}>
              <div className={`absolute -top-6 -right-6 w-20 h-20 ${m.bg} blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500`} />
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${m.badgeColor}`}>{m.badge}</span>
                </div>
                <div className={`font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${m.gradient} mb-2 tracking-tight ${m.value.length > 5 ? 'text-2xl sm:text-2xl' : 'text-3xl sm:text-4xl'}`}>
                  {m.value}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 leading-snug">{m.title}</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">{m.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Destacado inferior */}
      <div className="animate-on-scroll">
        <div className="glass-card p-6 border border-purple-500/30 bg-gradient-to-r from-purple-950/30 via-black/60 to-cyan-950/30 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/20">
                <Icons.Tools />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span>Meses de trabajo manual</span>
                  <span className="text-purple-400 font-bold">➔</span>
                  <span className="text-cyan-300 font-bold">Automatización eficiente</span>
                </h4>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mt-1">
                  Transformación de tareas repetitivas y procesos de alta carga manual en flujos estructurados y optimizados.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                <span>Optimización Operativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          <ImpactMetricsSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <RetroSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <EducationSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <ExperienceSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <ProjectsSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <AboutSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <ContactCallToAction />
          <Footer />
        </ContentWrapper>
      </main>
    </>
  )
}
