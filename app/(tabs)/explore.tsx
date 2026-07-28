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

/**
 * Pantalla Acerca de (ExploreScreen)
 * Muestra la información del estudiante desarrollador, la materia y los créditos del proyecto.
 */
export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.studentAvatarCircle}>
            <Text style={styles.studentAvatarEmoji}>🎓</Text>
          </View>
          <Text style={styles.headerTitle}>Acerca del Desarrollador</Text>
          <Text style={styles.headerSubtitle}>Perfil de Estudiante & Créditos del Proyecto</Text>
        </View>

        {/* Tarjeta de Descripción del Estudiante */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>👤 Perfil del Estudiante</Text>
          
          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Estudiante:</Text>
            <Text style={styles.profileValue}>María José</Text>
          </View>

          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Materia / Asignatura:</Text>
            <Text style={styles.profileValue}>Dispositivos Móviles</Text>
          </View>

          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Carrera:</Text>
            <Text style={styles.profileValue}>Ingeniería de Software / Sistemas</Text>
          </View>

          <View style={styles.profileRow}>
            <Text style={styles.profileLabel}>Semestre / Nivel:</Text>
            <Text style={styles.profileValue}>Desarrollo Móvil Avanzado</Text>
          </View>

          <View style={styles.bioContainer}>
            <Text style={styles.bioTitle}>Biografía y Propósito:</Text>
            <Text style={styles.bioText}>
              Estudiante apasionada por la creación de soluciones móviles multiplataforma. Este proyecto representa la aplicación práctica de los conceptos de diseño de interfaces UI/UX, arquitectura modular y navegación avanzada en React Native con Expo SDK 54.
            </Text>
          </View>
        </View>

        {/* Tarjeta del Proyecto MiTri */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📱 Proyecto MiTri App</Text>
          <Text style={styles.cardBody}>
            <Text style={styles.boldText}>MiTri</Text> es una aplicación móvil concebida como tributo interactivo a las selecciones de fútbol internacional (Ecuador 🇪🇨, España 🇪🇸, Argentina 🇦🇷). 
          </Text>
          <Text style={[styles.cardBody, { marginTop: 8 }]}>
            Permite explorar la historia mundialista, alineaciones, directores técnicos y estadísticas en una interfaz moderna y fluida.
          </Text>
        </View>

        {/* Especificaciones Técnicas */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🛠️ Especificaciones del Entorno</Text>
          <Text style={styles.techText}>• Framework: React Native (Expo SDK 54)</Text>
          <Text style={styles.techText}>• Enrutamiento: Expo Router v6</Text>
          <Text style={styles.techText}>• Lenguaje: TypeScript (~95%)</Text>
          <Text style={styles.techText}>• Componentes: Arquitectura Modular decoupled en components/</Text>
        </View>

        {/* Pie de Página */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Desarrollado con ❤️ para Dispositivos Móviles</Text>
          <Text style={styles.footerSub}>2026 • Todos los Derechos Reservados</Text>
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
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  studentAvatarCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FFD100',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  studentAvatarEmoji: {
    fontSize: 34,
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
    marginBottom: 12,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  profileLabel: {
    fontSize: 13,
    color: '#64748B',
    fontWeight: '600',
  },
  profileValue: {
    fontSize: 13,
    color: '#002B49',
    fontWeight: '800',
  },
  bioContainer: {
    marginTop: 12,
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  bioTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#002B49',
    marginBottom: 4,
  },
  bioText: {
    fontSize: 13,
    color: '#475569',
    lineHeight: 19,
  },
  cardBody: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 21,
  },
  boldText: {
    fontWeight: '800',
    color: '#002B49',
  },
  techText: {
    fontSize: 13,
    color: '#475569',
    marginVertical: 4,
  },
  footer: {
    paddingVertical: 28,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#002B49',
  },
  footerSub: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
});
