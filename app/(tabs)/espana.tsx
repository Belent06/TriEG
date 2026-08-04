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
import { CANDIDATES, Candidate } from '@/data/cne-data';

/**
 * Pantalla de Candidatos (espana.tsx -> Tab "Candidatos")
 * Muestra los 3 candidatos presidenciales oficiales y sus propuestas de gobierno.
 */
export default function CandidatosScreen() {
  const [activeCandidateId, setActiveCandidateId] = useState<string>(CANDIDATES[0].id);

  const selectedCandidate =
    CANDIDATES.find((c) => c.id === activeCandidateId) || CANDIDATES[0];

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
              <Text style={styles.headerTitle}>Candidatos 🗳️</Text>
              <Text style={styles.headerSubtitle}>Elecciones Presidenciales Ecuador</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentPadding}>
          {/* BARRA DE SELECCIÓN DE CANDIDATOS */}
          <Text style={styles.selectorLabel}>Selecciona un Candidato:</Text>
          <View style={styles.candidateTabsRow}>
            {CANDIDATES.map((cand) => {
              const isSelected = cand.id === activeCandidateId;
              return (
                <TouchableOpacity
                  key={cand.id}
                  style={[
                    styles.candidateTabChip,
                    isSelected && {
                      backgroundColor: cand.colorPrincipal,
                      borderColor: cand.colorSecundario,
                      borderWidth: 2,
                    },
                  ]}
                  onPress={() => setActiveCandidateId(cand.id)}>
                  <Text style={styles.candidateTabEmoji}>{cand.avatarEmoji}</Text>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={[
                        styles.candidateTabName,
                        isSelected && { color: '#FFFFFF' },
                      ]}
                      numberOfLines={1}>
                      {cand.nombre.split(' ')[0]} {cand.nombre.split(' ')[1]}
                    </Text>
                    <Text
                      style={[
                        styles.candidateTabParty,
                        isSelected && { color: cand.colorSecundario },
                      ]}>
                      {cand.lista}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* FICHA DETALLADA DEL CANDIDATO SELECCIONADO */}
          <View
            style={[
              styles.candidateHeroCard,
              { borderTopColor: selectedCandidate.colorPrincipal },
            ]}>
            {/* Cabecera del Candidato */}
            <View style={styles.candidateHeroHeader}>
              <View
                style={[
                  styles.candidateAvatarCircle,
                  { backgroundColor: selectedCandidate.colorPrincipal },
                ]}>
                <Text style={styles.candidateAvatarEmoji}>{selectedCandidate.avatarEmoji}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <View style={styles.partyBadgeRow}>
                  <View
                    style={[
                      styles.partyBadge,
                      { backgroundColor: selectedCandidate.colorPrincipal },
                    ]}>
                    <Text style={styles.partyBadgeText}>{selectedCandidate.lista}</Text>
                  </View>
                  <Text style={styles.binomioText}>Binomio: {selectedCandidate.binomio}</Text>
                </View>

                <Text style={styles.candidateName}>{selectedCandidate.nombre}</Text>
                <Text style={styles.candidatePartyName}>{selectedCandidate.partido}</Text>
              </View>
            </View>

            {/* Lema de campaña */}
            <View
              style={[
                styles.sloganBox,
                { backgroundColor: selectedCandidate.colorPrincipal + '12' },
              ]}>
              <Text
                style={[
                  styles.sloganText,
                  { color: selectedCandidate.colorPrincipal },
                ]}>
                "{selectedCandidate.lema}"
              </Text>
            </View>

            {/* Barra de progreso de intención de voto */}
            <View style={styles.voteStatBox}>
              <View style={styles.voteStatHeader}>
                <Text style={styles.voteStatLabel}>Conteo / Intención de Voto Oficial:</Text>
                <Text
                  style={[
                    styles.voteStatPercentage,
                    { color: selectedCandidate.colorPrincipal },
                  ]}>
                  {selectedCandidate.porcentaje}%
                </Text>
              </View>
              <View style={styles.progressBarTrack}>
                <View
                  style={[
                    styles.progressBarFill,
                    {
                      width: `${selectedCandidate.porcentaje}%`,
                      backgroundColor: selectedCandidate.colorPrincipal,
                    },
                  ]}
                />
              </View>
            </View>
          </View>

          {/* LISTADO DE PROPUESTAS DE GOBIERNO */}
          <View style={styles.proposalsSection}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionIcon}>📑</Text>
              <View>
                <Text style={styles.sectionTitle}>
                  Propuestas de {selectedCandidate.nombre.split(' ')[0]}
                </Text>
                <Text style={styles.sectionSubtitle}>
                  Ejes de trabajo principales de su plan de gobierno
                </Text>
              </View>
            </View>

            <View style={styles.proposalsList}>
              {selectedCandidate.propuestas.map((prop, idx) => (
                <View key={idx} style={styles.proposalCard}>
                  <View style={styles.proposalHeader}>
                    <View
                      style={[
                        styles.proposalIconCircle,
                        { backgroundColor: selectedCandidate.colorPrincipal + '20' },
                      ]}>
                      <Text style={styles.proposalIconEmoji}>{prop.icono}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.proposalCategory}>{prop.categoria}</Text>
                      <Text style={styles.proposalTitle}>{prop.titulo}</Text>
                    </View>
                  </View>

                  <Text style={styles.proposalDesc}>{prop.descripcion}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* COMPARATIVA RÁPIDA DE LOS 3 CANDIDATOS */}
          <View style={styles.comparativeCard}>
            <Text style={styles.comparativeTitle}>👥 Los 3 Candidatos a la Presidencia</Text>
            <View style={styles.comparativeGrid}>
              {CANDIDATES.map((cand) => (
                <TouchableOpacity
                  key={cand.id}
                  style={styles.compItem}
                  onPress={() => setActiveCandidateId(cand.id)}>
                  <Text style={styles.compEmoji}>{cand.avatarEmoji}</Text>
                  <Text style={styles.compName}>{cand.nombre}</Text>
                  <Text
                    style={[styles.compParty, { color: cand.colorPrincipal }]}>
                    {cand.lista}
                  </Text>
                  <View
                    style={[
                      styles.compPercentTag,
                      { backgroundColor: cand.colorPrincipal },
                    ]}>
                    <Text style={styles.compPercentText}>{cand.porcentaje}%</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Pie de página */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>CNE Ecuador • Elecciones Presidenciales</Text>
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
  selectorLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  candidateTabsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  candidateTabChip: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  candidateTabEmoji: {
    fontSize: 22,
    marginRight: 6,
  },
  candidateTabName: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0F172A',
  },
  candidateTabParty: {
    fontSize: 9,
    fontWeight: '700',
    color: '#64748B',
  },
  candidateHeroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderTopWidth: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  candidateHeroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  candidateAvatarCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  candidateAvatarEmoji: {
    fontSize: 32,
  },
  partyBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  partyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  partyBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
  },
  binomioText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
  },
  candidateName: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0F172A',
  },
  candidatePartyName: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '700',
  },
  sloganBox: {
    padding: 12,
    borderRadius: 12,
    marginTop: 14,
    alignItems: 'center',
  },
  sloganText: {
    fontSize: 13,
    fontWeight: '800',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  voteStatBox: {
    marginTop: 14,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  voteStatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  voteStatLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
  },
  voteStatPercentage: {
    fontSize: 16,
    fontWeight: '900',
  },
  progressBarTrack: {
    height: 10,
    backgroundColor: '#E2E8F0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  proposalsSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIcon: {
    fontSize: 26,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#002B49',
  },
  sectionSubtitle: {
    fontSize: 11,
    color: '#64748B',
  },
  proposalsList: {
    gap: 12,
  },
  proposalCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  proposalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  proposalIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  proposalIconEmoji: {
    fontSize: 18,
  },
  proposalCategory: {
    fontSize: 10,
    fontWeight: '800',
    color: '#64748B',
    textTransform: 'uppercase',
  },
  proposalTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0F172A',
  },
  proposalDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
  },
  comparativeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  comparativeTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 12,
  },
  comparativeGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  compItem: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  compEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  compName: {
    fontSize: 11,
    fontWeight: '800',
    color: '#0F172A',
    textAlign: 'center',
  },
  compParty: {
    fontSize: 9,
    fontWeight: '700',
    marginTop: 2,
  },
  compPercentTag: {
    marginTop: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  compPercentText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#002B49',
  },
});
