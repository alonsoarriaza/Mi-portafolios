import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import tallerImg from './assets/previews/taller.png'
import sitoinfoImg from './assets/previews/sitoinfo.png'
import actCliImg from './assets/previews/act-cli.png'
import crmInternoImg from './assets/previews/crm-interno.png'

const PROFILE = {
  name: "Alonso Feria Arriaza",
  headline: "Convierto problemas reales en soluciones digitales.",
  subtitle: "Full-Stack Developer especializado en desarrollo web, automatización e integración de sistemas.",
  techBadges: ["Java", "Spring Boot", "React", "Automatización", "IA", "Trazabilidad QR"],
  ctaText: "Explora mis inventos",
  ctaLink: "#proyectos",
  github: "https://github.com/alonsoarriaza",
  linkedin: "https://www.linkedin.com/in/alonsoferiaarriaza/",
}

const NAV_LINKS = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Mis Inventos", href: "#proyectos" },
  { label: "Diferencia", href: "#diferencia" },
  { label: "Stack", href: "#tecnologias" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Café Express", href: "#cafe-express" },
  { label: "Contacto", href: "#contacto" },
]

const COANDA_EXPERIENCE = {
  year: "Mayo 2025 — Presente",
  role: "Full-Stack Developer · Programa de Prácticas",
  company: "Coanda Technologies Solutions",
  blocks: [
    {
      title: "DESARROLLO FULL-STACK",
      text: "Desarrollo de aplicaciones web corporativas y soluciones a medida, participando en el análisis, diseño, implementación, integración y gestión de datos."
    },
    {
      title: "AUTOMATIZACIÓN E IA",
      text: "Creación de automatizaciones y herramientas internas para reducir tareas repetitivas, tratar grandes volúmenes de información e incorporar agentes de IA a procesos empresariales."
    },
    {
      title: "SISTEMAS E INTEGRACIÓN",
      text: "Trabajo con plataformas empresariales, gestión documental, ERP/CRM, sistemas de identidad e infraestructura corporativa.",
      techs: ["Therefore", "Solpheo", "ADV", "Active Directory", "Entra ID", "GPO", "MyQ", "Ciberguardian"]
    }
  ]
}

const PRIOR_EXPERIENCE = [
  {
    year: "Junio 2025 — Enero 2025",
    role: "Dependiente",
    company: "Hollister CO",
    description: [
      "Atención al cliente y ventas, asesoramiento personalizado buscando siempre la mejor experiencia de compra.",
      "Gestión operativa de producto, recepción, etiquetado y organización del almacén manteniendo el orden y flujo de trabajo.",
      "Adaptabilidad en entornos dinámicos, trabajo constante en equipo y gestión de transacciones."
    ]
  },
  {
    year: "Diciembre 2023 — Mayo 2025",
    role: "Segundo Encargado",
    company: "JVZ Vamutex",
    description: [
      "Liderazgo de equipo y gestión operativa, coordinación de turnos y personal con alta capacidad de comunicación.",
      "Gestión logística integral desde la recepción de mercancía hasta el control riguroso de inventario.",
      "Resolución de conflictos y toma de decisiones en entornos de alta exigencia."
    ]
  },
  {
    year: "Enero 2023 — Noviembre 2023",
    role: "Dependiente Primer nivel",
    company: "FC&CO",
    description: [
      "Asesoramiento de moda personalizado y atención al cliente de alto nivel para firmas internacionales.",
      "Gestión y control de inventario de producto premium bajo estrictos estándares estéticos.",
      "Consecución de objetivos de venta individuales y colectivos mediante técnicas de venta consultiva."
    ]
  },
  {
    year: "Abril 2022 — Julio 2022",
    role: "Becario",
    company: "Grillo Telemático",
    description: [
      "Despliegue y configuración de sistemas TPV en entornos comerciales con planificación técnica rigurosa.",
      "Soporte técnico tanto remoto como a pie de tienda para la resolución de incidencias.",
      "Integración de hardware y periféricos comerciales en producción."
    ]
  }
]

const PROJECTS = [
  {
    id: "trazabilidad-qr",
    number: "PROYECTO 01",
    title: "Inventario & Trazabilidad",
    subtitle: "Digitalización y control de activos mediante QR.",
    description: "Plataforma web Full-Stack propia para centralizar la gestión de inventarios y la trazabilidad de activos corporativos. Permite identificar, consultar y actualizar activos mediante códigos QR y gestionar la información en tiempo real.",
    details: "El proyecto incluye extracción, transformación y migración de datos procedentes de sistemas ERP hacia bases de datos propias, además del diseño y estructuración de nuevas bases de datos.",
    goal: "Objetivo: mejorar el control de recursos, reducir tareas manuales y centralizar la información.",
    tags: ["Java 21", "Spring Boot 3.4", "React", "MySQL", "Códigos QR", "ERP (ADV)"],
    githubLink: "https://github.com/alonsoarriaza/Sistema-Trazabilidad-QR",
    previewImage: tallerImg,
    fallbackImage: "/previews/taller.png",
    accentColor: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
  },
  {
    id: "automatizacion-datos",
    number: "PROYECTO 02",
    title: "Clasificación Inteligente de Clientes",
    subtitle: "Miles de clientes. Meses de trabajo manual. Un proceso automatizado.",
    description: "Solución desarrollada para automatizar la clasificación de miles de clientes y sus actividades comerciales.",
    details: "Creación de un sistema propio de correspondencias y filtrado integrado con un agente de IA para analizar, relacionar y clasificar información según el catálogo oficial.",
    goal: "Resultado: transformación de un proceso de alta carga manual en un flujo mucho más ágil, estructurado y eficiente.",
    tags: ["JavaScript", "HTML5", "CSS", "Agente de IA", "Filtrado de Datos", "Google Apps Script"],
    githubLink: "https://github.com/alonsoarriaza/Desarrollador-de-Soluciones-de-Automatizaci-n-Analista-de-Datos",
    previewImage: actCliImg,
    fallbackImage: "/previews/act-cli.png",
    accentColor: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
  },
  {
    id: "coanda-forms",
    number: "PROYECTO 03",
    title: "Lead Generation & Sales Assistant",
    subtitle: "De visitante a oportunidad comercial.",
    description: "Aplicación web interactiva orientada a la captación y cualificación automatizada de clientes en el ámbito de la gestión documental.",
    details: "Un asistente interactivo analiza las necesidades técnicas y operativas del usuario y recomienda la solución de software que mejor se adapta a sus requisitos. La información recopilada y la afinidad calculada se sincronizan en tiempo real con un panel comercial, facilitando el seguimiento personalizado y la toma de decisiones durante el proceso de venta.",
    goal: "Evolución prevista: planteado como base para evolucionar hacia un CRM propio conectado a una base de datos, centralizando contactos, oportunidades, interacciones y estado comercial.",
    tags: ["React", "Java", "Spring Boot", "PostgreSQL", "Cualificación Comercial"],
    githubLink: "https://github.com/alonsoarriaza/CoandaForms",
    previewImage: crmInternoImg,
    fallbackImage: "/previews/crm-interno.png",
    accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
  },
  {
    id: "sitoinformatic",
    number: "PROYECTO 04",
    title: "SitoInformatic",
    subtitle: "¿Qué PC necesita realmente cada usuario?",
    description: "Plataforma e-commerce de hardware que incorpora SitoIA, un sistema inteligente propio para la configuración automática de equipos.",
    details: "El sistema utiliza presupuesto, necesidades y perfil de uso para aplicar ponderaciones y cálculos porcentuales, distribuir el presupuesto entre componentes y generar una configuración equilibrada y compatible. Incluye catálogo de productos, búsqueda y filtrado, fichas, carrito de compra, gestión de usuarios y recomendaciones para perfiles Gaming, Streaming/Edición y Oficina.",
    security: "Autenticación mediante JWT y almacenamiento seguro de contraseñas mediante hashing con BCrypt.",
    goal: "Proyecto desarrollado como Trabajo de Fin de Grado (TFG) del ciclo de Desarrollo de Aplicaciones Web.",
    tags: ["Java 21", "Spring Boot", "React", "MySQL", "JWT", "BCrypt", "TFG DAW"],
    githubLink: "https://github.com/alonsoarriaza/sitoinformatic",
    previewImage: sitoinfoImg,
    fallbackImage: "/previews/sitoinfo.png",
    accentColor: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
  },
]

const DIFFERENTIATORS = [
  {
    title: "DESARROLLO",
    text: "Construcción de aplicaciones web completas orientadas a necesidades reales.",
    iconKey: "Code",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    textGradient: "from-purple-400 to-pink-400"
  },
  {
    title: "AUTOMATIZACIÓN",
    text: "Transformación de tareas manuales en procesos automatizados.",
    iconKey: "Tools",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    textGradient: "from-cyan-400 to-blue-400"
  },
  {
    title: "DATOS",
    text: "Extracción, transformación, normalización y centralización de información.",
    iconKey: "Database",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
    textGradient: "from-emerald-400 to-teal-400"
  },
  {
    title: "IA",
    text: "Integración de agentes y sistemas inteligentes para resolver tareas concretas.",
    iconKey: "Sparkle",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
    textGradient: "from-amber-400 to-orange-400"
  },
  {
    title: "ENTORNO EMPRESARIAL",
    text: "Experiencia trabajando con ERP, CRM, gestión documental, identidades, infraestructura y seguridad.",
    iconKey: "Server",
    border: "border-pink-500/30",
    bg: "bg-pink-500/10",
    textGradient: "from-pink-400 to-rose-400"
  }
]

const TECH_CATEGORIES = [
  {
    title: "DESARROLLO",
    items: ["Java", "Spring Boot", "React", "JavaScript", "HTML5", "CSS", "REST API"],
    color: "purple",
  },
  {
    title: "DATOS",
    items: ["SQL", "MySQL", "Bases de datos", "Migración y transformación de datos"],
    color: "cyan",
  },
  {
    title: "AUTOMATIZACIÓN",
    items: ["Google Apps Script", "Agentes IA", "Automatización"],
    color: "amber",
  },
  {
    title: "ENTORNO EMPRESARIAL",
    items: ["Therefore", "Solpheo", "ADV", "Active Directory", "Entra ID", "GPO", "MyQ", "Ciberguardian"],
    color: "emerald",
  },
  {
    title: "SEGURIDAD",
    items: ["JWT", "BCrypt"],
    color: "pink",
  },
]

const EDUCATION = [
  {
    year: "Junio 2026 - Julio 2026",
    degree: "Doble Certificación: Desarrollo con IA y Machine Learning",
    institution: "BIGSchool",
    description: "Aprendizaje práctico sobre agentes de IA y su aplicación técnica para automatizar tareas complejas, coordinar flujos de trabajo con contexto estructurado y optimizar procesos de desarrollo."
  },
  {
    year: "Septiembre 2024 - Presente",
    degree: "Grado Superior Desarrollo de Aplicaciones Web (DAW)",
    institution: "Ilerna Sevilla",
    description: "Formación técnica especializada en el ciclo de vida completo de aplicaciones web: diseño de bases de datos, desarrollo backend y frontend, arquitectura de sistemas y despliegue."
  },
  {
    year: "Abril 2022 - Mayo 2022",
    degree: "Curso de JavaScript (Principiante e Intermedio)",
    institution: "OpenWebinars",
    description: "Consolidación de bases en JavaScript moderno (ES6+), manipulación del DOM, estructuras de datos, asincronía y control de flujos de ejecución."
  },
  {
    year: "Abril 2022 - Mayo 2022",
    degree: "Curso de JavaScript en WordPress",
    institution: "OpenWebinars",
    description: "Integración de scripts dinámicos en el frontend y consumo de REST API en el ecosistema WordPress."
  },
  {
    year: "Septiembre 2020 - Junio 2022",
    degree: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
    institution: "IES Hermanos Machado",
    description: "Configuración de redes, administración de servidores e infraestructura tecnológica para garantizar entornos estables y seguros."
  },
  {
    year: "Abril 2021 - Junio 2021",
    degree: "Cisco CCNA v7",
    institution: "Cisco",
    description: "Diseño, administración y seguridad en redes empresariales, abarcando QoS, virtualización de redes, SDN y automatización."
  }
]

const ABOUT = {
  paragraphs: [
    "Mi pasión por la tecnología comenzó desde muy joven. Lo que empezó como una curiosidad por comprender la tecnología me llevó a pasar tardes enteras montando y diagnosticando ordenadores, administrando sistemas operativos y explorando soluciones informáticas.",
    "Esa vocación se consolidó en el Grado Medio en Sistemas Microinformáticos y Redes (con certificación Cisco CCNA v7) y posteriormente en el Grado Superior en Desarrollo de Aplicaciones Web (DAW), complementado con especialización en IA y Machine Learning. Mi objetivo es diseñar y desplegar soluciones de software sólidas, mantenibles y orientadas a aportar valor en entornos corporativos reales.",
  ],
  info: [
    { label: "Idiomas", value: "Español (Nativo) · Inglés (B2) · Italiano (A2)" },
    { label: "Movilidad", value: "Permiso B · Vehículo propio · Disponibilidad para viajar" },
    { label: "Ubicación", value: "Dos Hermanas, Sevilla" },
    { label: "Contacto", value: "627 53 61 25 · alonsoarriaza03@gmail.com" },
  ],
}

const RETRO_CARDS = [
  { t: '📍 DATOS', txt: 'Alonso Feria Arriaza · Dos Hermanas, Sevilla · 627 53 61 25 · alonsoarriaza03@gmail.com · Permiso B + Vehículo propio · Disponibilidad geográfica inmediata.' },
  { t: '⚔️ EXPERIENCIA', txt: 'Full-Stack Developer · Coanda Technologies. Desarrollo e implantación de soluciones digitales empresariales. Destaca el desarrollo de una plataforma web corporativa en despliegue multi-sede.' },
  { t: '💡 COMPROMISO', txt: 'Enfoque analítico y estructurado en la resolución de problemas complejos. Compromiso riguroso con la calidad del código y las buenas prácticas de arquitectura de software.' },
  { t: '📱 DESARROLLO QR', txt: 'Diseño e implantación de un sistema Full-Stack para gestión de activos y trazabilidad mediante códigos QR. Backend en Java 21 con Spring Boot y frontend en React. Migración automatizada desde ERP ADV hacia MySQL.' },
  { t: '🚀 SITOINFORMATIC', txt: 'Trabajo de Fin de Grado (TFG) con nota 8,4. eCommerce de hardware que integra SitoIA, un motor inteligente en Java 21 para configuración automática de equipos informáticos.' },
  { t: '📜 FORMACIÓN', txt: 'Grado Superior DAW en Ilerna Sevilla. Certificación Cisco CCNA v7. Doble Certificación en IA y Machine Learning. Grado Medio SMR.' },
  { t: '🧙 SOBRE MÍ', txt: 'Desarrollador proactivo orientado a resultados. Madurez profesional consolidada en liderazgo operacional y gestión de equipos.' },
  { t: '📡 CONTACTO & WEB', txt: 'GitHub: github.com/alonsoarriaza · LinkedIn: linkedin.com/in/alonsoferiaarriaza · Email: alonsoarriaza03@gmail.com' },
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
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" /></svg>
  ),
  Server: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
  ),
  Database: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
  ),
  Tools: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
  ),
  Cpu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="15" x2="23" y2="15" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="15" x2="4" y2="15" /></svg>
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
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] max-w-5xl rounded-full border border-white/10 ${scrolled
        ? 'top-4 bg-black/85 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] py-2.5 px-6'
        : 'top-6 bg-black/50 backdrop-blur-md shadow-lg py-3.5 px-8'
        }`}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-purple-400 group-hover:rotate-180 transition-transform duration-700">
            <Icons.Sparkle />
          </span>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            {PROFILE.name.split(' ')[0]}
            <span className="text-purple-400">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-white/80 hover:text-purple-300 transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="px-5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
          >
            Contacto
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white/90 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

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
            href="#contacto"
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
   COMPONENTE: Video Background
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

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.7) 100%)',
          opacity: 0.6 + scrollProgress * 0.4,
        }}
      />
      <div
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-500"
        style={{ opacity: scrollProgress * 0.55 }}
      />
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

      <div className="relative text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-400/30 bg-black/40 backdrop-blur-xl mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          <span className="text-xs sm:text-sm text-white font-medium">Full-Stack Developer</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 animate-fade-in-up leading-tight hero-text-shadow">
          <span className="block text-white mb-2">{PROFILE.name}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-200 to-cyan-300 block text-2xl sm:text-4xl md:text-5xl font-bold">
            {PROFILE.headline}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200 font-light leading-relaxed hero-text-shadow">
          {PROFILE.subtitle}
        </p>

        {/* Visual Tech Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300">
          {PROFILE.techBadges.map((badge, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-black/50 border border-purple-400/30 text-purple-200 backdrop-blur-md shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:border-cyan-400/40 hover:text-white transition-all"
            >
              {badge}
            </span>
          ))}
        </div>

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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
        <div className="w-6 h-10 rounded-full border-2 border-purple-400/30 flex justify-center pt-2 animate-glow-pulse">
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-purple-400/60 to-cyan-400/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   COMPONENTE: Content Wrapper
   ═══════════════════════════════════════════════ */

function ContentWrapper({ children }) {
  return (
    <div className="relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, rgba(10,5,25,0.92) 0%, rgba(15,10,35,0.95) 20%, rgba(8,5,20,0.96) 50%, rgba(12,8,30,0.95) 80%, rgba(10,5,25,0.92) 100%)',
      backdropFilter: 'blur(40px) saturate(1.2)',
    }}>
      <div className="absolute top-[20%] -left-32 w-96 h-96 rounded-full bg-purple-600/8 blur-[100px] animate-orb pointer-events-none" />
      <div className="absolute top-[50%] -right-32 w-80 h-80 rounded-full bg-cyan-500/6 blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '5s' }} />
      <div className="absolute top-[75%] left-1/4 w-72 h-72 rounded-full bg-pink-500/5 blur-[100px] animate-orb pointer-events-none" style={{ animationDelay: '10s' }} />
      <div className="absolute top-0 left-0 right-0 -translate-y-full pointer-events-none">
        <div className="h-56 bg-gradient-to-b from-transparent via-[rgba(10,5,25,0.4)] to-[rgba(10,5,25,0.92)]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   COMPONENTE: Experiencia Profesional
   ═══════════════════════════════════════════════ */

function ExperienceSection() {
  const sectionRef = useAnimateOnScroll()
  const [showPrior, setShowPrior] = useState(false)
  return (
    <section id="experiencia" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-purple-400"><Icons.Briefcase /></span>
          <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">Desempeño</span>
        </div>
        <h2 className="section-title">Experiencia Profesional</h2>
        <p className="section-subtitle">¿Qué hago profesionalmente?</p>
      </div>

      <div className="animate-on-scroll mb-8">
        <div className="glass-card-hover p-6 md:p-8 border border-purple-500/30 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-lg mb-2">
                <svg className="w-3.5 h-3.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                {COANDA_EXPERIENCE.year}
              </div>
              <h3 className="text-2xl font-display font-bold text-white">{COANDA_EXPERIENCE.role}</h3>
              <p className="text-base text-cyan-400 font-medium">{COANDA_EXPERIENCE.company}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {COANDA_EXPERIENCE.blocks.map((block, idx) => (
              <div key={idx} className="bg-black/40 border border-white/10 rounded-2xl p-5 hover:border-purple-400/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                    <h4 className="text-xs font-bold text-purple-300 tracking-wider uppercase">{block.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-4">{block.text}</p>
                </div>
                {block.techs && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {block.techs.map((t) => (
                      <span key={t} className="text-[10px] py-0.5 px-2 rounded-md bg-white/5 border border-white/10 text-cyan-300/80 font-mono">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60 font-light">Explora los proyectos y soluciones desarrollados en la siguiente sección.</p>
            <a href="#proyectos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-105 shrink-0">
              <span>Explora los proyectos y soluciones desarrollados →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="animate-on-scroll text-center">
        <button onClick={() => setShowPrior(!showPrior)} className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2 rounded-full transition-all">
          <span>{showPrior ? 'Ocultar trayectoria profesional previa' : 'Ver trayectoria profesional previa (Retail y Soporte Técnico)'}</span>
          <span className={`transition-transform duration-300 ${showPrior ? 'rotate-180' : ''}`}>▼</span>
        </button>

        {showPrior && (
          <div className="space-y-4 mt-6 text-left transition-all duration-500">
            {PRIOR_EXPERIENCE.map((item, i) => (
              <div key={i} className="glass-card p-5 border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white">{item.role} <span className="text-purple-400 font-normal">· {item.company}</span></h4>
                  <span className="text-xs text-white/40">{item.year}</span>
                </div>
                <ul className="space-y-1 text-xs text-white/60">
                  {item.description.map((desc, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-purple-400/50">▸</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   COMPONENTE: Mis Inventos (Proyectos)
   ═══════════════════════════════════════════════ */

function ProjectsSection() {
  const sectionRef = useAnimateOnScroll()
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <section id="proyectos" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-pink-400"><Icons.Code /></span>
          <span className="text-sm font-medium text-pink-400 uppercase tracking-widest">Soluciones Desarrolladas</span>
        </div>
        <h2 className="section-title">Mis Inventos</h2>
        <p className="section-subtitle">¿Qué he construido?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((project, i) => (
          <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 150}ms` }}>
            <div className={`glass-card p-6 md:p-8 h-full flex flex-col justify-between border bg-gradient-to-b ${project.accentColor} transition-all duration-300 relative group`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-purple-300 uppercase bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md">{project.number}</span>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-purple-300 transition-colors" title="Ver GitHub">
                    <Icons.ExternalLink />
                  </a>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-xs font-semibold text-cyan-300 mb-4">{project.subtitle}</p>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-3">{project.description}</p>
                {project.details && (
                  <p className="text-xs text-white/60 leading-relaxed font-light mb-4 italic border-l-2 border-purple-500/40 pl-3">{project.details}</p>
                )}
                {project.security && (
                  <p className="text-xs text-pink-300/90 leading-relaxed font-light mb-4 bg-pink-500/10 border border-pink-500/20 p-2.5 rounded-lg">{project.security}</p>
                )}
                {project.goal && (
                  <p className="text-xs font-medium text-emerald-300/90 bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg mb-6">{project.goal}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button type="button" onClick={() => setSelectedProject(project)} className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-500/30 text-purple-200 hover:text-white hover:from-purple-600 hover:to-cyan-600 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <Icons.Eye />
                  <span>Ver detalles del invento</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectPreviewModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

/* ═══════════════════════════════════════════════
   COMPONENTE: Lo Que Me Diferencia
   ═══════════════════════════════════════════════ */

function DifferentiatorsSection() {
  const sectionRef = useAnimateOnScroll()
  const renderIcon = (key) => {
    switch (key) {
      case 'Code': return <Icons.Code />
      case 'Tools': return <Icons.Tools />
      case 'Database': return <Icons.Database />
      case 'Sparkle': return <Icons.Sparkle />
      case 'Server': return <Icons.Server />
      default: return <Icons.Sparkle />
    }
  }

  return (
    <section id="diferencia" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Icons.Sparkle /> Capacidades
        </div>
        <h2 className="section-title">Lo que me diferencia</h2>
        <p className="section-subtitle">¿Qué sé hacer especialmente bien?</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {DIFFERENTIATORS.map((item, i) => (
          <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
            <div className={`glass-card-hover p-5 h-full border ${item.border} flex flex-col justify-between relative group`}>
              <div>
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {renderIcon(item.iconKey)}
                </div>
                <h3 className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.textGradient} mb-2 tracking-wide uppercase`}>{item.title}</h3>
                <p className="text-xs text-white/70 font-light leading-relaxed">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   COMPONENTE: Stack / Tecnologías
   ═══════════════════════════════════════════════ */

function TechStackSection() {
  const sectionRef = useAnimateOnScroll()
  return (
    <section id="tecnologias" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-cyan-400"><Icons.Cpu /></span>
          <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">Herramientas</span>
        </div>
        <h2 className="section-title">Stack / Tecnologías</h2>
        <p className="section-subtitle">¿Con qué herramientas trabajo?</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TECH_CATEGORIES.map((cat, i) => (
          <div key={i} className="animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="glass-card-hover p-6 h-full border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tech, j) => (
                    <span key={j} className="tag text-xs py-1.5 px-3 bg-white/5 border border-white/10 text-white/80 hover:border-cyan-400/40 hover:text-white transition-all">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   COMPONENTE: Información Profesional & Educación
   ═══════════════════════════════════════════════ */

function AboutSection() {
  const sectionRef = useAnimateOnScroll()
  return (
    <section id="sobre-mi" ref={sectionRef} className="section-container">
      <div className="animate-on-scroll">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-emerald-400"><Icons.User /></span>
          <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">Perfil</span>
        </div>
        <h2 className="section-title">Información profesional</h2>
        <p className="section-subtitle">Datos profesionales, formación técnica y trayectoria académica.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
        <div className="md:col-span-2 animate-on-scroll">
          <div className="glass-card p-6 md:p-8 space-y-5 h-full">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-sm md:text-base text-white/70 leading-relaxed font-light">{p}</p>
            ))}
          </div>
        </div>
        <div id="datos-interes" className="animate-on-scroll delay-200">
          <div className="glass-card p-6 md:p-8 h-full border border-purple-500/20">
            <h3 className="font-display font-bold text-lg mb-6 text-white">
              Información profesional
            </h3>
            <div className="space-y-4">
              {ABOUT.info.map((item, i) => (
                <div key={i} className="pb-3 border-b border-white/5 last:border-b-0 last:pb-0">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-1">{item.label}</span>
                  {item.label === "Email" ? (
                    <a href={`mailto:${item.value}`} className="text-xs sm:text-sm text-white/80 hover:text-purple-300 hover:underline transition-all">{item.value}</a>
                  ) : item.label === "Teléfono" ? (
                    <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="text-xs sm:text-sm text-white/80 hover:text-cyan-300 hover:underline transition-all">{item.value}</a>
                  ) : (
                    <p className="text-xs sm:text-sm text-white/80 font-light">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Formación / Educación incorporada de forma limpia */}
      <div className="animate-on-scroll">
        <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-cyan-400"><Icons.GraduationCap /></span> Formación Técnica & Certificaciones
        </h3>
        <div className="grid gap-4">
          {EDUCATION.map((item, i) => (
            <div key={i} className="glass-card p-5 border border-white/10 flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-44 shrink-0">
                <span className="inline-block text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-md">
                  {item.year}
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">{item.degree}</h4>
                <p className="text-xs text-purple-400 font-medium mb-2">{item.institution}</p>
                <p className="text-xs text-white/60 font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   COMPONENTE: Call To Action final (Contacto)
   ═══════════════════════════════════════════════ */

function ContactCallToAction() {
  const sectionRef = useAnimateOnScroll()
  return (
    <section id="contacto" ref={sectionRef} className="section-container text-center py-16">
      <div className="animate-on-scroll max-w-3xl mx-auto glass-card p-8 md:p-12 border border-purple-500/30 relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
        <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">Contacto Directo</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 leading-tight">¿Tienes un problema que podamos convertir en una solución?</h2>
        <p className="text-base sm:text-lg text-cyan-300 font-medium mb-8">Hablemos.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:alonsoarriaza03@gmail.com" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105">Enviar Email</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full border border-white/20 bg-black/40 text-white/90 hover:text-white hover:border-cyan-400/40 text-sm font-semibold transition-all duration-300">LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full border border-white/20 bg-black/40 text-white/90 hover:text-white hover:border-purple-400/40 text-sm font-semibold transition-all duration-300">GitHub</a>
        </div>
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
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])
  const handleImageError = () => {
    if (currentSrc !== project?.fallbackImage && project?.fallbackImage) {
      setCurrentSrc(project.fallbackImage)
    } else {
      setImageError(true)
    }
  }
  if (!project) return null
  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }} onClick={onClose}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '56rem', maxHeight: '90vh', overflowY: 'auto', borderRadius: '1.5rem', backgroundColor: '#09090b', border: '1px solid rgba(168,85,247,0.3)', padding: '2rem', boxShadow: '0 0 50px rgba(168,85,247,0.25)', color: 'white' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>{project.number}</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', margin: 0 }}>{project.title}</h3>
          </div>
          <button onClick={onClose} style={{ padding: '0.5rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', border: 'none', cursor: 'pointer', flexShrink: 0 }} aria-label="Cerrar modal"><Icons.Close /></button>
        </div>
        <div style={{ position: 'relative', marginBottom: '1.5rem', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(24,24,27,0.8)', padding: '0.5rem' }}>
          {!imageError ? (
            <img src={currentSrc} alt={`Vista previa de ${project.title}`} onError={handleImageError} style={{ width: '100%', height: 'auto', maxHeight: '60vh', objectFit: 'contain', borderRadius: '0.75rem', display: 'block', margin: '0 auto' }} />
          ) : (
            <div style={{ width: '100%', padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', borderRadius: '1rem', border: '1px dashed rgba(168,85,247,0.3)', backgroundColor: 'rgba(24,24,27,0.6)' }}>
              <div style={{ width: '4rem', height: '4rem', borderRadius: '9999px', backgroundColor: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7', marginBottom: '1rem' }}><Icons.ImageIcon /></div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>{project.title}</h4>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', maxWidth: '28rem', marginBottom: '1rem', lineHeight: 1.6 }}>{project.description}</p>
            </div>
          )}
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '1rem' }}>{project.description}</p>
          {project.details && (
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '1rem', fontStyle: 'italic' }}>{project.details}</p>
          )}
          {project.goal && (
            <div style={{ padding: '1rem', borderRadius: '0.75rem', backgroundColor: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)', fontSize: '0.8rem', color: '#e9d5ff', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ color: '#a855f7', marginTop: '0.125rem' }}>💡</span>
              <span><strong>{project.goal}</strong></span>
            </div>
          )}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.5rem', borderRadius: '9999px', background: 'linear-gradient(to right, #9333ea, #0891b2)', color: 'white', fontWeight: 600, fontSize: '0.75rem', textDecoration: 'none', letterSpacing: '0.05em' }}>
            <span>Ver repositorio en GitHub</span>
            <Icons.ExternalLink />
          </a>
          <button onClick={onClose} style={{ padding: '0.625rem 1.25rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.8)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}>Cerrar vista previa</button>
        </div>
      </div>
    </div>,
    document.body
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
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors duration-300" aria-label="GitHub">
            <Icons.GitHub />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors duration-300" aria-label="LinkedIn">
            <Icons.LinkedIn />
          </a>
        </div>
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
          <ProjectsSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <DifferentiatorsSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <TechStackSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <AboutSection />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr className="section-divider" />
          </div>
          <RetroSection />
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
