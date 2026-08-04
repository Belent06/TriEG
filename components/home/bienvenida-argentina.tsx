import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
* BienvenidaArgentina
 */
export const WelcomeArgentinaCard: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* SECCIÓN 1: BIENVENIDA */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>Resumen del Proceso Electoral</Text>
        <Text style={styles.welcomeBody}>
          Dónde votar en Quito?
          Conulta de Resultados
          Estadísticas electorales
          Candidatos y propuestas
        </Text>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#002B49',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 6,
  },
  welcomeBody: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  argentinaCard: {
    backgroundColor: '#74ACDF',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#5296D5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  argentinaHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  flagEmoji: {
    fontSize: 42,
    marginRight: 14,
  },
  argentinaTitleBox: {
    flex: 1,
  },
  argentinaTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#002B49',
  },
  subcampeonBadge: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 4,
  },
  subcampeonText: {
    color: '#002B49',
    fontSize: 12,
    fontWeight: '800',
  },
  argentinaDetailsGrid: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 43, 73, 0.2)',
    gap: 8,
  },
  argDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  argDetailKey: {
    fontSize: 13,
    color: '#002B49',
    fontWeight: '700',
  },
  argDetailVal: {
    fontSize: 14,
    color: '#002B49',
    fontWeight: '900',
  },
  finalScoreVal: {
    fontSize: 15,
    color: '#CE1126',
    fontWeight: '900',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
});
