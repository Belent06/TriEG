import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Componente BienvenidaArgentina
 * 1. Sección de Bienvenida
 * 2. Sección de Bandera de Argentina (después de Bienvenida)
 * 3. Tarjeta de Subcampeón Argentina (DT, Capitán y Final 1-2)
 */
export const WelcomeArgentinaCard: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* SECCIÓN 1: BIENVENIDA */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>👋 ¡Bienvenida, Belén!</Text>
        <Text style={styles.welcomeBody}>
          Tu aplicación sobre la Selección Ecuatoriana y grandes selecciones del fútbol mundial.
        </Text>
      </View>

      {/* SECCIÓN DE LA BANDERA DE ARGENTINA (DESPUÉS DE BIENVENIDA) */}
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
          "La Albiceleste": Simboliza el cielo azul, las nubes blancas y el Sol de Mayo en el centro.
        </Text>
      </View>

      {/* SECCIÓN 2: TARJETA DE SUBCAMPEÓN ARGENTINA */}
      <View style={styles.argentinaCard}>
        {/* Encabezado con Título y Badge */}
        <View style={styles.argentinaHeaderRow}>
          <Text style={styles.flagEmoji}>🏆</Text>
          <View style={styles.argentinaTitleBox}>
            <Text style={styles.argentinaTitle}>Selección Argentina</Text>
            <View style={styles.subcampeonBadge}>
              <Text style={styles.subcampeonText}>🥈 Subcampeón Mundial</Text>
            </View>
          </View>
        </View>

        {/* Detalles de la Ficha: DT, Capitán y Final 1-2 */}
        <View style={styles.argentinaDetailsGrid}>
          <View style={styles.argDetailItem}>
            <Text style={styles.argDetailKey}>📋 Director Técnico:</Text>
            <Text style={styles.argDetailVal}>Lionel Scaloni</Text>
          </View>

          <View style={styles.argDetailItem}>
            <Text style={styles.argDetailKey}>👑 Capitán:</Text>
            <Text style={styles.argDetailVal}>Lionel Messi</Text>
          </View>

          <View style={styles.argDetailItem}>
            <Text style={styles.argDetailKey}>⚽ Marcador Final:</Text>
            <Text style={styles.finalScoreVal}>Final 1 - 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});
