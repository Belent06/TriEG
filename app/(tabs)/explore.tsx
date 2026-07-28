import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { TEAM_PROFILE } from '@/data/team-info';

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/ecuador_logo.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />
          <Text style={styles.headerTitle}>Acerca de MiTri 🇪🇨</Text>
          <Text style={styles.headerSubtitle}>Tributo a la Selección Ecuatoriana de Fútbol</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Historia del Proyecto</Text>
          <Text style={styles.cardBody}>
            <Text style={styles.boldText}>MiTri</Text> es una aplicación móvil desarrollada para los hinchas del fútbol ecuatoriano. Permite recordar y explorar los momentos más gloriosos de La Tri en las Copas Mundiales de la FIFA, desde su histórica clasificación en Corea-Japón 2002 hasta el camino rumbo al Mundial 2026.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Simbolismo Tricolor</Text>
          
          <View style={styles.colorRow}>
            <View style={[styles.colorDot, { backgroundColor: '#FFD100' }]} />
            <View style={styles.colorInfo}>
              <Text style={styles.colorName}>Amarillo Tricolor</Text>
              <Text style={styles.colorDesc}>Representa el sol, la riqueza de nuestras tierras y la pasión de la hinchada.</Text>
            </View>
          </View>

          <View style={styles.colorRow}>
            <View style={[styles.colorDot, { backgroundColor: '#002B49' }]} />
            <View style={styles.colorInfo}>
              <Text style={styles.colorName}>Azul Marino</Text>
              <Text style={styles.colorDesc}>Representa el Océano Pacífico y el cielo infinito sobre el país.</Text>
            </View>
          </View>

          <View style={styles.colorRow}>
            <View style={[styles.colorDot, { backgroundColor: '#CE1126' }]} />
            <View style={styles.colorInfo}>
              <Text style={styles.colorName}>Rojo Accent</Text>
              <Text style={styles.colorDesc}>Simboliza la garra, el coraje y la sangre de nuestros guerreros en la cancha.</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Información Técnica</Text>
          <Text style={styles.techText}>• Framework: React Native con Expo SDK 54</Text>
          <Text style={styles.techText}>• Enrutamiento: Expo Router v6</Text>
          <Text style={styles.techText}>• Lenguaje: TypeScript</Text>
          <Text style={styles.techText}>• Plataforma: Android / iOS / Web via Expo Go</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>¡Si Se Puede! 🇪🇨⚽</Text>
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
    paddingVertical: 28,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerLogo: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFD100',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#002B49',
    marginBottom: 10,
  },
  cardBody: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },
  boldText: {
    fontWeight: '800',
    color: '#002B49',
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  colorDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  colorInfo: {
    flex: 1,
  },
  colorName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  colorDesc: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  techText: {
    fontSize: 13,
    color: '#475569',
    marginVertical: 4,
  },
  footer: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
  },
});
