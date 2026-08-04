/**
 * Data Layer Centralizada de la App CNE Ecuador (data/cne-data.ts)
 * Proporciona información estructurada sobre:
 * 1. Proceso electoral y requisitos del sufragio.
 * 2. Recintos electorales de Quito con ubicación geográfica.
 * 3. Candidatos presidenciales y sus propuestas de gobierno.
 * 4. Estadísticas del conteo de votos (diagramas de barras).
 */

export interface ElectoralStep {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  requisito: string;
}

export interface PollingPlace {
  id: string;
  nombre: string;
  sector: string; // Norte, Centro, Sur, Valles
  parroquia: string;
  direccion: string;
  referencia: string;
  mesasHombres: number;
  mesasMujeres: number;
  totalElectores: string;
  coordX: number; // Porcentaje X en el mapa interactivo (0-100)
  coordY: number; // Porcentaje Y en el mapa interactivo (0-100)
  lat: number;
  lng: number;
}

export interface Proposal {
  categoria: string;
  icono: string;
  titulo: string;
  descripcion: string;
}

export interface Candidate {
  id: string;
  nombre: string;
  partido: string;
  lista: string;
  binomio: string;
  lema: string;
  colorPrincipal: string;
  colorSecundario: string;
  avatarEmoji: string;
  votos: number;
  porcentaje: number;
  tendencia: 'up' | 'stable' | 'down';
  propuestas: Proposal[];
}

export interface GeneralElectoralStats {
  actasEscrutadas: number; // porcentaje (ej. 98.5)
  totalActas: number;
  actasValidas: number;
  actasNovedad: number;
  participacion: number; // porcentaje (ej. 84.2)
  ausentismo: number;
  votosBlancos: number;
  votosNulos: number;
  totalVotantes: string;
  ultimaActualizacion: string;
}

// ----------------------------------------------------
// DATOS DEL PROCESO ELECTORAL
// ----------------------------------------------------
export const ELECTORAL_STEPS: ElectoralStep[] = [
  {
    id: 1,
    titulo: 'Consulta tu Recinto y Mesa',
    descripcion: 'Verifica con anticipación tu lugar de votación, número de junta receptora del voto (JRV) y si fuiste seleccionado como Miembro de Mesa.',
    icono: '🔍',
    requisito: 'Cédula de Identidad o consulta en la app/web CNE',
  },
  {
    id: 2,
    titulo: 'Presenta tu Cédula o Pasaporte',
    descripcion: 'Acude a tu junta receptora con tu documento de identidad original (físico o digital en la app Ciudadano). Se acepta documento caducado.',
    icono: '🪪',
    requisito: 'Cédula original física o pasaporte ecuatoriano',
  },
  {
    id: 3,
    titulo: 'Sufragio en el Biombo Secreto',
    descripcion: 'Recibe las 3 papeletas (Presidencial, Asambleístas Nacionales, Asambleístas Provinciales). Marca tu voto de forma secreta e individual.',
    icono: '🗳️',
    requisito: 'Voto libre, secreto y directo',
  },
  {
    id: 4,
    titulo: 'Depósito en las Urnas',
    descripcion: 'Dobla cada papeleta según las indicaciones y deposítala en la urna transparente que corresponde a cada dignidad.',
    icono: '📥',
    requisito: 'Verificar color de papeleta vs urna',
  },
  {
    id: 5,
    titulo: 'Firma y Certificado de Votación',
    descripcion: 'Firma en el padrón electoral oficial y retira tu Certificado de Votación con código QR validado por el CNE.',
    icono: '📜',
    requisito: 'Documento habilitante para trámites públicos',
  },
];

// ----------------------------------------------------
// RECINTOS ELECTORALES DE QUITO (CON MAPA)
// ----------------------------------------------------
export const QUITO_POLLING_PLACES: PollingPlace[] = [
  {
    id: '1',
    nombre: 'Universidad Central del Ecuador',
    sector: 'Centro-Norte',
    parroquia: 'Belisario Quevedo',
    direccion: 'Av. América y Av. Universitaria',
    referencia: 'Facultad de Jurisprudencia y Filosofía',
    mesasHombres: 35,
    mesasMujeres: 38,
    totalElectores: '25,400',
    coordX: 48,
    coordY: 42,
    lat: -0.2015,
    lng: -78.5065,
  },
  {
    id: '2',
    nombre: 'Colegio Nacional Benalcázar',
    sector: 'Norte',
    parroquia: 'El Batán / Benalcázar',
    direccion: 'Av. 6 de Diciembre y Portugal',
    referencia: 'Frente al Estadio Olímpico Atahualpa',
    mesasHombres: 28,
    mesasMujeres: 30,
    totalElectores: '19,850',
    coordX: 65,
    coordY: 28,
    lat: -0.1782,
    lng: -78.4801,
  },
  {
    id: '3',
    nombre: 'Universidad San Francisco de Quito (USFQ)',
    sector: 'Valles (Cumbayá)',
    parroquia: 'Cumbayá',
    direccion: 'Diego de Robles y Vía Interoceánica',
    referencia: 'Campus Cumbayá - Paseo San Francisco',
    mesasHombres: 22,
    mesasMujeres: 25,
    totalElectores: '16,200',
    coordX: 82,
    coordY: 38,
    lat: -0.1969,
    lng: -78.4356,
  },
  {
    id: '4',
    nombre: 'Unidad Educativa Quitumbe',
    sector: 'Sur',
    parroquia: 'Quitumbe',
    direccion: 'Av. Condor Ñan y Av. Quitumbe Ñan',
    referencia: 'A 200m de la Estación del Metro Quitumbe',
    mesasHombres: 42,
    mesasMujeres: 45,
    totalElectores: '31,100',
    coordX: 35,
    coordY: 78,
    lat: -0.3012,
    lng: -78.5521,
  },
  {
    id: '5',
    nombre: 'Centro de Convenciones Bicentenario',
    sector: 'Norte',
    parroquia: 'La Concepción',
    direccion: 'Av. Amazonas y Av. de la Prensa',
    referencia: 'Antiguo Aeropuerto Mariscal Sucre',
    mesasHombres: 38,
    mesasMujeres: 40,
    totalElectores: '27,600',
    coordX: 52,
    coordY: 20,
    lat: -0.1554,
    lng: -78.4908,
  },
  {
    id: '6',
    nombre: 'Colegio Técnico Yaruquí',
    sector: 'Valles (Tumbaco/Yaruquí)',
    parroquia: 'Yaruquí',
    direccion: 'Calle Bolívar y Amazonas',
    referencia: 'Plaza Central de Yaruquí',
    mesasHombres: 15,
    mesasMujeres: 16,
    totalElectores: '10,400',
    coordX: 90,
    coordY: 22,
    lat: -0.1620,
    lng: -78.3150,
  },
];

// ----------------------------------------------------
// 3 CANDIDATOS PRESIDENCIALES Y SUS PROPUESTAS
// ----------------------------------------------------
export const CANDIDATES: Candidate[] = [
  {
    id: 'noboa',
    nombre: 'Daniel Noboa Azín',
    partido: 'Acción Democrática Nacional',
    lista: 'Lista 52',
    binomio: 'María José Pinto',
    lema: '¡El Nuevo Ecuador Resuelve!',
    colorPrincipal: '#002B49',
    colorSecundario: '#FFD100',
    avatarEmoji: '👔',
    votos: 4285190,
    porcentaje: 44.8,
    tendencia: 'up',
    propuestas: [
      {
        categoria: 'Seguridad e Inteligencia',
        icono: '🛡️',
        titulo: 'Plan Fénix & Modernización',
        descripcion: 'Fortalecimiento de las Fuerzas Armadas y Policía Nacional con tecnología de inteligencia de datos, vigilancia satelital de fronteras y control integral militar en los puertos estratégicos.',
      },
      {
        categoria: 'Empleo e Inversión',
        icono: '💼',
        titulo: 'Ley de Competitividad Juvenil',
        descripcion: 'Incentivos fiscales y reducción del ISR a las empresas que generen primer empleo para jóvenes universitarios e invoquen inversión privada internacional.',
      },
      {
        categoria: 'Infraestructura Energética',
        icono: '⚡',
        titulo: 'Diversificación de Matriz Limpia',
        descripcion: 'Transición inmediata hacia plantas geotérmicas y solares para erradicar el déficit hidroeléctrico y garantizar soberanía energética sostenible.',
      },
    ],
  },
  {
    id: 'gonzalez',
    nombre: 'Luisa González Alcívar',
    partido: 'Revolución Ciudadana',
    lista: 'Lista 5',
    binomio: 'Diego Borja',
    lema: '¡Con la Fuerza del Pueblo!',
    colorPrincipal: '#00A3E0',
    colorSecundario: '#003366',
    avatarEmoji: '👩‍💼',
    votos: 3748210,
    porcentaje: 39.2,
    tendencia: 'up',
    propuestas: [
      {
        categoria: 'Salud y Medicinas',
        icono: '🏥',
        titulo: 'Reabastecimiento Médico Total',
        descripcion: 'Asignación presupuestaria prioritaria a la Red Pública de Salud, compras públicas transparentes de insumos y apertura de centros de especialidades 24/7.',
      },
      {
        categoria: 'Educación Gratuita',
        icono: '📚',
        titulo: 'Acceso Universal a Universidades',
        descripcion: 'Eliminación de trabas de ingreso universitario, ampliación masiva de becas de estudio internacionales y fortalecimiento de escuelas públicas rurales.',
      },
      {
        categoria: 'Agro y Reactivación',
        icono: '🌾',
        titulo: 'Crédito Productivo BanEcuador',
        descripcion: 'Líneas de crédito a 1% de interés a 30 años plazo para pequeños agricultores, pescadores artesanales y microemprendedores del país.',
      },
    ],
  },
  {
    id: 'topic',
    nombre: 'Jan Topic Feraud',
    partido: 'Alianza SUMA',
    lista: 'Lista 23',
    binomio: 'Mishelle Calvache',
    lema: '¡Seguridad y Ejecución Garantizada!',
    colorPrincipal: '#FF6B00',
    colorSecundario: '#1E293B',
    avatarEmoji: '👨‍✈️',
    votos: 1530600,
    porcentaje: 16.0,
    tendencia: 'stable',
    propuestas: [
      {
        categoria: 'Seguridad Tecnológica',
        icono: '🚓',
        titulo: 'Cero Tolerancia al Crimen',
        descripcion: 'Implementación de scanners biométricos de alta definición en todos los puntos fronterizos, inhibidores de señal en cárceles y equipamiento táctico avanzado.',
      },
      {
        categoria: 'Estado 100% Digital',
        icono: '💻',
        titulo: 'Cero Burocracia & Transparencia',
        descripcion: 'Digitalización total de trámites públicos bajo tecnología blockchain para erradicar cualquier cobro o sobreprecio en la contratación del Estado.',
      },
      {
        categoria: 'Innovación y Startups',
        icono: '🚀',
        titulo: 'Fondo Semilla de Innovación',
        descripcion: 'Creación de polos tecnológicos de desarrollo de software e inteligencia artificial en Quito y Guayaquil con exención impositiva de 10 años.',
      },
    ],
  },
];

// ----------------------------------------------------
// ESTADÍSTICAS GENERALES DE CONTEO ELECTORAL CNE
// ----------------------------------------------------
export const GENERAL_STATS: GeneralElectoralStats = {
  actasEscrutadas: 98.4,
  totalActas: 41250,
  actasValidas: 40591,
  actasNovedad: 659,
  participacion: 83.7,
  ausentismo: 16.3,
  votosBlancos: 312450,
  votosNulos: 685120,
  totalVotantes: '13,736,314',
  ultimaActualizacion: 'Hoy a las 19:10 (Corte Oficial CNE)',
};
