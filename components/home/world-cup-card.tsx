import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WorldCupData } from '@/data/team-info';

interface WorldCupCardProps {
  cup: WorldCupData;
  onPress: (cup: WorldCupData) => void;
}

/**
 * Componente WorldCupCard
 * Tarjeta que despliega la información resumida de la participación de Ecuador
 * en una edición específica de la Copa Mundial de la FIFA.
 */
export const WorldCupCard: React.FC<WorldCupCardProps> = ({ cup, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.cupCard}
      activeOpacity={0.85}
      onPress={() => onPress(cup)}>
      {/* Insignia del año y sede */}
      <View style={styles.cupBadgeYear}>
        <Text style={styles.cupYearText}>{cup.year}</Text>
        <Text style={styles.cupHostText}>{cup.host}</Text>
      </View>

      {/* Detalles del resultado e hitos */}
      <View style={styles.cupDetails}>
        <View style={styles.resultBadge}>
          <Text style={styles.resultBadgeText}>{cup.result}</Text>
        </View>

        <Text style={styles.cupMilestone}>{cup.milestone}</Text>
        <Text style={styles.cupHighlight} numberOfLines={2}>
          {cup.highlight}
        </Text>

        {/* Pie de tarjeta con DT y enlace de más información */}
        <View style={styles.cardFooterRow}>
          <Text style={styles.cupCoach}>DT: {cup.coach}</Text>
          <Text style={styles.seeMoreLink}>Ver partidos ➔</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cupCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#FFD100',
  },
  cupBadgeYear: {
    backgroundColor: '#002B49',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    width: 80,
  },
  cupYearText: {
    color: '#FFD100',
    fontSize: 20,
    fontWeight: '900',
  },
  cupHostText: {
    color: '#FFFFFF',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '600',
  },
  cupDetails: {
    flex: 1,
  },
  resultBadge: {
    backgroundColor: '#FEF3C7',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 6,
  },
  resultBadgeText: {
    color: '#D97706',
    fontSize: 11,
    fontWeight: '800',
  },
  cupMilestone: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
  },
  cupHighlight: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
    lineHeight: 16,
  },
  cardFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  cupCoach: {
    fontSize: 11,
    color: '#475569',
    fontWeight: '600',
  },
  seeMoreLink: {
    fontSize: 12,
    color: '#002B49',
    fontWeight: '800',
  },
});
