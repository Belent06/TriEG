import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CANDIDATES, GENERAL_STATS } from '@/data/cne-data';

/**
 * Pantalla de Estadísticas (ExploreScreen - app/(tabs)/explore.tsx)
 * Muestra el conteo de votos oficial en tiempo real con un DIAGRAMA DE BARRAS HORIZONTAL
 * para identificar quién va ganando las elecciones.
 */

// Datos simulados por región para interactividad del filtro
const REGION_STATS: Record<string, { candidates: { id: string; porcentaje: number; votos: number }[] }> = {
  Nacional: {
    candidates: [
      { id: 'noboa', porcentaje: 44.8, votos: 4285190 },
      { id: 'gonzalez', porcentaje: 39.2, votos: 3748210 },
      { id: 'topic', porcentaje: 16.0, votos: 1530600 },
    ],
  },
  'Pichincha (Quito)': {
    candidates: [
      { id: 'noboa', porcentaje: 51.4, votos: 980400 },
      { id: 'gonzalez', porcentaje: 32.1, votos: 612000 },
      { id: 'topic', porcentaje: 16.5, votos: 314700 },
    ],
  },
  Guayas: {
    candidates: [
      { id: 'gonzalez', porcentaje: 47.8, votos: 1120000 },
      { id: 'noboa', porcentaje: 38.5, votos: 902000 },
      { id: 'topic', porcentaje: 13.7, votos: 321000 },
    ],
  },
  Exterior: {
    candidates: [
      { id: 'gonzalez', porcentaje: 45.1, votos: 145000 },
      { id: 'noboa', porcentaje: 42.3, votos: 136000 },
      { id: 'topic', porcentaje: 12.6, votos: 40500 },
    ],
  },
};

export default function ExploreScreen() {
  const [selectedRegion, setSelectedRegion] = useState<string>('Nacional');

  const currentRegionData = REGION_STATS[selectedRegion] || REGION_STATS['Nacional'];

  // Ordenar candidatos por porcentaje descendente (de mayor a menor) para determinar quién va ganando
  const sortedCandidates = CANDIDATES.map((cand) => {
    const regData = currentRegionData.candidates.find((c) => c.id === cand.id);
    return {
      ...cand,
      porcentaje: regData ? regData.porcentaje : cand.porcentaje,
      votos: regData ? regData.votos : cand.votos,
    };
  }).sort((a, b) => b.porcentaje - a.porcentaje);

  const leader = sortedCandidates[0];
  const secondPlace = sortedCandidates[1];
  const difference = (leader.porcentaje - secondPlace.porcentaje).toFixed(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Encabezado Superior */}
        <View style={styles.header}>
          <View style={styles.headerTitleRow}>
            <Image
              source={require('@/assets/images/CNE.png')}
              style={styles.cneLogoHeader}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.headerTitle}>Estadísticas CNE 📊</Text>
              <Text style={styles.headerSubtitle}>¿Quién va ganando las Elecciones?</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentPadding}>
          {/* TARJETA DESTACADA DEL LÍDER DEL CONTEO */}
          <View style={styles.leaderCard}>
            <View style={styles.leaderBadgeRow}>
              <View style={styles.leaderPill}>
                <Text style={styles.leaderPillText}>👑 LÍDER DEL CONTEO</Text>
              </View>
              <Text style={styles.updateText}>Actualizado CNE</Text>
            </View>

            <View style={styles.leaderInfoRow}>
              <View
                style={[
                  styles.leaderAvatarCircle,
                  { backgroundColor: leader.colorPrincipal },
                ]}>
                <Text style={styles.leaderEmoji}>{leader.avatarEmoji}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.leaderLabel}>Va encabezando el escrutinio:</Text>
                <Text style={styles.leaderName}>{leader.nombre}</Text>
                <Text style={styles.leaderParty}>
                  {leader.partido} ({leader.lista})
                </Text>
              </View>

              <View style={styles.leaderPercentBox}>
                <Text style={styles.leaderPercentVal}>{leader.porcentaje}%</Text>
                <Text style={styles.leaderDiffText}>+{difference}% de ventaja</Text>
              </View>
            </View>
          </View>

          {/* FILTRO DE REGIONES */}
          <View style={styles.regionSelectorBox}>
            <Text style={styles.regionSelectorLabel}>Filtrar escrutinio por Zona:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.regionChipsRow}>
                {Object.keys(REGION_STATS).map((reg) => (
                  <TouchableOpacity
                    key={reg}
                    style={[
                      styles.regionChip,
                      selectedRegion === reg && styles.regionChipActive,
                    ]}
                    onPress={() => setSelectedRegion(reg)}>
                    <Text
                      style={[
                        styles.regionChipText,
                        selectedRegion === reg && styles.regionChipTextActive,
                      ]}>
                      {reg}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* ====================================================
              DIAGRAMA DE BARRAS HORIZONTAL (HORIZONTAL BAR CHART)
             ==================================================== */}
          <View style={styles.chartCard}>
            <View style={styles.chartHeader}>
              <View>
                <Text style={styles.chartTitle}>Diagrama de Barras Horizontal</Text>
                <Text style={styles.chartSubTitle}>
                  Porcentaje de votos por candidato ({selectedRegion})
                </Text>
              </View>
              <View style={styles.liveTag}>
                <Text style={styles.liveTagText}>🔴 EN VIVO</Text>
              </View>
            </View>

            {/* Renderizado de las Barras Horizontales */}
            <View style={styles.barsContainer}>
              {sortedCandidates.map((cand, index) => {
                const isLeader = index === 0;
                return (
                  <View key={cand.id} style={styles.barRowItem}>
                    {/* Encabezado del candidato en el gráfico */}
                    <View style={styles.barLabelRow}>
                      <View style={styles.candNameWithRank}>
                        <Text style={styles.rankBadgeText}>#{index + 1}</Text>
                        <Text style={styles.candEmojiInline}>{cand.avatarEmoji}</Text>
                        <Text style={styles.candNameText}>
                          {cand.nombre} <Text style={{ color: '#64748B', fontWeight: '600' }}>({cand.lista})</Text>
                        </Text>
                      </View>
                      <Text
                        style={[
                          styles.barPercentText,
                          { color: cand.colorPrincipal },
                          isLeader && { fontWeight: '900', fontSize: 17 },
                        ]}>
                        {cand.porcentaje}%
                      </Text>
                    </View>

                    {/* La Barra Horizontal Visual */}
                    <View style={styles.barTrack}>
                      <View
                        style={[
                          styles.barFill,
                          {
                            width: `${Math.max(cand.porcentaje, 4)}%`,
                            backgroundColor: cand.colorPrincipal,
                          },
                        ]}>
                        {cand.porcentaje > 15 && (
                          <Text style={styles.barInsideText}>{cand.porcentaje}%</Text>
                        )}
                      </View>
                    </View>

                    {/* Votos exactos computados */}
                    <View style={styles.barFooterRow}>
                      <Text style={styles.votesCountText}>
                        🗳️ {cand.votos.toLocaleString()} votos válidos
                      </Text>
                      <Text style={styles.tendencyText}>
                        {cand.tendencia === 'up' ? '📈 Subiendo' : '➡️ Estable'}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          {/* RESUMEN DE PARTICIPACIÓN Y ACTAS */}
          <View style={styles.statsGridCard}>
            <Text style={styles.gridSectionTitle}>📌 Resumen del Escrutinio CNE</Text>

            <View style={styles.metricsGrid}>
              <View style={styles.metricBox}>
                <Text style={styles.metricValue}>{GENERAL_STATS.actasEscrutadas}%</Text>
                <Text style={styles.metricLabel}>Actas Escrutadas</Text>
              </View>
              <View style={styles.metricBox}>
                <Text style={styles.metricValue}>{GENERAL_STATS.participacion}%</Text>
                <Text style={styles.metricLabel}>Participación Ciudadana</Text>
              </View>
              <View style={styles.metricBox}>
                <Text style={styles.metricValue}>{GENERAL_STATS.ausentismo}%</Text>
                <Text style={styles.metricLabel}>Ausentismo</Text>
              </View>
              <View style={styles.metricBox}>
                <Text style={styles.metricValue}>{GENERAL_STATS.totalVotantes}</Text>
                <Text style={styles.metricLabel}>Votos Computados</Text>
              </View>
            </View>

            {/* Votos Blancos y Nulos */}
            <View style={styles.blancosNulosBox}>
              <View style={styles.bnItem}>
                <Text style={styles.bnLabel}>Votos Blancos:</Text>
                <Text style={styles.bnValue}>
                  {GENERAL_STATS.votosBlancos.toLocaleString()} (2.3%)
                </Text>
              </View>
              <View style={styles.bnDivider} />
              <View style={styles.bnItem}>
                <Text style={styles.bnLabel}>Votos Nulos:</Text>
                <Text style={styles.bnValue}>
                  {GENERAL_STATS.votosNulos.toLocaleString()} (5.0%)
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Pie de página */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>CNE Ecuador • Transmisión Oficial de Resultados</Text>
          <Text style={styles.footerSub}>{GENERAL_STATS.ultimaActualizacion}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#002B49',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#002B49',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cneLogoHeader: {
    width: 44,
    height: 44,
    marginRight: 14,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFD100',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 2,
  },
  contentPadding: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  leaderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderLeftWidth: 6,
    borderLeftColor: '#FFD100',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  leaderBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  leaderPill: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FDE047',
  },
  leaderPillText: {
    color: '#B45309',
    fontSize: 11,
    fontWeight: '900',
  },
  updateText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
  },
  leaderInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leaderAvatarCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  leaderEmoji: {
    fontSize: 26,
  },
  leaderLabel: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '700',
  },
  leaderName: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
  },
  leaderParty: {
    fontSize: 11,
    color: '#475569',
    fontWeight: '700',
  },
  leaderPercentBox: {
    alignItems: 'flex-end',
    backgroundColor: '#F8FAFC',
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  leaderPercentVal: {
    fontSize: 22,
    fontWeight: '900',
    color: '#002B49',
  },
  leaderDiffText: {
    fontSize: 10,
    color: '#16A34A',
    fontWeight: '800',
  },
  regionSelectorBox: {
    gap: 6,
  },
  regionSelectorLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0F172A',
  },
  regionChipsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  regionChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  regionChipActive: {
    backgroundColor: '#002B49',
    borderColor: '#002B49',
  },
  regionChipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  regionChipTextActive: {
    color: '#FFD100',
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
  },
  chartSubTitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  liveTag: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  liveTagText: {
    color: '#DC2626',
    fontSize: 10,
    fontWeight: '900',
  },
  barsContainer: {
    gap: 18,
  },
  barRowItem: {
    gap: 6,
  },
  barLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  candNameWithRank: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankBadgeText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#94A3B8',
    marginRight: 6,
  },
  candEmojiInline: {
    fontSize: 18,
    marginRight: 6,
  },
  candNameText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
  },
  barPercentText: {
    fontSize: 16,
    fontWeight: '900',
  },
  barTrack: {
    height: 24,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  barFill: {
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  barInsideText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  barFooterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  votesCountText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
  },
  tendencyText: {
    fontSize: 11,
    color: '#16A34A',
    fontWeight: '700',
  },
  statsGridCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  gridSectionTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 14,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  metricBox: {
    width: '48%',
    backgroundColor: '#F8FAFC',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
  },
  metricLabel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
    fontWeight: '700',
    textAlign: 'center',
  },
  blancosNulosBox: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  bnItem: {
    flex: 1,
    alignItems: 'center',
  },
  bnLabel: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '700',
  },
  bnValue: {
    fontSize: 12,
    fontWeight: '800',
    color: '#0F172A',
    marginTop: 2,
  },
  bnDivider: {
    width: 1,
    height: '80%',
    backgroundColor: '#CBD5E1',
  },
  footer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#002B49',
  },
  footerSub: {
    fontSize: 10,
    color: '#64748B',
    marginTop: 2,
  },
});
