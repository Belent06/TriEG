import React, { useState, useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { CustomSplashScreen } from '@/components/custom-splash-screen';

// Evita que el Splash Screen nativo de Expo se oculte automáticamente antes de cargar los recursos.
SplashScreen.preventAutoHideAsync().catch(() => {});

// Configuración de ancla para la navegación en Expo Router
export const unstable_settings = {
  anchor: '(tabs)',
};

/**
 * Componente RootLayout (Layout Raíz del Proyecto)
 * Coordina la carga inicial, la pantalla de Splash Screen personalizada,
 * el tema visual (Claro/Oscuro) y el contenedor de navegación Stack.
 */
export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // Estado para controlar la visibilidad del Splash Screen animado inicial
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Ocultar el Splash Screen nativo una vez que el componente de React se monta
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  // Si el estado showSplash es verdadero, renderizamos el Splash Screen animado
  if (showSplash) {
    return (
      <CustomSplashScreen
        onFinish={() => setShowSplash(false)}
      />
    );
  }

  // Una vez finalizado el Splash Screen, renderizamos el contenedor principal de la App con Stack y Tabs
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Navegación por Pestañas Principales (Tabs) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Pantalla de Modal Secundaria */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}

