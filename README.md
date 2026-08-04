# CNE Ecuador 🇪🇨🗳️
### *Aplicación Móvil Oficial para la Consulta Electoral y Escrutinio en Tiempo Real*

![CNE Ecuador Logo](./assets/images/CNE.png)

[![React Native](https://img.shields.io/badge/React_Native-0.81-blue.svg?logo=react)](https://reactnative.dev/)
[![Expo SDK](https://img.shields.io/badge/Expo_SDK-v54.0-000000.svg?logo=expo)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Descripción General

**CNE Ecuador** es una aplicación móvil desarrollada en **React Native** con **Expo SDK 54**, concebida como el portal oficial de información cívica y electoral para las **Elecciones Presidenciales de Ecuador 2026**.

El aplicativo proporciona a la ciudadanía una experiencia fluida, accesible y moderna para consultar la guía del proceso electoral, ubicar recintos de votación en el Distrito Metropolitano de Quito mediante un **mapa interactivo**, examinar a fondo las propuestas y planes de gobierno de los candidatos a la Presidencia, y dar seguimiento al escrutinio oficial en vivo a través de un **diagrama de barras horizontal**.

---

## ✨ Características Principales de la Aplicación

### 1. 🟡 Pantalla de Bienvenida Nativa e Animada (Splash Screen CNE)
- **Splash Nativo de Expo:** Carga inicial nativa optimizada con el isotipo oficial del CNE sobre fondo azul institucional (`#002B49`).
- **Secuencia Animada:** Transición fluida a la pantalla de bienvenida con el logotipo corporativo, el lema institucional *"Garantía de la Democracia"* y el banner de estado *"Elecciones 2026 - En Vivo"*.

### 2. 📋 Pestaña Home: Guía Electoral & Mapa Interactivo de Quito (`app/(tabs)/index.tsx`)
- **Resumen Interactivo del Proceso Electoral:** 
  - Explicación cronológica en 5 pasos (1. Consulta de recinto, 2. Presentación de cédula/pasaporte, 3. Sufragio en biombo, 4. Depósito en urnas, 5. Firma y retiro del certificado).
  - Información sobre voto obligatorio (18-64 años) y voto facultativo (16-17 años, 65+ años, personas con discapacidad).
- **Buscador & Filtros por Sectores:**
  - Buscador predictivo en tiempo real por nombre de recinto, dirección o parroquia.
  - Filtro por sectores del Distrito Metropolitano de Quito (*Norte, Centro-Norte, Sur, Valles*).
- **Mapa Interactivo del DMQ:**
  - Lienzo visual georreferenciado con accidentes geográficos de la ciudad (Volcán Pichincha, Valles, ejes viales).
  - Marcadores animados (*Pins*) para recintos icónicos (Universidad Central, Colegio Benalcázar, USFQ Cumbayá, UE Quitumbe, Centro de Convenciones Bicentenario, Colegio Técnico Yaruquí).
  - Ficha detallada por recinto con indicación de Juntas Varones/Mujeres, parroquia y número de electores empadronados.

### 3. 👥 Pestaña Candidatos: Propuestas & Planes de Gobierno (`app/(tabs)/espana.tsx`)
- **Perfiles de los Candidatos Presidenciales:**
  - Ficha completa de los 3 binomios oficiales: **Daniel Noboa Azín** (ADN Lista 52), **Luisa González Alcívar** (RC Lista 5) y **Jan Topic Feraud** (SUMA Lista 23).
  - Lema de campaña, colores oficiales, lista política y porcentaje de intención de voto.
- **Desglose de Propuestas por Ejes:**
  - Propuestas clasificadas por categorías (Seguridad e Inteligencia, Empleo, Salud y Medicinas, Educación Gratuita, Infraestructura Energética, Estado Digital).
- **Matriz de Comparativa Rápida:**
  - Cuadro comparativo dinámico para examinar y alternar entre los candidatos con un solo toque.

### 4. 📊 Pestaña Estadísticas: Escrutinio & Diagrama de Barras (`app/(tabs)/explore.tsx`)
- **Destacado del Líder del Conteo:**
  - Tarjeta en tiempo real que resalta al candidato que encabeza la votación y el margen de diferencia con el segundo lugar.
- **Diagrama de Barras Horizontal:**
  - Gráfico nativo animado de barras horizontales con el porcentaje y número exacto de votos válidos computados.
  - Filtros dinámicos de resultados por zona geográfica (*Nacional, Pichincha/Quito, Guayas, Exterior*).
- **Métricas del Conteo Oficial CNE:**
  - Indicadores globales de actas escrutadas (98.4%), participación ciudadana (83.7%), ausentismo (16.3%), votos en blanco y votos nulos.

---

## 🛠️ Stack Tecnológico

| Tecnología | Descripción |
| :--- | :--- |
| **React Native 0.81** | Framework base para el desarrollo móvil multiplataforma (iOS & Android). |
| **Expo SDK 54** | Ecosistema de desarrollo con *New Architecture* activada. |
| **Expo Router v6** | Sistema de navegación declarativo basado en archivos (`app/`). |
| **TypeScript 5.9** | Tipado estático estricto en toda la capa de componentes y modelos. |
| **React Native Custom Canvas & Styling** | Componentes de UI estilizados nativamente con `StyleSheet` y respuesta háptica. |

---

## 🏗️ Arquitectura y Estructura del Código

El proyecto sigue una arquitectura **modular y desacoplada**, organizando las rutas en Expo Router y centralizando los datos en una capa única (`data/cne-data.ts`):

```text
Tri/
├── app/                        # Rutas y páginas de Expo Router
│   ├── (tabs)/                 # Navegación por pestañas inferiores (Tab Bar)
│   │   ├── _layout.tsx         # Configuración del Tab Bar institucional CNE
│   │   ├── index.tsx           # Home: Guía de sufragio + Buscador y Mapa de Quito
│   │   ├── espana.tsx          # Candidatos: Planes de gobierno y propuestas
│   │   ├── explore.tsx         # Estadísticas: Diagrama de barras horizontal y escrutinio
│   │   └── examen.tsx          # Componente UI secundario
│   ├── _layout.tsx             # Root layout con custom Splash Screen CNE
│   └── modal.tsx               # Componente Modal genérico
├── assets/                     # Recursos gráficos e imágenes
│   └── images/                 # Isotipo oficial CNE.png y assets visuales
├── components/                 # Componentes modulares reutilizables
│   ├── custom-splash-screen.tsx # Splash Screen animado institucional CNE
│   ├── haptic-tab.tsx          # Botón con respuesta háptica en navegación
│   ├── themed-text.tsx         # Tipografía adaptativa a temas
│   └── themed-view.tsx         # Contenedores adaptativos a temas
├── constants/
│   └── theme.ts                # Sistema de colores corporativos e íconos
├── data/
│   └── cne-data.ts             # Data Layer centralizada (Pasos, Recintos Quito, Candidatos, Stats)
├── app.json                    # Configuración de Expo, New Arch y Splash nativo
├── package.json                # Dependencias y scripts de ejecución
└── tsconfig.json               # Configuración de TypeScript
```

---

## 🎨 Sistema de Diseño Institucional CNE

El sistema visual utiliza la paleta de colores oficial del Estado ecuatoriano y del CNE:

- **Azul Institucional (`#002B49`):** Representa la seriedad, la estabilidad democrática y la solidez institucional.
- **Amarillo Tricolor (`#FFD100`):** Destaca los acentos principales, títulos de cabecera y botones de acción principal.
- **Rojo Accent (`#CE1126`):** Utilizado en insignias de estado en vivo y alertas del escrutinio.
- **Gris de Fondo (`#F8FAFC`):** Proporciona un contraste óptimo para la lectura fluida de propuestas y estadísticas.

---

## 🚀 Guía de Instalación y Ejecución Local

### Requisitos Previos
- Tener instalado **Node.js** (versión LTS v18 o superior).
- Tener instalado **npm** o **yarn**.
- Tener la app **Expo Go** instalada en tu dispositivo móvil ([Android en Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS en App Store](https://apps.apple.com/app/expo-go/id982107779)).

### Pasos para Ejecutar:

1. **Clonar o navegar al repositorio:**
   ```bash
   git clone https://github.com/Leviathan-19/Tri-Go.git
   cd Tri
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo de Expo:**
   ```bash
   npm run start
   ```
   *(O alternativamente: `npx expo start`)*

4. **Visualizar la aplicación:**
   - **En tu celular (Recomendado):** Abre la aplicación **Expo Go** y escanea el código QR que aparece en la terminal.
   - **En Navegador Web:** Presiona la tecla `w` en la terminal.
   - **En Emulador Android:** Presiona la tecla `a` en la terminal (requiere Android Studio).
   - **En Simulador iOS:** Presiona la tecla `i` en la terminal (requiere macOS y Xcode).

---

## 🧪 Verificación de Código

Para verificar la integridad del código TypeScript y asegurarse de que no existan errores de compilación:

```bash
npx tsc --noEmit
```

---

## 📦 Compilación y Generación de APK para Android

Para generar un paquete ejecutable APK utilizando **EAS Build**:

```bash
npx eas build -p android --profile preview
```

---

## 📄 Licencia

Este proyecto se distribuye bajo la Licencia **MIT**. Desarrollado como una herramienta de apoyo cívico e informativo para la ciudadanía ecuatoriana 🇪🇨.

**¡Garantía de la Democracia! 🇪🇨🗳️**
