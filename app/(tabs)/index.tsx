import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { WelcomeArgentinaCard } from '@/components/home/bienvenida-argentina';

/**
 * Pantalla de Inicio (HomeScreen)
 * Contiene únicamente 2 secciones:
 * 1. Sección de Bienvenida
 * 2. Tarjeta de Subcampeón Argentina (Bandera 🇦🇷, Director Técnico, Capitán y Final 1-2)
 */
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Encabezado Superior */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>MiTri App ⚽</Text>
          <Text style={styles.headerSubtitle}>Plataforma de Selecciones de Fútbol</Text>
        </View>

        {/* Únicas 2 Secciones: Bienvenida + Tarjeta Subcampeón Argentina */}
        <WelcomeArgentinaCard />

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
