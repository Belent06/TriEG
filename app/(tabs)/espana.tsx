import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/**
 * Pantalla de España
 */
export default function EspanaScreen() {
  const jugadores = [
    { id: '1', nombre: 'Lamine Yamal', dorsal: 19, posicion: 'Extremo Derecho', club: 'FC Barcelona' },
    { id: '2', nombre: 'Rodri Hernández', dorsal: 16, posicion: 'Centrocampista Pivot', club: 'Manchester City' },
    { id: '3', nombre: 'Dani Olmo', dorsal: 10, posicion: 'Mediocampista Ofensivo', club: 'FC Barcelona' },
    { id: '4', nombre: 'Nico Williams', dorsal: 17, posicion: 'Extremo Izquierdo', club: 'Athletic Club' },
    { id: '5', nombre: 'Pedri González', dorsal: 20, posicion: 'Centrocampista', club: 'FC Barcelona' },
    { id: '6', nombre: 'Dani Carvajal', dorsal: 2, posicion: 'Lateral Derecho', club: 'Real Madrid' },
    { id: '7', nombre: 'Marc Cucurella', dorsal: 24, posicion: 'Lateral Izquierdo', club: 'Chelsea FC' },
    { id: '8', nombre: 'Unai Simón', dorsal: 23, posicion: 'Guardameta', club: 'Athletic Club' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#AA1515" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* ==========================================
            SECCIÓN 1: LA BANDERA Y ESCUDO DE ESPAÑA
           ========================================== */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeaderTitle}>🇪🇸 Bandera y Símbolos de España</Text>

          <View style={styles.flagImageWrapper}>
            <Image
              source={require('@/assets/images/Escudo_Nacional_de_España.png')}
              style={styles.flagImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.flagColorsContainer}>
            <View style={styles.colorStripRed}>
              <Text style={styles.stripText}>ROJO</Text>
            </View>
            <View style={styles.colorStripYellow}>
              <Text style={styles.stripTextDark}>AMARILLO (ORO)</Text>
            </View>
            <View style={styles.colorStripRed}>
              <Text style={styles.stripText}>ROJO</Text>
            </View>
          </View>
        </View>

        {/* ==========================================
            SECCIÓN 2: DIRECTOR TÉCNICO
           ========================================== */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeaderTitle}>📋 Director Técnico</Text>

          <View style={styles.coachCardInner}>
            <View style={styles.coachAvatarCircle}>
              <Text style={styles.coachAvatarEmoji}>👔</Text>
            </View>
            <View style={styles.coachInfo}>
              <Text style={styles.coachName}>Luis de la Fuente</Text>
              <Text style={styles.coachRole}>Entrenador de la Selección Española</Text>
              <View style={styles.coachBadge}>
                <Text style={styles.coachBadgeText}>🏆 Campeón Eurocopa 2024</Text>
              </View>
            </View>
          </View>

          <View style={styles.coachDetailsBox}>
            <Text style={styles.coachDetailRow}>• <Text style={styles.boldText}>Nacionalidad:</Text> Española (Haro, La Rioja)</Text>
            <Text style={styles.coachDetailRow}>• <Text style={styles.boldText}>Logros destacados:</Text> UEFA Nations League 2023, Eurocopa Alemania 2024, Medalla de Plata Olímpica Tokio 2020.</Text>
            <Text style={styles.coachDetailRow}>• <Text style={styles.boldText}>Estilo táctico:</Text> Fútbol de posesión vertical, presión alta y combinaciones dinámicas.</Text>
          </View>
        </View>

        {/* ==========================================
            SECCIÓN 3: JUGADORES DE LA SELECCIÓN
           ========================================== */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionHeaderTitle}>⚽ Jugadores de la Selección</Text>
          <Text style={styles.sectionSubTitle}>Plantilla oficial de estrellas de La Roja</Text>

          <View style={styles.playersList}>
            {jugadores.map((player) => (
              <View key={player.id} style={styles.playerCardItem}>
                <View style={styles.dorsalCircle}>
                  <Text style={styles.dorsalNumber}>#{player.dorsal}</Text>
                </View>
                <View style={styles.playerCardContent}>
                  <Text style={styles.playerCardName}>{player.nombre}</Text>
                  <Text style={styles.playerCardPos}>{player.posicion}</Text>
                  <Text style={styles.playerCardClub}>Club: {player.club}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Pie de Página */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>¡Viva España! 🇪🇸⚽</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#AA1515',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionHeaderTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#AA1515',
    marginBottom: 12,
  },
  sectionSubTitle: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 14,
  },
  flagImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  flagImage: {
    width: 120,
    height: 120,
  },
  flagColorsContainer: {
    marginVertical: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  colorStripRed: {
    backgroundColor: '#AA1515',
    paddingVertical: 6,
    alignItems: 'center',
  },
  colorStripYellow: {
    backgroundColor: '#F1BF00',
    paddingVertical: 10,
    alignItems: 'center',
  },
  stripText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 11,
    letterSpacing: 1,
  },
  stripTextDark: {
    color: '#AA1515',
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 1,
  },
  flagDescription: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 8,
  },
  coachCardInner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8F8',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  coachAvatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#AA1515',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  coachAvatarEmoji: {
    fontSize: 24,
  },
  coachInfo: {
    flex: 1,
  },
  coachName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0F172A',
  },
  coachRole: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  coachBadge: {
    backgroundColor: '#FEF3C7',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: 6,
  },
  coachBadgeText: {
    color: '#D97706',
    fontSize: 11,
    fontWeight: '800',
  },
  coachDetailsBox: {
    marginTop: 14,
    gap: 6,
  },
  coachDetailRow: {
    fontSize: 13,
    color: '#334155',
    lineHeight: 18,
  },
  boldText: {
    fontWeight: '800',
    color: '#0F172A',
  },
  playersList: {
    gap: 10,
  },
  playerCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  dorsalCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1BF00',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  dorsalNumber: {
    color: '#AA1515',
    fontSize: 15,
    fontWeight: '900',
  },
  playerCardContent: {
    flex: 1,
  },
  playerCardName: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  playerCardPos: {
    fontSize: 12,
    color: '#AA1515',
    fontWeight: '700',
    marginTop: 2,
  },
  playerCardClub: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },
  footer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#AA1515',
  },
});
