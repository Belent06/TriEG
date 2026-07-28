import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export type TabType = 'mundiales' | 'records' | 'plantilla';

interface NavTabsProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

/**
 * Componente NavTabs
 * Barra de pestañas interactiva para alternar entre Copas del Mundo, Récords y Figuras.
 */
export const NavTabs: React.FC<NavTabsProps> = ({ activeTab, onSelectTab }) => {
  return (
    <View style={styles.navTabsContainer}>
      <TouchableOpacity
        style={[styles.navTab, activeTab === 'mundiales' && styles.navTabActive]}
        onPress={() => onSelectTab('mundiales')}>
        <Text style={[styles.navTabText, activeTab === 'mundiales' && styles.navTabTextActive]}>
          🏆 Copas del Mundo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navTab, activeTab === 'records' && styles.navTabActive]}
        onPress={() => onSelectTab('records')}>
        <Text style={[styles.navTabText, activeTab === 'records' && styles.navTabTextActive]}>
          ⭐ Récords
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navTab, activeTab === 'plantilla' && styles.navTabActive]}
        onPress={() => onSelectTab('plantilla')}>
        <Text style={[styles.navTabText, activeTab === 'plantilla' && styles.navTabTextActive]}>
          ⚽ Figuras
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navTabsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#E2E8F0',
    borderRadius: 12,
    padding: 4,
  },
  navTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  navTabActive: {
    backgroundColor: '#002B49',
  },
  navTabText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
  },
  navTabTextActive: {
    color: '#FFD100',
  },
});
