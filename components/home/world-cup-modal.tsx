import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { WorldCupData } from '@/data/team-info';

interface WorldCupModalProps {
  selectedCup: WorldCupData | null;
  onClose: () => void;
}

/**
 * Componente WorldCupModal
 * Modal emergente que presenta los partidos, director técnico, goleadores
 * y los aspectos más sobresalientes del mundial seleccionado.
 */
export const WorldCupModal: React.FC<WorldCupModalProps> = ({ selectedCup, onClose }) => {
  if (!selectedCup) return null;

  return (
    <Modal
      visible={selectedCup !== null}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Encabezado del Modal con botón de cierre */}
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalYear}>Mundial {selectedCup.year}</Text>
              <Text style={styles.modalHost}>{selectedCup.host}</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          {/* Cuerpo del Modal con detalles informativos */}
          <ScrollView style={styles.modalBody}>
            <View style={styles.modalSection}>
              <Text style={styles.modalSectionLabel}>Director Técnico:</Text>
              <Text style={styles.modalSectionValue}>{selectedCup.coach}</Text>
            </View>

            <View style={styles.modalSection}>
              <Text style={styles.modalSectionLabel}>Resultado Obtenido:</Text>
              <Text style={styles.modalResultValue}>{selectedCup.result}</Text>
            </View>

            <View style={styles.modalSection}>
              <Text style={styles.modalSectionLabel}>Hito Histórico:</Text>
              <Text style={styles.modalSectionValue}>{selectedCup.milestone}</Text>
            </View>

            <View style={styles.modalSection}>
              <Text style={styles.modalSectionLabel}>Goleadores Ecuatorianos:</Text>
              <Text style={styles.modalSectionValue}>{selectedCup.topScorer}</Text>
            </View>

            <View style={styles.modalSection}>
              <Text style={styles.modalSectionLabel}>Partidos Disputados:</Text>
              {selectedCup.matches.map((match, idx) => (
                <View key={idx} style={styles.matchPill}>
                  <Text style={styles.matchText}>⚽ {match}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Botón de cierre en la parte inferior */}
          <TouchableOpacity style={styles.modalDoneButton} onPress={onClose}>
            <Text style={styles.modalDoneButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '80%',
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  modalYear: {
    fontSize: 22,
    fontWeight: '900',
    color: '#002B49',
  },
  modalHost: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '600',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#475569',
    fontWeight: '800',
  },
  modalBody: {
    marginVertical: 16,
  },
  modalSection: {
    marginBottom: 14,
  },
  modalSectionLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '700',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  modalSectionValue: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '600',
  },
  modalResultValue: {
    fontSize: 15,
    color: '#002B49',
    fontWeight: '800',
  },
  matchPill: {
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  matchText: {
    fontSize: 13,
    color: '#0F172A',
    fontWeight: '600',
  },
  modalDoneButton: {
    backgroundColor: '#002B49',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalDoneButtonText: {
    color: '#FFD100',
    fontSize: 16,
    fontWeight: '800',
  },
});
