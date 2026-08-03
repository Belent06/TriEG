import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';

/**
 * Componente TabLayout (Navegación por Pestañas Inferiores)
 * Configura la barra de navegación inferior (Bottom Tabs Navigation) de Expo Router.
 * 
 * Propiedades clave utilizadas:
 * - tabBarActiveTintColor: Color del texto e ícono cuando la pestaña está activa (#FFD100 - Amarillo Tri)
 * - tabBarInactiveTintColor: Color cuando la pestaña no está seleccionada (#94A3B8)
 * - tabBarStyle: Estilos personalizados para la barra de navegación (color de fondo azul marino #002B49, altura y bordes)
 * - headerShown: Define si se muestra el header nativo de la pantalla (false para usar headers personalizados)
 * - tabBarButton: Componente personalizado para manejar la respuesta táctil al presionar una pestaña
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
      {/* 1. Pestaña Principal: Home (Inicio con Bienvenida y Tarjeta Argentina) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="house.fill" color={color} />,
        }}
      />
      
      {/* 2. Pestaña de España: Bandera, DT Luis de la Fuente y Lista de Jugadores */}
      <Tabs.Screen
        name="espana"
        options={{
          title: 'España',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="flag.fill" color={color} />,
        }}
      />

      {/* 3. Nueva Pestaña Muestrario de Examen: Colección completa de Componentes Frontend UI */}
      <Tabs.Screen
        name="examen"
        options={{
          title: 'Examen UI',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="cube.box.fill" color={color} />,
        }}
      />

      {/* 4. Pestaña Acerca de: Perfil de la estudiante María Belén Tashiguano y espacio de video/foto */}
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

