/**
 * Single Source of Truth & Backward Compatibility (data/team-info.ts)
 * Re-exporta los datos oficiales del CNE Ecuador para toda la aplicación.
 */

export * from './cne-data';

export const TEAM_PROFILE = {
  name: 'Consejo Nacional Electoral del Ecuador',
  nickname: 'CNE Ecuador 🇪🇨',
  slogan: 'Garantía de la Democracia y Transparencia',
};

export const ARGENTINA_DATA = {
  name: 'CNE Ecuador',
  achievement: 'Elecciones 2026',
  coach: 'Consejo Electoral',
  captain: 'Escrutinio General',
  finalScore: '98.4%',
  flagDescription: 'Portal Oficial Electoral del Ecuador',
};

// Mapeo retrocompatible para la plantilla de candidatos
export const SPAIN_PLAYERS = [
  { id: 'noboa', nombre: 'Daniel Noboa Azín', dorsal: 52, posicion: 'Acción Democrática Nacional', club: '¡El Nuevo Ecuador Resuelve!' },
  { id: 'gonzalez', nombre: 'Luisa González Alcívar', dorsal: 5, posicion: 'Revolución Ciudadana', club: '¡Con la Fuerza del Pueblo!' },
  { id: 'topic', nombre: 'Jan Topic Feraud', dorsal: 23, posicion: 'Alianza SUMA', club: '¡Seguridad y Ejecución Garantizada!' },
];
