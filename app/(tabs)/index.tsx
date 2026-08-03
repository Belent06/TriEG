import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { TEAM_PROFILE, ARGENTINA_DATA } from '@/data/team-info';

/**
 * Pantalla de Inicio (HomeScreen - app/(tabs)/index.tsx)
 * Es la vista principal de la pestaña Home en Expo Router.
 * Contiene:
 * 1. Sección de Bienvenida Personalizada (con datos dinámicos de La Tri de team-info.ts)
 * 2. Sección de la Bandera de Argentina (Franjas representativas Azul Celeste y Blanco)
 * 3. Tarjeta de Subcampeón Argentina (DT Lionel Scaloni, Capitán Lionel Messi y Marcador Final 1-2)
 */
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Encabezado Superior de la Pantalla */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>MiTri App ⚽</Text>
          <Text style={styles.headerSubtitle}>Plataforma de Selecciones de Fútbol</Text>
        </View>

        <View style={styles.contentPadding}>
          {/* SECCIÓN 1: BIENVENIDA PERSONALIZADA */}
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>👋 ¡Bienvenida, Belén!</Text>
            <Text style={styles.welcomeBody}>
              Tu aplicación sobre la {TEAM_PROFILE.name} ({TEAM_PROFILE.nickname}) y grandes selecciones del fútbol mundial.
            </Text>
            <View style={styles.sloganBadge}>
              <Text style={styles.sloganText}>"{TEAM_PROFILE.slogan}"</Text>
            </View>
          </View>

          {/* SECCIÓN 2: BANDERA DE ARGENTINA */}
          <View style={styles.flagSectionCard}>
            <View style={styles.flagTitleRow}>
              <Text style={styles.flagEmojiHeader}>🇦🇷</Text>
              <Text style={styles.flagSectionTitle}>Bandera de Argentina</Text>
            </View>

            {/* Franjas Representativas Celeste y Blanco */}
            <View style={styles.flagColorsContainer}>
              <View style={styles.colorStripBlue}>
                <Text style={styles.stripText}>AZUL CELESTE</Text>
              </View>
              <View style={styles.colorStripWhite}>
                <Text style={styles.stripTextDark}>☀️ BLANCO CON SOL DE MAYO</Text>
              </View>
              <View style={styles.colorStripBlue}>
                <Text style={styles.stripText}>AZUL CELESTE</Text>
              </View>
            </View>

            <Text style={styles.flagDescription}>
              {ARGENTINA_DATA.flagDescription}
            </Text>
          </View>

          {/* SECCIÓN 3: TARJETA DE SUBCAMPEÓN ARGENTINA */}
          <View style={styles.argentinaCard}>
            {/* Encabezado con Título y Badge */}
            <View style={styles.argentinaHeaderRow}>
              <Text style={styles.flagEmoji}>🏆</Text>
              <View style={styles.argentinaTitleBox}>
                <Text style={styles.argentinaTitle}>{ARGENTINA_DATA.name}</Text>
                <View style={styles.subcampeonBadge}>
                  <Text style={styles.subcampeonText}>{ARGENTINA_DATA.achievement}</Text>
                </View>
              </View>
            </View>

            {/* Detalles de la Ficha: DT, Capitán y Final 1-2 */}
            <View style={styles.argentinaDetailsGrid}>
              <View style={styles.argDetailItem}>
                <Text style={styles.argDetailKey}>📋 Director Técnico:</Text>
                <Text style={styles.argDetailVal}>{ARGENTINA_DATA.coach}</Text>
              </View>

              <View style={styles.argDetailItem}>
                <Text style={styles.argDetailKey}>👑 Capitán:</Text>
                <Text style={styles.argDetailVal}>{ARGENTINA_DATA.captain}</Text>
              </View>

              <View style={styles.argDetailItem}>
                <Text style={styles.argDetailKey}>⚽ Marcador Final:</Text>
                <Text style={styles.finalScoreVal}>{ARGENTINA_DATA.finalScore}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Pie de Página */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>MiTri App 🇪🇨🇦🇷</Text>
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
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFD100',
  },
  headerSubtitle: {
    fontSize: 13,
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
  sloganBadge: {
    backgroundColor: '#FEF9C3',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FDE047',
  },
  sloganText: {
    color: '#854D0E',
    fontSize: 12,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  flagSectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#74ACDF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 3,
  },
  flagTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  flagEmojiHeader: {
    fontSize: 28,
    marginRight: 10,
  },
  flagSectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
  },
  flagColorsContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginVertical: 6,
  },
  colorStripBlue: {
    backgroundColor: '#74ACDF',
    paddingVertical: 8,
    alignItems: 'center',
  },
  colorStripWhite: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(116, 172, 223, 0.3)',
  },
  stripText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 11,
    letterSpacing: 1.5,
  },
  stripTextDark: {
    color: '#002B49',
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 1.5,
  },
  flagDescription: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 8,
    textAlign: 'center',
    fontStyle: 'italic',
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
    fontSize: 36,
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
  footer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#002B49',
  },
});
