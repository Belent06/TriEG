import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

/**
 * Pantalla Acerca de (ExploreScreen - app/(tabs)/explore.tsx)
 * Contiene únicamente el Perfil de la Estudiante Desarrolladora,
 * el espacio reservado para video/foto circular y la información académica.
 */
export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* Encabezado Principal */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Acerca del Desarrollador</Text>
          <Text style={styles.headerSubtitle}>Perfil de Estudiante & Presentación</Text>
        </View>

        {/* Contenedor del Perfil del Desarrollador */}
        <View style={styles.profileCard}>

          {/* Espacio Reservado para Video o Foto Circular */}
          <View style={styles.videoSectionWrapper}>
            <TouchableOpacity style={styles.videoCircleContainer} activeOpacity={0.85}>
              <View style={styles.videoInnerCircle}>
                <Text style={styles.playIcon}>▶</Text>
                <Text style={styles.videoLabel}>Espacio para Video</Text>
                <Text style={styles.videoSubLabel}>(Circular)</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.videoInstructions}>🎥 Espacio asignado para adjuntar video de presentación</Text>
          </View>

          {/* Detalles Académicos de la Estudiante */}
          <View style={styles.infoDetailsContainer}>
            <Text style={styles.studentNameTitle}>María Belén Tashiguano Ramírez</Text>

            <View style={styles.profileRow}>
              <Text style={styles.profileLabel}>📚 Materia:</Text>
              <Text style={styles.profileValue}>Dispositivos Móviles</Text>
            </View>

            <View style={styles.profileRow}>
              <Text style={styles.profileLabel}>🎓 Carrera:</Text>
              <Text style={styles.profileValue}>Ingeniería de Sistemas de Información</Text>
            </View>

            <View style={styles.profileRow}>
              <Text style={styles.profileLabel}>🗓️ Nivel / Semestre:</Text>
              <Text style={styles.profileValue}>Décimo Semestre</Text>
            </View>
          </View>
        </View>

        {/* Pie de Página */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Desarrollado para Dispositivos Móviles</Text>
          <Text style={styles.footerSub}>10mo Semestre • Ingeniería de Sistemas de Información</Text>
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
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
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
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  videoSectionWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  videoCircleContainer: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#002B49',
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 3,
    borderColor: '#FFD100',
  },
  videoInnerCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 79,
    backgroundColor: '#003A63',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 209, 0, 0.4)',
    borderStyle: 'dashed',
  },
  playIcon: {
    fontSize: 32,
    color: '#FFD100',
    marginBottom: 4,
  },
  videoLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },
  videoSubLabel: {
    color: '#FFD100',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
  },
  videoInstructions: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  infoDetailsContainer: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  studentNameTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
    textAlign: 'center',
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#FFD100',
  },
  profileRow: {
    marginBottom: 10,
  },
  profileLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  profileValue: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '800',
    marginTop: 2,
  },
  footer: {
    paddingVertical: 28,
    alignItems: 'center',
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
