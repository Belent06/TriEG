import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Tabs } from 'expo-router';
import React from 'react';

/**
 * Componente TabLayout (Pestañas Inferiores - CNE Ecuador)
 * Configura la barra de navegación inferior de Expo Router con el estilo CNE Ecuador.
 */

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFD100', // Amarillo CNE / Ecuador
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          backgroundColor: '#002B49', // Azul Institucional CNE
          borderTopColor: 'rgba(255, 209, 0, 0.25)',
          height: 64,
          paddingBottom: 8,
          paddingTop: 6,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      {/* 1. Pestaña Home: Bienvenida CNE, Resumen Proceso y Dónde Votar en Quito (Mapa) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />

      {/* 2. Pestaña Candidatos: 3 Candidatos Presidenciales y Propuestas */}
      <Tabs.Screen
        name="espana"
        options={{
          title: 'Candidatos',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="person.3.fill" color={color} />,
        }}
      />

      {/* 3. Componente Examen UI (Oculto) */}
      <Tabs.Screen
        name="examen"
        options={{
          title: 'Examen UI',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="cube.box.fill" color={color} />,
          href: null,
        }}
      />

      {/* 4. Pestaña Estadísticas: Diagrama de barras horizontal (Quién va ganando) */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Estadísticas',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="chart.bar.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
