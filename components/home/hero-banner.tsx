import { TEAM_PROFILE } from '@/data/team-info';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

/**
 * Componente HeroBanner
 * Muestra el encabezado principal de la aplicación con la marca MiTri,
 * el escudo oficial de la Selección Ecuatoriana de Fútbol y estadísticas rápidas.
 */
export const HeroBanner: React.FC = () => {
  return (
    <View style={styles.heroBanner}>
      {/* Barra superior decorativa color amarillo tricolor */}
      <View style={styles.yellowBarTop} />

      {/* Contenido principal del encabezado */}
      <View style={styles.heroContent}>
        {/* Escudo oficial envuelto en contenedor circular */}
        <View style={styles.badgeWrapper}>
          <Image
            source={require('@/assets/images/Escudo_Nacional_de_España.png')}
            style={styles.heroLogo}
            resizeMode="contain"
          />
        </View>

        {/* Textos informativos de la marca y selección */}
        <View style={styles.heroTextContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.heroTitle}>MiTri</Text>
            <View style={styles.countryTag}>
              <Text style={styles.countryTagText}>🇪🇨 ECUADOR</Text>
            </View>
          </View>
          <Text style={styles.heroSubtitle}>{TEAM_PROFILE.name}</Text>
          <Text style={styles.heroSlogan}>"{TEAM_PROFILE.slogan}"</Text>
        </View>
      </View>

      {/* Ficha rápida con estadísticas globales de La Tri */}
      <View style={styles.quickStatsRow}>
        <View style={styles.statChip}>
          <Text style={styles.chipLabel}>Ranking FIFA</Text>
          <Text style={styles.chipValue}>#{TEAM_PROFILE.fifaRanking}</Text>
        </View>
        <View style={styles.dividerVertical} />
        <View style={styles.statChip}>
          <Text style={styles.chipLabel}>Director Técnico</Text>
          <Text style={styles.chipValue}>{TEAM_PROFILE.currentCoach}</Text>
        </View>
        <View style={styles.dividerVertical} />
        <View style={styles.statChip}>
          <Text style={styles.chipLabel}>Confederación</Text>
          <Text style={styles.chipValue}>{TEAM_PROFILE.confederation}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroBanner: {
    backgroundColor: '#002B49',
    paddingBottom: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  yellowBarTop: {
    height: 6,
    backgroundColor: '#FFD100',
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    gap: 16,
  },
  badgeWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFFFFF',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  heroLogo: {
    width: '100%',
    height: '100%',
  },
  heroTextContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFD100',
    letterSpacing: 1,
  },
  countryTag: {
    backgroundColor: '#CE1126',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  countryTagText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  heroSubtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  heroSlogan: {
    color: '#94A3B8',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 2,
  },
  quickStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginHorizontal: 16,
    marginTop: 18,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255, 209, 0, 0.2)',
  },
  statChip: {
    alignItems: 'center',
  },
  chipLabel: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '500',
  },
  chipValue: {
    color: '#FFD100',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 2,
  },
  dividerVertical: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
});
