import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { WelcomeArgentinaCard } from '@/components/home/bienvenida-argentina';
import { HeroBanner } from '@/components/home/hero-banner';
import { NavTabs, TabType } from '@/components/home/nav-tabs';
import { PlayersSection } from '@/components/home/players-section';
import { RecordsSection } from '@/components/home/records-section';
import { WorldCupCard } from '@/components/home/world-cup-card';
import { WorldCupModal } from '@/components/home/world-cup-modal';
import { WORLD_CUPS, WorldCupData } from '@/data/team-info';

/**
 * Pantalla Principal (HomeScreen) de MiTri
 * Incluye mensaje de bienvenida, tarjeta de Argentina Subcampeón y pestañas de contenido.
 */
export default function HomeScreen() {
  const [selectedWorldCup, setSelectedWorldCup] = useState<WorldCupData | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('mundiales');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Banner Encabezado del Equipo */}
        <HeroBanner />

        {/* Tarjeta de Bienvenida y Tarjeta de Argentina Subcampeón */}
        <WelcomeArgentinaCard />

        {/* Pestañas de Navegación por Secciones */}
        <NavTabs activeTab={activeTab} onSelectTab={setActiveTab} />

        {/* Sección 1: Copas del Mundo */}
        {activeTab === 'mundiales' && (
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Historial Mundialista de La Tri</Text>
              <Text style={styles.sectionSubtitle}>Toca una tarjeta para ver todos los detalles</Text>
            </View>

            {WORLD_CUPS.map((cup) => (
              <WorldCupCard
                key={cup.year}
                cup={cup}
                onPress={setSelectedWorldCup}
              />
            ))}
          </View>
        )}

        {/* Sección 2: Récords e Historia */}
        {activeTab === 'records' && <RecordsSection />}

        {/* Sección 3: Jugadores Referentes */}
        {activeTab === 'plantilla' && <PlayersSection />}

        {/* Pie de Página */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>MiTri App 🇪🇨</Text>
          <Text style={styles.footerSub}>Tributo oficial a la Selección Ecuatoriana de Fútbol</Text>
        </View>
      </ScrollView>

      {/* Ventana Modal con Detalle del Mundial Seleccionado */}
      <WorldCupModal
        selectedCup={selectedWorldCup}
        onClose={() => setSelectedWorldCup(null)}
      />
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
  footer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#002B49',
  },
  footerSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
});
