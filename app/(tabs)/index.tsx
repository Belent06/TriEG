import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { ELECTORAL_STEPS, QUITO_POLLING_PLACES, PollingPlace } from '@/data/cne-data';

const { width } = Dimensions.get('window');

/**
 * Pantalla de Inicio (HomeScreen - app/(tabs)/index.tsx)
 * Pestaña Home de la App de CNE Ecuador.
 * Contiene:
 * 1. Bienvenida Institucional CNE
 * 2. Resumen interactivo del Proceso Electoral (pasos, horarios y requisitos)
 * 3. Sección "¿Dónde votar en Quito?" con Mapa Interactivo y Buscador de Recintos
 */
export default function HomeScreen() {
  // Estado para el buscador y filtro de recintos en Quito
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('Todos');
  const [activePlace, setActivePlace] = useState<PollingPlace>(QUITO_POLLING_PLACES[0]);

  // Sectores para filtrado
  const sectores = ['Todos', 'Norte', 'Centro-Norte', 'Sur', 'Valles'];

  // Filtrado de recintos de Quito
  const filteredPlaces = QUITO_POLLING_PLACES.filter((place) => {
    const matchesSearch =
      place.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.parroquia.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.direccion.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector =
      selectedSector === 'Todos' || place.sector.includes(selectedSector);
    return matchesSearch && matchesSector;
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Encabezado Institucional CNE */}
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/CNE.png')}
            style={styles.cneLogoHeader}
            resizeMode="contain"
          />
          <View style={styles.headerTitles}>
            <Text style={styles.headerTitle}>CNE Ecuador 🇪🇨</Text>
            <Text style={styles.headerSubtitle}>Consejo Nacional Electoral</Text>
          </View>
        </View>

        <View style={styles.contentPadding}>
          {/* ==========================================
              SECCIÓN 1: BIENVENIDA AL PROCESO ELECTORAL
             ========================================== */}
          <View style={styles.welcomeCard}>
            <View style={styles.welcomeHeaderRow}>
              <View style={styles.welcomeBadge}>
                <Text style={styles.welcomeBadgeText}>ELECCIONES 2026</Text>
              </View>
              <Text style={styles.livePulseText}>🔴 En Vivo</Text>
            </View>

            <Text style={styles.welcomeTitle}>¡Bienvenido/a al Portal Electoral!</Text>
            <Text style={styles.welcomeBody}>
              Consulta la información oficial del sufragio, ubica tu recinto electoral en Quito con mapa interactivo y revisa las propuestas de los candidatos a la Presidencia de la República.
            </Text>

            <View style={styles.quickInfoRow}>
              <View style={styles.quickInfoItem}>
                <Text style={styles.quickInfoIcon}>📅</Text>
                <View>
                  <Text style={styles.quickInfoLabel}>Jornada Electoral</Text>
                  <Text style={styles.quickInfoVal}>Domingo de Elecciones</Text>
                </View>
              </View>
              <View style={styles.quickInfoItem}>
                <Text style={styles.quickInfoIcon}>⏰</Text>
                <View>
                  <Text style={styles.quickInfoLabel}>Horario de Sufragio</Text>
                  <Text style={styles.quickInfoVal}>07:00 a 17:00 HS</Text>
                </View>
              </View>
            </View>
          </View>

          {/* ==========================================
              SECCIÓN 2: RESUMEN DEL PROCESO ELECTORAL
             ========================================== */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionIcon}>📋</Text>
              <View>
                <Text style={styles.sectionTitle}>Resumen del Proceso</Text>
                <Text style={styles.sectionSubtitle}>Guía paso a paso para emitir tu voto</Text>
              </View>
            </View>

            {/* Pasos ordenados */}
            <View style={styles.stepsContainer}>
              {ELECTORAL_STEPS.map((step) => (
                <View key={step.id} style={styles.stepCardItem}>
                  <View style={styles.stepNumberBadge}>
                    <Text style={styles.stepNumberText}>{step.id}</Text>
                  </View>
                  <View style={styles.stepContent}>
                    <View style={styles.stepTitleRow}>
                      <Text style={styles.stepIcon}>{step.icono}</Text>
                      <Text style={styles.stepTitle}>{step.titulo}</Text>
                    </View>
                    <Text style={styles.stepDesc}>{step.descripcion}</Text>
                    <View style={styles.requisitoTag}>
                      <Text style={styles.requisitoTagText}>📌 Requisito: {step.requisito}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            {/* Cuadro informativo de obligatoriedad */}
            <View style={styles.infoNoticeBox}>
              <Text style={styles.infoNoticeTitle}>ℹ️ Información Importante:</Text>
              <Text style={styles.infoNoticeText}>
                • <Text style={{ fontWeight: '800' }}>Voto Obligatorio:</Text> Para ciudadanos ecuatorianos de 18 a 64 años.
              </Text>
              <Text style={styles.infoNoticeText}>
                • <Text style={{ fontWeight: '800' }}>Voto Facultativo:</Text> Jóvenes de 16-17 años, adultos mayores de 65+, personas con discapacidad y ecuatorianos en el exterior.
              </Text>
            </View>
          </View>

          {/* ==========================================
              SECCIÓN 3: ¿DÓNDE VOTAR EN QUITO? (MAPA)
             ========================================== */}
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.sectionIcon}>🗺️</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.sectionTitle}>¿Dónde votar en Quito?</Text>
                <Text style={styles.sectionSubtitle}>Mapa interactivo y recintos electorales</Text>
              </View>
            </View>

            {/* Buscador de Recintos */}
            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar recinto, colegio o parroquia en Quito..."
                placeholderTextColor="#94A3B8"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Text style={styles.clearSearch}>✕</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Filtro por Sectores de Quito */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.sectorsScrollView}
              contentContainerStyle={styles.sectorsContainer}>
              {sectores.map((sec) => (
                <TouchableOpacity
                  key={sec}
                  style={[
                    styles.sectorChip,
                    selectedSector === sec && styles.sectorChipActive,
                  ]}
                  onPress={() => setSelectedSector(sec)}>
                  <Text
                    style={[
                      styles.sectorChipText,
                      selectedSector === sec && styles.sectorChipTextActive,
                    ]}>
                    {sec}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* MAPA INTERACTIVO DE QUITO */}
            <View style={styles.mapContainer}>
              {/* Encabezado del Mapa */}
              <View style={styles.mapHeaderOverlay}>
                <Text style={styles.mapHeaderTitle}>📍 Distrito Metropolitano de Quito</Text>
                <Text style={styles.mapHeaderSub}>Toca un pin para ver detalles del recinto</Text>
              </View>

              {/* Lienzo del Mapa Interactivo con Geometría de Quito */}
              <View style={styles.mapCanvas}>
                {/* Elementos de geografía urbana de Quito (Cerro Pichincha, Av. Amazonas, El Panecillo) */}
                <View style={styles.mapMountainOverlay}>
                  <Text style={styles.mapGeographyLabel}>⛰️ Volcán Pichincha (Oeste)</Text>
                </View>
                <View style={styles.mapValleyOverlay}>
                  <Text style={styles.mapGeographyLabel}>🏔️ Valles (Cumbayá / Tumbaco)</Text>
                </View>
                {/* Ejes viales principales de Quito */}
                <View style={styles.mapRoadNorthSouth} />
                <View style={styles.mapRoadEastWest} />

                {/* Marcadores de Recintos Electorales */}
                {QUITO_POLLING_PLACES.map((place) => {
                  const isActive = activePlace.id === place.id;
                  const isFiltered = filteredPlaces.some((p) => p.id === place.id);

                  if (!isFiltered) return null;

                  return (
                    <TouchableOpacity
                      key={place.id}
                      style={[
                        styles.mapPin,
                        { left: `${place.coordX}%`, top: `${place.coordY}%` },
                        isActive && styles.mapPinActive,
                      ]}
                      activeOpacity={0.8}
                      onPress={() => setActivePlace(place)}>
                      <View style={[styles.pinBubble, isActive && styles.pinBubbleActive]}>
                        <Text style={styles.pinIcon}>{isActive ? '🗳️' : '📍'}</Text>
                      </View>
                      <Text style={[styles.pinLabelText, isActive && styles.pinLabelTextActive]}>
                        {place.nombre.split(' ')[0]}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* DETALLES DEL RECINTO SELECCIONADO */}
            {activePlace && (
              <View style={styles.placeDetailCard}>
                <View style={styles.placeHeaderRow}>
                  <View style={styles.placeSectorBadge}>
                    <Text style={styles.placeSectorText}>{activePlace.sector}</Text>
                  </View>
                  <Text style={styles.placeParroquiaText}>Parroquia: {activePlace.parroquia}</Text>
                </View>

                <Text style={styles.placeTitle}>{activePlace.nombre}</Text>
                <Text style={styles.placeAddress}>📍 {activePlace.direccion}</Text>
                <Text style={styles.placeReference}>🏢 Referencia: {activePlace.referencia}</Text>

                <View style={styles.placeStatsGrid}>
                  <View style={styles.placeStatBox}>
                    <Text style={styles.placeStatVal}>{activePlace.mesasHombres}</Text>
                    <Text style={styles.placeStatLab}>Junas Varones</Text>
                  </View>
                  <View style={styles.placeStatBox}>
                    <Text style={styles.placeStatVal}>{activePlace.mesasMujeres}</Text>
                    <Text style={styles.placeStatLab}>Juntas Mujeres</Text>
                  </View>
                  <View style={styles.placeStatBox}>
                    <Text style={styles.placeStatVal}>{activePlace.totalElectores}</Text>
                    <Text style={styles.placeStatLab}>Empadronados</Text>
                  </View>
                </View>
              </View>
            )}

            {/* LISTA COMPLETA DE RECINTOS */}
            <Text style={styles.listSectionTitle}>Puntos de Votación en Quito ({filteredPlaces.length}):</Text>
            <View style={styles.placesList}>
              {filteredPlaces.map((place) => {
                const isSelected = activePlace?.id === place.id;
                return (
                  <TouchableOpacity
                    key={place.id}
                    style={[styles.placeListItem, isSelected && styles.placeListItemSelected]}
                    onPress={() => setActivePlace(place)}>
                    <View style={styles.placeListIconBox}>
                      <Text style={styles.placeListIcon}>🏫</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.placeListName}>{place.nombre}</Text>
                      <Text style={styles.placeListSub}>
                        {place.parroquia} • {place.sector}
                      </Text>
                    </View>
                    <Text style={styles.selectButtonText}>{isSelected ? 'Seleccionado ✓' : 'Ver mapa'}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* Pie de Página Oficial */}
        <View style={styles.footer}>
          <Image
            source={require('@/assets/images/CNE.png')}
            style={styles.footerLogo}
            resizeMode="contain"
          />
          <Text style={styles.footerText}>Consejo Nacional Electoral del Ecuador</Text>
          <Text style={styles.footerSub}>Garantía de la Democracia • Elecciones 2026</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  cneLogoHeader: {
    width: 48,
    height: 48,
    marginRight: 14,
  },
  headerTitles: {
    flex: 1,
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
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderLeftWidth: 6,
    borderLeftColor: '#FFD100',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  welcomeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  welcomeBadge: {
    backgroundColor: '#002B49',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  welcomeBadgeText: {
    color: '#FFD100',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },
  livePulseText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '800',
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 8,
  },
  welcomeBody: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 20,
  },
  quickInfoRow: {
    flexDirection: 'row',
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    gap: 12,
  },
  quickInfoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  quickInfoIcon: {
    fontSize: 22,
    marginRight: 8,
  },
  quickInfoLabel: {
    fontSize: 10,
    color: '#64748B',
    fontWeight: '700',
  },
  quickInfoVal: {
    fontSize: 12,
    color: '#002B49',
    fontWeight: '800',
    marginTop: 1,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: '#002B49',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 1,
  },
  stepsContainer: {
    gap: 12,
  },
  stepCardItem: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  stepNumberBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#002B49',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: '#FFD100',
    fontWeight: '900',
    fontSize: 15,
  },
  stepContent: {
    flex: 1,
  },
  stepTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  stepIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  stepDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 17,
  },
  requisitoTag: {
    backgroundColor: '#FEF3C7',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: 6,
  },
  requisitoTagText: {
    fontSize: 11,
    color: '#92400E',
    fontWeight: '700',
  },
  infoNoticeBox: {
    backgroundColor: '#EFF6FF',
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
    gap: 4,
  },
  infoNoticeTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E40AF',
    marginBottom: 4,
  },
  infoNoticeText: {
    fontSize: 12,
    color: '#1E3A8A',
    lineHeight: 18,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#0F172A',
  },
  clearSearch: {
    fontSize: 14,
    color: '#64748B',
    paddingHorizontal: 6,
  },
  sectorsScrollView: {
    marginBottom: 16,
  },
  sectorsContainer: {
    gap: 8,
  },
  sectorChip: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sectorChipActive: {
    backgroundColor: '#002B49',
    borderColor: '#002B49',
  },
  sectorChipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#475569',
  },
  sectorChipTextActive: {
    color: '#FFD100',
  },
  mapContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#002B49',
    marginBottom: 16,
    backgroundColor: '#001E36',
  },
  mapHeaderOverlay: {
    backgroundColor: '#002B49',
    padding: 12,
    alignItems: 'center',
  },
  mapHeaderTitle: {
    color: '#FFD100',
    fontSize: 14,
    fontWeight: '900',
  },
  mapHeaderSub: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 2,
  },
  mapCanvas: {
    height: 240,
    width: '100%',
    backgroundColor: '#0F172A',
    position: 'relative',
  },
  mapMountainOverlay: {
    position: 'absolute',
    left: 8,
    top: 10,
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  mapValleyOverlay: {
    position: 'absolute',
    right: 8,
    bottom: 10,
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  mapGeographyLabel: {
    color: '#64748B',
    fontSize: 9,
    fontWeight: '700',
  },
  mapRoadNorthSouth: {
    position: 'absolute',
    left: '52%',
    top: 0,
    bottom: 0,
    width: 6,
    backgroundColor: 'rgba(255, 209, 0, 0.25)',
  },
  mapRoadEastWest: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'rgba(148, 163, 184, 0.2)',
  },
  mapPin: {
    position: 'absolute',
    alignItems: 'center',
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
  mapPinActive: {
    zIndex: 99,
  },
  pinBubble: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  pinBubbleActive: {
    backgroundColor: '#FFD100',
    borderColor: '#002B49',
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  pinIcon: {
    fontSize: 16,
  },
  pinLabelText: {
    color: '#CBD5E1',
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  pinLabelTextActive: {
    color: '#FFD100',
    backgroundColor: '#002B49',
  },
  placeDetailCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 14,
    borderWidth: 2,
    borderColor: '#FFD100',
    marginBottom: 16,
  },
  placeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  placeSectorBadge: {
    backgroundColor: '#002B49',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  placeSectorText: {
    color: '#FFD100',
    fontSize: 10,
    fontWeight: '800',
  },
  placeParroquiaText: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: '700',
  },
  placeTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 4,
  },
  placeAddress: {
    fontSize: 12,
    color: '#334155',
    fontWeight: '600',
    marginBottom: 2,
  },
  placeReference: {
    fontSize: 11,
    color: '#64748B',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  placeStatsGrid: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'space-around',
  },
  placeStatBox: {
    alignItems: 'center',
  },
  placeStatVal: {
    fontSize: 15,
    fontWeight: '900',
    color: '#002B49',
  },
  placeStatLab: {
    fontSize: 10,
    color: '#64748B',
    marginTop: 2,
  },
  listSectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 10,
  },
  placesList: {
    gap: 8,
  },
  placeListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  placeListItemSelected: {
    backgroundColor: '#EFF6FF',
    borderColor: '#002B49',
    borderWidth: 2,
  },
  placeListIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  placeListIcon: {
    fontSize: 18,
  },
  placeListName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0F172A',
  },
  placeListSub: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },
  selectButtonText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#002B49',
  },
  footer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerLogo: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  footerText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#002B49',
  },
  footerSub: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
});
