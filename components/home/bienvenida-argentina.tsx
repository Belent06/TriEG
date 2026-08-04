import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Componente WelcomeCneCard
 */
export const WelcomeArgentinaCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>Portal Electoral CNE Ecuador 🇪🇨</Text>
        <Text style={styles.welcomeBody}>
          • Ubica tu recinto de votación en Quito con mapa interactivo.{'\n'}
          • Revisa la guía del proceso electoral y horarios.{'\n'}
          • Conoce los 3 candidatos a la Presidencia y sus propuestas.{'\n'}
          • Consulta el diagrama de barras con el avance del escrutinio.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    borderLeftWidth: 6,
    borderLeftColor: '#FFD100',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 8,
  },
  welcomeBody: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
  },
});
