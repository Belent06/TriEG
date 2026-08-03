import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Tabs } from 'expo-router';
import React from 'react';

/**
 * Componente TabLayout (Pestañas Inferiores)
 * Configura la barra de navegación inferior de Expo Router.
 */

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFD100',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          backgroundColor: '#002B49',
          borderTopColor: 'rgba(255, 209, 0, 0.2)',
          height: 62,
          paddingBottom: 8,
          paddingTop: 6,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      {/* 1. Pestaña Home: Bienvenida y Tarjeta Argentina */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />

      {/* 2. Pestaña de España: Bandera, Datos y Lista de Jugadores */}
      <Tabs.Screen
        name="espana"
        options={{
          title: 'España',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="flag.fill" color={color} />,
        }}
      />

      {/* 3. Colección completa de Componentes Frontend UI */}
      <Tabs.Screen
        name="examen"
        options={{
          title: 'Examen UI',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="cube.box.fill" color={color} />,
        }}
      />

      {/* 4. Pestaña Acerca de: Perfil de estudiante*/}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Acerca de',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="info.circle.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}

