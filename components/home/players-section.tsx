import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FEATURED_PLAYERS } from '@/data/team-info';

/**
 * Componente PlayersSection
 * Muestra el listado de los jugadores referentes de la Selección Ecuatoriana de Fútbol.
 */
export const PlayersSection: React.FC = () => {
  return (
    <View style={styles.sectionContainer}>
      {/* Encabezado de la sección de plantilla */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Jugadores Referentes</Text>
        <Text style={styles.sectionSubtitle}>Estrellas ecuatorianas en el mundo</Text>
      </View>

      {/* Lista de Tarjetas de Jugadores */}
      {FEATURED_PLAYERS.map((player) => (
        <View key={player.id} style={styles.playerCard}>
          {/* Badge con el dorsal del jugador */}
          <View style={styles.playerNumberBadge}>
            <Text style={styles.playerNumberText}>#{player.number}</Text>
          </View>

          {/* Información del jugador */}
          <View style={styles.playerInfo}>
            <View style={styles.playerNameRow}>
              <Text style={styles.playerName}>{player.name}</Text>
              {player.isCaptain && (
                <View style={styles.captainTag}>
                  <Text style={styles.captainTagText}>CAPITÁN</Text>
                </View>
              )}
            </View>

            <Text style={styles.playerPosition}>{player.position}</Text>
            <Text style={styles.playerClub}>Club: {player.club}</Text>
          </View>
        </View>
      ))}
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
  playerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  playerNumberBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFD100',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  playerNumberText: {
    color: '#002B49',
    fontSize: 16,
    fontWeight: '900',
  },
  playerInfo: {
    flex: 1,
  },
  playerNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
  },
  captainTag: {
    backgroundColor: '#CE1126',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  captainTagText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
  },
  playerPosition: {
    fontSize: 13,
    color: '#002B49',
    fontWeight: '600',
    marginTop: 2,
  },
  playerClub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
});
