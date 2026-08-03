/**
 * Archivo de Datos Centralizados (team-info.ts)
 * Funciona como la Capa de Datos (Data Layer / Single Source of Truth) del proyecto.
 * Almacena las interfaces TypeScript y la información estructurada de las selecciones
 * utilizadas en el Splash Screen, la pantalla Home (Ecuador y Argentina) y la pantalla de España.
 */

// Interface para la Selección Ecuatoriana
export interface TeamProfile {
  name: string;
  nickname: string;
  federation: string;
  confederation: string;
  foundationYear: number;
  currentCoach: string;
  fifaRanking: number;
  mainStadium: string;
  colors: string[];
  slogan: string;
}

// Interface para la Selección Argentina
export interface ArgentinaData {
  name: string;
  achievement: string;
  coach: string;
  captain: string;
  finalScore: string;
  flagDescription: string;
}

// Interface para los Jugadores de España
export interface PlayerData {
  id: string;
  nombre: string;
  dorsal: number;
  posicion: string;
  club: string;
}

// Datos de la Selección Ecuatoriana (Usados en Splash Screen y Home)
export const TEAM_PROFILE: TeamProfile = {
  name: 'Selección Ecuatoriana de Fútbol',
  nickname: 'La Tri 🇪🇨',
  federation: 'FEF (Federación Ecuatoriana de Fútbol)',
  confederation: 'CONMEBOL',
  foundationYear: 1925,
  currentCoach: 'Sebastián Beccacece',
  fifaRanking: 27,
  mainStadium: 'Estadio Rodrigo Paz Delgado (Quito)',
  colors: ['#FFD100', '#002B49', '#CE1126'],
  slogan: 'La Sele de Todos',
};

// Datos de la Selección Argentina (Usados en la pantalla Home index.tsx)
export const ARGENTINA_DATA: ArgentinaData = {
  name: 'Selección Argentina',
  achievement: '🥈 Subcampeón Mundial',
  coach: 'Lionel Scaloni',
  captain: 'Lionel Messi',
  finalScore: 'Final 1 - 2',
  flagDescription: '"La Albiceleste": Simboliza el cielo azul, las nubes blancas y el Sol de Mayo en el centro.',
};

// Plantilla de Jugadores de España (Usados en la pantalla espana.tsx)
export const SPAIN_PLAYERS: PlayerData[] = [
  { id: '1', nombre: 'Lamine Yamal', dorsal: 19, posicion: 'Extremo Derecho', club: 'FC Barcelona' },
  { id: '2', nombre: 'Rodri Hernández', dorsal: 16, posicion: 'Centrocampista Pivot', club: 'Manchester City' },
  { id: '3', nombre: 'Dani Olmo', dorsal: 10, posicion: 'Mediocampista Ofensivo', club: 'FC Barcelona' },
  { id: '4', nombre: 'Nico Williams', dorsal: 17, posicion: 'Extremo Izquierdo', club: 'Athletic Club' },
  { id: '5', nombre: 'Pedri González', dorsal: 20, posicion: 'Centrocampista', club: 'FC Barcelona' },
  { id: '6', nombre: 'Dani Carvajal', dorsal: 2, posicion: 'Lateral Derecho', club: 'Real Madrid' },
  { id: '7', nombre: 'Marc Cucurella', dorsal: 24, posicion: 'Lateral Izquierdo', club: 'Chelsea FC' },
  { id: '8', nombre: 'Unai Simón', dorsal: 23, posicion: 'Guardameta', club: 'Athletic Club' },
];
