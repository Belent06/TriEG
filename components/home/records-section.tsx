import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { TEAM_RECORDS, TEAM_PROFILE } from '@/data/team-info';

const { width } = Dimensions.get('window');

/**
 * Componente RecordsSection
 * Despliega los hitos históricos, récords individuales de la Selección Ecuatoriana
 * y la ficha técnica institucional del equipo.
 */
export const RecordsSection: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      {/* Encabezado de la sección */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Récords y Leyendas</Text>
        <Text style={styles.sectionSubtitle}>Hitos históricos de la Selección Ecuatoriana</Text>
      </View>

      {/* Grilla de Récords Emblemáticos */}
      <View style={styles.recordsGrid}>
        {TEAM_RECORDS.map((rec, idx) => (
          <View key={idx} style={styles.recordCard}>
            <View style={styles.recordIconCircle}>
              <Text style={styles.recordIconText}>⭐</Text>
            </View>
            <Text style={styles.recordLabel}>{rec.label}</Text>
            <Text style={styles.recordValue}>{rec.value}</Text>
          </View>
        ))}
      </View>

      {/* Tarjeta de Ficha Técnica Institucional */}
      <View style={styles.generalInfoBox}>
        <Text style={styles.infoBoxTitle}>Ficha Técnica de La Tri</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoKey}>Fundación:</Text>
          <Text style={styles.infoVal}>{TEAM_PROFILE.foundationYear}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoKey}>Estadio Principal:</Text>
          <Text style={styles.infoVal}>{TEAM_PROFILE.mainStadium}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoKey}>Capitán Actual:</Text>
          <Text style={styles.infoVal}>Enner Valencia</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionHeader: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#002B49',
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },
  recordsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  recordCard: {
    width: (width - 44) / 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'flex-start',
  },
  recordIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  recordIconText: {
    fontSize: 16,
  },
  recordLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  recordValue: {
    fontSize: 13,
    color: '#002B49',
    fontWeight: '800',
    marginTop: 4,
  },
  generalInfoBox: {
    backgroundColor: '#002B49',
    borderRadius: 16,
    padding: 18,
    marginTop: 16,
  },
  infoBoxTitle: {
    color: '#FFD100',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  infoKey: {
    color: '#94A3B8',
    fontSize: 13,
  },
  infoVal: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
