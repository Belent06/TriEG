import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Bienvenida Argentina
 */
export const WelcomeArgentinaCard: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Tarjeta de Bienvenida */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>👋 ¡Bienvenido a MiTri!</Text>
        <Text style={styles.welcomeBody}>
          Explora la información de las selecciones de fútbol, mundiales, récords y figuras destacadas.
        </Text>
      </View>

      {/* Tarjeta de Argentina (Subcampeón Mundial) */}
      <View style={styles.argentinaCard}>
        <View style={styles.argentinaHeaderRow}>
          <Text style={styles.flagEmoji}>🇦🇷</Text>
          <View style={styles.argentinaTitleBox}>
            <Text style={styles.argentinaTitle}>Selección Argentina</Text>
            <View style={styles.subcampeonBadge}>
              <Text style={styles.subcampeonText}>🥈 Subcampeón Mundial (1930, 1990, 2014)</Text>
            </View>
          </View>
        </View>

        <Text style={styles.argentinaDesc}>
          Reconocida históricamente por sus grandes hazañas mundialistas (Campeón 1978, 1986, 2022) y sus 3 subcampeonatos del mundo.
        </Text>

        <View style={styles.argentinaDetailsGrid}>
          <View style={styles.argDetailItem}>
            <Text style={styles.argDetailKey}>Director Técnico:</Text>
            <Text style={styles.argDetailVal}>Lionel Scaloni</Text>
          </View>

          <View style={styles.argDetailItem}>
            <Text style={styles.argDetailKey}>Capitán:</Text>
            <Text style={styles.argDetailVal}>Lionel Messi</Text>
          </View>

          <View style={styles.argDetailItem}>
            <Text style={styles.argDetailKey}>Confederación:</Text>
            <Text style={styles.argDetailVal}>CONMEBOL</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 14,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#002B49',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#002B49',
    marginBottom: 4,
  },
  welcomeBody: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
  argentinaCard: {
    backgroundColor: '#74ACDF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#5296D5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  argentinaHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  flagEmoji: {
    fontSize: 34,
    marginRight: 10,
  },
  argentinaTitleBox: {
    flex: 1,
  },
  argentinaTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
  },
  subcampeonBadge: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: 3,
  },
  subcampeonText: {
    color: '#002B49',
    fontSize: 11,
    fontWeight: '800',
  },
  argentinaDesc: {
    fontSize: 12,
    color: '#002B49',
    marginTop: 6,
    lineHeight: 16,
    fontWeight: '500',
  },
  argentinaDetailsGrid: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 43, 73, 0.15)',
    gap: 4,
  },
  argDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  argDetailKey: {
    fontSize: 12,
    color: '#002B49',
    fontWeight: '600',
  },
  argDetailVal: {
    fontSize: 12,
    color: '#002B49',
    fontWeight: '800',
  },
});
