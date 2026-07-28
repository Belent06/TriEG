export interface WorldCupData {
  year: number;
  host: string;
  coach: string;
  result: string;
  milestone: string;
  highlight: string;
  topScorer: string;
  matches: string[];
}

export interface PlayerData {
  id: string;
  name: string;
  position: string;
  club: string;
  number: number;
  image?: string;
  isCaptain?: boolean;
}

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

export const WORLD_CUPS: WorldCupData[] = [
  {
    year: 2002,
    host: 'Corea del Sur / Japón',
    coach: 'Hernán Darío "Bolillo" Gómez',
    result: 'Fase de Grupos',
    milestone: 'Primera clasificación histórica a un Mundial',
    highlight: 'Primera victoria en un Mundial (1-0 vs Croacia) y primer gol mundialista de Agustín Delgado.',
    topScorer: 'Agustín Delgado (1 gol), Edison Méndez (1 gol)',
    matches: ['Italia 2 - 0 Ecuador', 'México 2 - 1 Ecuador', 'Ecuador 1 - 0 Croacia'],
  },
  {
    year: 2006,
    host: 'Alemania',
    coach: 'Luis Fernando Suárez',
    result: 'Octavos de Final',
    milestone: 'Mejor participación histórica en Copas del Mundo',
    highlight: 'Clasificación histórica a octavos tras vencer 2-0 a Polonia y 3-0 a Costa Rica.',
    topScorer: 'Agustín Delgado (2 goles), Carlos Tenorio (2 goles)',
    matches: ['Polonia 0 - 2 Ecuador', 'Ecuador 3 - 0 Costa Rica', 'Ecuador 0 - 3 Alemania', 'Inglaterra 1 - 0 Ecuador'],
  },
  {
    year: 2014,
    host: 'Brasil',
    coach: 'Reinaldo Rueda',
    result: 'Fase de Grupos',
    milestone: 'Tercer Mundial de La Tri',
    highlight: 'Doble de Enner Valencia vs Honduras y empate heroico 0-0 ante la campeona Francia en el Maracaná.',
    topScorer: 'Enner Valencia (3 goles)',
    matches: ['Suiza 2 - 1 Ecuador', 'Honduras 1 - 2 Ecuador', 'Ecuador 0 - 0 Francia'],
  },
  {
    year: 2022,
    host: 'Catar',
    coach: 'Gustavo Alfaro',
    result: 'Fase de Grupos',
    milestone: 'Triunfo histórico en el partido inaugural',
    highlight: 'Ecuador venció 2-0 al anfitrión Catar en la inauguración y empató 1-1 con Países Bajos.',
    topScorer: 'Enner Valencia (3 goles)',
    matches: ['Catar 0 - 2 Ecuador', 'Países Bajos 1 - 1 Ecuador', 'Ecuador 1 - 2 Senegal'],
  },
  {
    year: 2026,
    host: 'Canadá / EE.UU. / México',
    coach: 'Sebastián Beccacece',
    result: 'En Clasificación / Próximo Reto',
    milestone: 'Consolidación de la Generación Dorada',
    highlight: 'Selección joven y competitiva destacando en las ligas más exigentes del mundo.',
    topScorer: 'Por definir',
    matches: ['Rumbo a la 5ta Copa del Mundo'],
  },
];

export const TEAM_RECORDS = [
  { label: 'Máximo Goleador Histórico', value: 'Enner Valencia (44 goles)', icon: 'trophy' },
  { label: 'Más Partidos Jugados', value: 'Iván Hurtado (168 partidos)', icon: 'star' },
  { label: 'Goleador en Mundiales', value: 'Enner Valencia (6 goles)', icon: 'flame' },
  { label: 'Primer Gol Mundialista', value: 'Agustín Delgado (2002 vs México)', icon: 'football' },
];

export const FEATURED_PLAYERS: PlayerData[] = [
  { id: '1', name: 'Enner Valencia', position: 'Delantero / Capitán', club: 'SC Internacional', number: 13, isCaptain: true },
  { id: '2', name: 'Moisés Caicedo', position: 'Centrocampista', club: 'Chelsea FC', number: 23 },
  { id: '3', name: 'Piero Hincapié', position: 'Defensa Central', club: 'Bayer Leverkusen', number: 3 },
  { id: '4', name: 'Willian Pacho', position: 'Defensa Central', club: 'Paris Saint-Germain', number: 4 },
  { id: '5', name: 'Kendry Páez', position: 'Mediocampista Ofensivo', club: 'Independiente del Valle / Chelsea', number: 10 },
];
