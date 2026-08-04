import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';

type CategoriaEjemplo = 'todos' | 'formularios' | 'feedback' | 'listas' | 'layout' | 'imagenes';

/**
 * Pantalla de Muestrario de Componentes UI para Examen
 */
export default function ExamenScreen() {
  // Dimensiones dinámicas de la pantalla (Layout Responsive)
  const { width: screenWidth } = useWindowDimensions();

  // Estado para la Barra Superior de Categorías
  const [categoriaActiva, setCategoriaActiva] = useState<CategoriaEjemplo>('todos');

  // ==========================================
  // ESTADOS PARA FORMULARIO Y VALIDACIÓN
  // ==========================================
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [switchNotificaciones, setSwitchNotificaciones] = useState(true);
  const [checkboxAcepto, setCheckboxAcepto] = useState(false);

  // Estado para el Dropdown / Picker Modal
  const [posicionSeleccionada, setPosicionSeleccionada] = useState('Delantero');
  const [pickerModalVisible, setPickerModalVisible] = useState(false);
  const opcionesPosicion = ['Portero', 'Defensa Central', 'Lateral', 'Centrocampista', 'Delantero'];

  // ==========================================
  // ESTADOS PARA FEEDBACK VISUAL Y MODAL
  // ==========================================
  const [loadingState, setLoadingState] = useState(false);
  const [modalFlotanteVisible, setModalFlotanteVisible] = useState(false);
  const [indicatorColor, setIndicatorColor] = useState('#002B49');

  // ==========================================
  // ESTADO PARA MANEJO DE IMÁGENES
  // ==========================================
  const [imgLoading, setImgLoading] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Validar Email en tiempo real
  const handleEmailChange = (text: string) => {
    setEmailInput(text);
    if (text.length > 0 && !text.includes('@')) {
      setEmailError('El correo electrónico debe incluir @');
    } else {
      setEmailError('');
    }
  };

  // Disparar Alertas Nativas del Sistema (Alert.alert)
  const mostrarAlertaSimple = () => {
    Alert.alert(
      'ℹ️ Alerta Informativa',
      'Ejemplo de alerta nativa con un solo botón de confirmación.',
      [{ text: 'Entendido', onPress: () => console.log('Alerta confirmada') }]
    );
  };

  const mostrarAlertaConfirmacion = () => {
    Alert.alert(
      '❓ Confirmación de Examen',
      '¿Deseas enviar los datos del formulario?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí, Enviar', onPress: () => Alert.alert('Éxito', 'Formulario enviado correctamente 🚀') },
      ]
    );
  };

  // Simular carga asíncrona (ActivityIndicator)
  const ejecutarSimulacionCarga = () => {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
      Alert.alert('✅ Proceso Completado', 'La carga simulada ha finalizado con éxito.');
    }, 2000);
  };

  // Datos para FlatList Dinámica
  const listaEquipos = [
    { id: '1', nombre: 'Ecuador 🇪🇨', copa: 'Catar 2022', ranking: '#27 FIFA' },
    { id: '2', nombre: 'España 🇪🇸', copa: 'Eurocopa 2024', ranking: '#3 FIFA' },
    { id: '3', nombre: 'Argentina 🇦🇷', copa: 'Qatar 2022', ranking: '#1 FIFA' },
    { id: '4', nombre: 'Francia 🇫🇷', copa: 'Rusia 2018', ranking: '#2 FIFA' },
  ];

  // Datos para SectionList Dinámica (Agrupada por Categorías)
  const seccionesPlantilla = [
    {
      title: '⚽ Delanteros Estrellas',
      data: [
        { id: 'd1', name: 'Lamine Yamal', sub: 'Extremo Derecho • FC Barcelona' },
        { id: 'd2', name: 'Enner Valencia', sub: 'Capitán • SC Internacional' },
      ],
    },
    {
      title: '🎯 Centrocampistas',
      data: [
        { id: 'c1', name: 'Rodri Hernández', sub: 'Pivote • Manchester City' },
        { id: 'c2', name: 'Moisés Caicedo', sub: 'Pivote • Chelsea FC' },
      ],
    },
    {
      title: '🛡️ Defensores Líderes',
      data: [
        { id: 'def1', name: 'Piero Hincapié', sub: 'Defensa Central • Bayer Leverkusen' },
        { id: 'def2', name: 'Dani Carvajal', sub: 'Lateral Derecho • Real Madrid' },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#002B49" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* ENCABEZADO DE LA SECCIÓN */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Muestrario</Text>
          <Text style={styles.headerSubtitle}>Componentes Nativos y Ejemplos Prácticos React Native / Expo</Text>
        </View>

        {/* =========================================================================
            BARRA SUPERIOR DE FILTROS CATEGORIZADOS (TOP CATEGORY BAR)
           ========================================================================= */}
        <View style={styles.topBarContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.topBarScrollContent}>
            <Pressable
              style={[styles.topBarTab, categoriaActiva === 'todos' && styles.topBarTabActive]}
              onPress={() => setCategoriaActiva('todos')}>
              <Text style={[styles.topBarTabText, categoriaActiva === 'todos' && styles.topBarTabTextActive]}>
                🌟 Todos
              </Text>
            </Pressable>

            <Pressable
              style={[styles.topBarTab, categoriaActiva === 'formularios' && styles.topBarTabActive]}
              onPress={() => setCategoriaActiva('formularios')}>
              <Text style={[styles.topBarTabText, categoriaActiva === 'formularios' && styles.topBarTabTextActive]}>
                📝 Formularios
              </Text>
            </Pressable>

            <Pressable
              style={[styles.topBarTab, categoriaActiva === 'feedback' && styles.topBarTabActive]}
              onPress={() => setCategoriaActiva('feedback')}>
              <Text style={[styles.topBarTabText, categoriaActiva === 'feedback' && styles.topBarTabTextActive]}>
                🔔 Feedback
              </Text>
            </Pressable>

            <Pressable
              style={[styles.topBarTab, categoriaActiva === 'listas' && styles.topBarTabActive]}
              onPress={() => setCategoriaActiva('listas')}>
              <Text style={[styles.topBarTabText, categoriaActiva === 'listas' && styles.topBarTabTextActive]}>
                📜 Listas
              </Text>
            </Pressable>

            <Pressable
              style={[styles.topBarTab, categoriaActiva === 'layout' && styles.topBarTabActive]}
              onPress={() => setCategoriaActiva('layout')}>
              <Text style={[styles.topBarTabText, categoriaActiva === 'layout' && styles.topBarTabTextActive]}>
                📐 Layout
              </Text>
            </Pressable>

            <Pressable
              style={[styles.topBarTab, categoriaActiva === 'imagenes' && styles.topBarTabActive]}
              onPress={() => setCategoriaActiva('imagenes')}>
              <Text style={[styles.topBarTabText, categoriaActiva === 'imagenes' && styles.topBarTabTextActive]}>
                🖼️ Imágenes
              </Text>
            </Pressable>
          </ScrollView>
        </View>

        {/* =========================================================================
            BLOQUE 1: FORMULARIO COMPLETO (TextInput, Switch, Dropdown Modal, Checkbox)
           ========================================================================= */}
        {(categoriaActiva === 'todos' || categoriaActiva === 'formularios') && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>📝 1. Formulario Completo y Validaciones</Text>
            <Text style={styles.sectionDesc}>
              Ejemplos de captura de datos con TextInput, Switch, Selector Modal y Checkbox personalizado.
            </Text>

            {/* Input 1: Campo Simple de Texto */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Nombre del Estudiante:</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Ej. María Belén Tashiguano"
                placeholderTextColor="#94A3B8"
                value={nombreEstudiante}
                onChangeText={setNombreEstudiante}
              />
            </View>

            {/* Input 2: Email con Validación en Tiempo Real */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Correo Electrónico (Con Validación):</Text>
              <TextInput
                style={[styles.textInput, emailError ? styles.inputErrorBorder : null]}
                placeholder="ejemplo@correo.com"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                value={emailInput}
                onChangeText={handleEmailChange}
              />
              {emailError ? <Text style={styles.errorText}>⚠️ {emailError}</Text> : null}
            </View>

            {/* Input 3: Contraseña con Toggle (secureTextEntry) */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Contraseña Segura (Toggle Visible):</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={[styles.textInput, { flex: 1 }]}
                  placeholder="Ingresa tu clave"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showPassword}
                  value={passwordInput}
                  onChangeText={setPasswordInput}
                />
                <Pressable
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Text style={styles.eyeButtonText}>{showPassword ? '👁️ Ocultar' : '🔒 Ver'}</Text>
                </Pressable>
              </View>
            </View>

            {/* Switch / Toggle */}
            <View style={styles.switchRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.switchLabel}>Notificaciones del Examen</Text>
                <Text style={styles.switchSubLabel}>Estado: {switchNotificaciones ? 'ACTIVADO 🔔' : 'DESACTIVADO 🔕'}</Text>
              </View>
              <Switch
                value={switchNotificaciones}
                onValueChange={setSwitchNotificaciones}
                trackColor={{ false: '#CBD5E1', true: '#FFD100' }}
                thumbColor={switchNotificaciones ? '#002B49' : '#F1F5F9'}
              />
            </View>

            {/* Picker / Dropdown desplegable usando Modal */}
            {/* Input 1: Campo Simple de Texto */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Nombre del Estudiante:</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Ej. María Belén Tashiguano"
                placeholderTextColor="#94A3B8"
                value={nombreEstudiante}
                onChangeText={setNombreEstudiante}
              />
            </View>

            {/* Input 2: Email con Validación en Tiempo Real */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Correo Electrónico (Con Validación):</Text>
              <TextInput
                style={[styles.textInput, emailError ? styles.inputErrorBorder : null]}
                placeholder="ejemplo@correo.com"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                value={emailInput}
                onChangeText={handleEmailChange}
              />
              {emailError ? <Text style={styles.errorText}>⚠️ {emailError}</Text> : null}
            </View>

            {/* Input 3: Contraseña con Toggle (secureTextEntry) */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Contraseña Segura (Toggle Visible):</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={[styles.textInput, { flex: 1 }]}
                  placeholder="Ingresa tu clave"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showPassword}
                  value={passwordInput}
                  onChangeText={setPasswordInput}
                />
                <Pressable
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Text style={styles.eyeButtonText}>{showPassword ? '👁️ Ocultar' : '🔒 Ver'}</Text>
                </Pressable>
              </View>
            </View>

            {/* Switch / Toggle */}
            <View style={styles.switchRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.switchLabel}>Notificaciones del Examen</Text>
                <Text style={styles.switchSubLabel}>Estado: {switchNotificaciones ? 'ACTIVADO 🔔' : 'DESACTIVADO 🔕'}</Text>
              </View>
              <Switch
                value={switchNotificaciones}
                onValueChange={setSwitchNotificaciones}
                trackColor={{ false: '#CBD5E1', true: '#FFD100' }}
                thumbColor={switchNotificaciones ? '#002B49' : '#F1F5F9'}
              />
            </View>

            {/* Picker / Dropdown desplegable usando Modal */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Seleccionar Posición de Juego (Picker Dropdown):</Text>
              <Pressable
                style={styles.dropdownSelector}
                onPress={() => setPickerModalVisible(true)}>
                <Text style={styles.dropdownSelectorText}>⚽ {posicionSeleccionada}</Text>
                <Text style={styles.dropdownArrow}>▼</Text>
              </Pressable>
            </View>

            {/* Checkbox Personalizado (Pressable + View) */}
            <Pressable
              style={styles.checkboxRow}
              onPress={() => setCheckboxAcepto(!checkboxAcepto)}>
              <View style={[styles.checkboxBox, checkboxAcepto && styles.checkboxBoxChecked]}>
                {checkboxAcepto && <Text style={styles.checkmarkText}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>Acepto los términos y condiciones</Text>
            </Pressable>
          </View>
        )}

        {/* =========================================================================
            BLOQUE 2: FEEDBACK VISUAL Y MODALES (ActivityIndicator, Modal, Alerts, Pressable)
           ========================================================================= */}
        {(categoriaActiva === 'todos' || categoriaActiva === 'feedback') && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>🔔 2. Feedback Visual y Diálogos Modales</Text>
            <Text style={styles.sectionDesc}>
              Uso de ActivityIndicator para cargas, Modal emergente y Alert nativo del sistema.
            </Text>

            {/* Indicador de Carga (ActivityIndicator) */}
            <View style={styles.feedbackBox}>
              <Text style={styles.feedbackTitle}>Componente: ActivityIndicator</Text>
              {loadingState ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color={indicatorColor} />
                  <Text style={styles.loadingText}>Cargando proceso simulado...</Text>
                </View>
              ) : (
                <Text style={styles.normalText}>Presiona el botón para probar la animación de carga.</Text>
              )}

              <View style={styles.buttonRow}>
                <Pressable
                  style={({ pressed }) => [styles.actionButton, pressed && styles.btnPressed]}
                  onPress={ejecutarSimulacionCarga}>
                  <Text style={styles.actionButtonText}>⏳ Probar Carga (2s)</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.actionButtonSecondary, pressed && styles.btnPressed]}
                  onPress={() => setIndicatorColor(indicatorColor === '#002B49' ? '#AA1515' : '#002B49')}>
                  <Text style={styles.actionButtonSecText}>🎨 Cambiar Color</Text>
                </Pressable>
              </View>
            </View>

            {/* Alertas Nativas (Alert.alert) */}
            <View style={styles.feedbackBox}>
              <Text style={styles.feedbackTitle}>Componente: Alert Nativa del Sistema</Text>
              <View style={styles.buttonRow}>
                <Pressable
                  style={({ pressed }) => [styles.alertBtn, pressed && styles.btnPressed]}
                  onPress={mostrarAlertaSimple}>
                  <Text style={styles.alertBtnText}>Alerta Simple ℹ️</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [styles.alertBtnConfirm, pressed && styles.btnPressed]}
                  onPress={mostrarAlertaConfirmacion}>
                  <Text style={styles.alertBtnConfirmText}>Confirmación ❓</Text>
                </Pressable>
              </View>
            </View>

            {/* Botón para Abrir Modal Flotante */}
            <Pressable
              style={({ pressed }) => [styles.modalTriggerBtn, pressed && styles.btnPressed]}
              onPress={() => setModalFlotanteVisible(true)}>
              <Text style={styles.modalTriggerText}>🪟 Abrir Modal Flotante Personalizado</Text>
            </Pressable>
          </View>
        )}

        {/* =========================================================================
            BLOQUE 3: LISTAS DINÁMICAS (FlatList, ScrollView Horizontal, SectionList)
           ========================================================================= */}
        {(categoriaActiva === 'todos' || categoriaActiva === 'listas') && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>📜 3. Listas Dinámicas (FlatList & SectionList)</Text>
            <Text style={styles.sectionDesc}>
              Renderizado de datos con FlatList, listas horizontales con ScrollView y agrupaciones con SectionList.
            </Text>

            {/* ScrollView Horizontal */}
            <Text style={styles.subSectionTitle}>↔️ ScrollView Horizontal (Tarjetas Deslizables):</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              <View style={[styles.horizontalCard, { backgroundColor: '#002B49' }]}>
                <Text style={styles.hCardEmoji}>🏆</Text>
                <Text style={styles.hCardTitle}>Copa del Mundo</Text>
                <Text style={styles.hCardSub}>Edición 2026</Text>
              </View>
              <View style={[styles.horizontalCard, { backgroundColor: '#AA1515' }]}>
                <Text style={styles.hCardEmoji}>🇪🇸</Text>
                <Text style={styles.hCardTitle}>Eurocopa 2024</Text>
                <Text style={styles.hCardSub}>Campeón España</Text>
              </View>
              <View style={[styles.horizontalCard, { backgroundColor: '#74ACDF' }]}>
                <Text style={styles.hCardEmoji}>🇦🇷</Text>
                <Text style={styles.hCardTitle}>Copa América</Text>
                <Text style={styles.hCardSub}>Campeón Argentina</Text>
              </View>
            </ScrollView>

            {/* FlatList Dinámica */}
            <Text style={styles.subSectionTitle}>📋 FlatList de Selecciones Destacadas:</Text>
            <FlatList
              data={listaEquipos}
              keyExtractor={(item) => item.id}
              scrollEnabled={false} // Desactivado scroll propio para estar dentro del ScrollView principal
              ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
              renderItem={({ item }) => (
                <View style={styles.flatListItem}>
                  <Text style={styles.flatListTitle}>{item.nombre}</Text>
                  <Text style={styles.flatListSub}>Logro: {item.copa} • {item.ranking}</Text>
                </View>
              )}
            />

            {/* SectionList Dinámica (Grupos) */}
            <Text style={styles.subSectionTitle}>📑 SectionList (Agrupada por Posiciones):</Text>
            <SectionList
              sections={seccionesPlantilla}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.sectionHeaderBox}>
                  <Text style={styles.sectionHeaderText}>{title}</Text>
                </View>
              )}
              renderItem={({ item }) => (
                <View style={styles.sectionListItem}>
                  <Text style={styles.sectionItemName}>{item.name}</Text>
                  <Text style={styles.sectionItemSub}>{item.sub}</Text>
                </View>
              )}
            />
          </View>
        )}

        {/* =========================================================================
            BLOQUE 4: LAYOUT, GRID FLEXBOX, BADGES Y RESPONSIVE
           ========================================================================= */}
        {(categoriaActiva === 'todos' || categoriaActiva === 'layout') && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>📐 4. Layout Flexbox, Grid & Responsive</Text>
            <Text style={styles.sectionDesc}>
              Rejilla adaptable Flexbox, Badges/Chips y dimensiones calculadas dinámicamente.
            </Text>

            <Text style={styles.responsiveInfoText}>
              📐 Ancho actual de pantalla: <Text style={styles.boldText}>{Math.round(screenWidth)}px</Text>
            </Text>

            {/* Rejilla Grid de 2 Columnas con Flexbox */}
            <Text style={styles.subSectionTitle}>🔲 Rejilla (Grid) de 2 Columnas:</Text>
            <View style={styles.gridContainer}>
              <View style={styles.gridCard}>
                <Text style={styles.gridIcon}>⚡</Text>
                <Text style={styles.gridCardTitle}>Rápido</Text>
                <Text style={styles.gridCardSub}>Optimizaciones Flex</Text>
              </View>
              <View style={styles.gridCard}>
                <Text style={styles.gridIcon}>🎨</Text>
                <Text style={styles.gridCardTitle}>Diseño</Text>
                <Text style={styles.gridCardSub}>Sombras y Elevation</Text>
              </View>
              <View style={styles.gridCard}>
                <Text style={styles.gridIcon}>📱</Text>
                <Text style={styles.gridCardTitle}>Responsive</Text>
                <Text style={styles.gridCardSub}>useWindowDimensions</Text>
              </View>
              <View style={styles.gridCard}>
                <Text style={styles.gridIcon}>🛡️</Text>
                <Text style={styles.gridCardTitle}>Seguro</Text>
                <Text style={styles.gridCardSub}>SafeArea & Status</Text>
              </View>
            </View>

            {/* Badges / Chips */}
            <Text style={styles.subSectionTitle}>🏷️ Componentes Badges / Chips:</Text>
            <View style={styles.chipsRow}>
              <View style={[styles.chipPill, { backgroundColor: '#DCFCE7', borderColor: '#86EFAC' }]}>
                <Text style={[styles.chipText, { color: '#166534' }]}>🟢 Activo</Text>
              </View>
              <View style={[styles.chipPill, { backgroundColor: '#FEF3C7', borderColor: '#FDE047' }]}>
                <Text style={[styles.chipText, { color: '#854D0E' }]}>🏆 Campeón</Text>
              </View>
              <View style={[styles.chipPill, { backgroundColor: '#DBEAFE', borderColor: '#93C5FD' }]}>
                <Text style={[styles.chipText, { color: '#1E40AF' }]}>⭐ Destacado</Text>
              </View>
              <View style={[styles.chipPill, { backgroundColor: '#FEE2E2', borderColor: '#FCA5A5' }]}>
                <Text style={[styles.chipText, { color: '#991B1B' }]}>🔥 En Vivo</Text>
              </View>
            </View>
          </View>
        )}

        {/* =========================================================================
            BLOQUE 5: MANEJO DE IMÁGENES (Image con Fallback & ImageBackground)
           ========================================================================= */}
        {(categoriaActiva === 'todos' || categoriaActiva === 'imagenes') && (
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>🖼️ 5. Manejo Avanzado de Imágenes</Text>
            <Text style={styles.sectionDesc}>
              Carga de imágenes locales con placeholders y componentes de fondo ImageBackground.
            </Text>

            {/* Componente Image con Fallback */}
            <View style={styles.imageDemoBox}>
              <Text style={styles.subSectionTitle}>📷 Componente Image Local (Escudo):</Text>
              <View style={styles.imageWrapper}>
                <Image
                  source={require('@/assets/images/CNE.png')}
                  style={styles.demoImage}
                  resizeMode="contain"
                  onLoadStart={() => setImgLoading(true)}
                  onLoadEnd={() => setImgLoading(false)}
                  onError={() => setImgError(true)}
                />
                {imgLoading && <ActivityIndicator size="small" color="#002B49" style={styles.imgLoader} />}
              </View>
              {imgError ? <Text style={styles.errorText}>Error al cargar la imagen de muestra.</Text> : null}
            </View>

            {/* Componente ImageBackground */}
            <Text style={styles.subSectionTitle}>🌄 Tarjeta con ImageBackground:</Text>
            <View style={styles.imageBgContainer}>
              <ImageBackground
                source={require('@/assets/images/CNE.png')}
                style={styles.imageBgStyle}
                imageStyle={{ opacity: 0.15, resizeMode: 'cover' }}>
                <View style={styles.bgOverlayContent}>
                  <Text style={styles.bgOverlayTitle}>Fondo de Pantalla Decorativo</Text>
                  <Text style={styles.bgOverlaySub}>Demostración de ImageBackground con opacidad y contenido superpuesto.</Text>
                  <View style={styles.bgBadge}>
                    <Text style={styles.bgBadgeText}>✨ Fondo Superpuesto</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        )}

        {/* PIE DE PÁGINA */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Guía de Examen - Dispositivos Móviles 📱</Text>
          <Text style={styles.footerSub}>10mo Semestre • María Belén Tashiguano Ramírez</Text>
        </View>

      </ScrollView>

      {/* =========================================================================
          MODAL 1: SELECTOR DROPDOWN / PICKER DE POSICIÓN
         ========================================================================= */}
      <Modal
        visible={pickerModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setPickerModalVisible(false)}>
        <Pressable style={styles.modalOverlay} onPress={() => setPickerModalVisible(false)}>
          <View style={styles.pickerModalContent}>
            <Text style={styles.modalTitle}>⚽ Selecciona una Posición</Text>
            {opcionesPosicion.map((item) => (
              <Pressable
                key={item}
                style={[
                  styles.pickerOptionItem,
                  posicionSeleccionada === item && styles.pickerOptionSelected,
                ]}
                onPress={() => {
                  setPosicionSeleccionada(item);
                  setPickerModalVisible(false);
                }}>
                <Text
                  style={[
                    styles.pickerOptionText,
                    posicionSeleccionada === item && styles.pickerOptionTextSelected,
                  ]}>
                  {item} {posicionSeleccionada === item ? '✓' : ''}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* =========================================================================
          MODAL 2: MODAL FLOTANTE INTERACTIVO DE EJEMPLO
         ========================================================================= */}
      <Modal
        visible={modalFlotanteVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalFlotanteVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.dialogModalBox}>
            <Text style={styles.dialogIcon}>🎉</Text>
            <Text style={styles.dialogTitle}>¡Modal Flotante Funcional!</Text>
            <Text style={styles.dialogMessage}>
              Este modal utiliza animationType="slide" y un fondo semitransparente (transparent=true) para dar feedback profesional al usuario.
            </Text>

            <View style={styles.dialogBtnGroup}>
              <Pressable
                style={({ pressed }) => [styles.dialogBtnConfirm, pressed && styles.btnPressed]}
                onPress={() => {
                  setModalFlotanteVisible(false);
                  Alert.alert('Acción', 'Has presionado Confirmar en el Modal.');
                }}>
                <Text style={styles.dialogBtnConfirmText}>Aceptar</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [styles.dialogBtnClose, pressed && styles.btnPressed]}
                onPress={() => setModalFlotanteVisible(false)}>
                <Text style={styles.dialogBtnCloseText}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFD100',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 4,
    textAlign: 'center',
  },
  // ESTILOS BARRA SUPERIOR DE CATEGORÍAS (TOP CATEGORY BAR)
  topBarContainer: {
    backgroundColor: '#002B49',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 209, 0, 0.2)',
  },
  topBarScrollContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  topBarTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  topBarTabActive: {
    backgroundColor: '#FFD100',
    borderColor: '#FFD100',
  },
  topBarTabText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
  },
  topBarTabTextActive: {
    color: '#002B49',
    fontSize: 12,
    fontWeight: '900',
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 16,
    lineHeight: 17,
  },
  subSectionTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
    marginTop: 12,
    marginBottom: 8,
  },
  // ESTILOS DE FORMULARIO
  inputGroup: {
    marginBottom: 14,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 6,
  },
  textInput: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
    color: '#0F172A',
  },
  inputErrorBorder: {
    borderColor: '#EF4444',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eyeButton: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
  },
  eyeButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  switchLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0F172A',
  },
  switchSubLabel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  dropdownSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  dropdownSelectorText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#002B49',
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#64748B',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  checkboxBox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#002B49',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxBoxChecked: {
    backgroundColor: '#002B49',
  },
  checkmarkText: {
    color: '#FFD100',
    fontWeight: '900',
    fontSize: 14,
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#334155',
    flex: 1,
    lineHeight: 16,
  },
  // FEEDBACK VISUAL Y MODALES
  feedbackBox: {
    backgroundColor: '#F8FAFC',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },
  feedbackTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#002B49',
    marginBottom: 8,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  loadingText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 6,
  },
  normalText: {
    fontSize: 12,
    color: '#475569',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 6,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#002B49',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFD100',
    fontSize: 12,
    fontWeight: '800',
  },
  actionButtonSecondary: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonSecText: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '700',
  },
  btnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  alertBtn: {
    flex: 1,
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  alertBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  alertBtnConfirm: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  alertBtnConfirmText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  modalTriggerBtn: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  modalTriggerText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  // SCROLLVIEW HORIZONTAL Y LISTAS
  horizontalScroll: {
    marginBottom: 14,
  },
  horizontalCard: {
    width: 140,
    padding: 14,
    borderRadius: 14,
    marginRight: 10,
    alignItems: 'center',
  },
  hCardEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  hCardTitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
  },
  hCardSub: {
    color: '#F1F5F9',
    fontSize: 10,
    marginTop: 2,
  },
  flatListItem: {
    backgroundColor: '#F8FAFC',
    padding: 10,
    borderRadius: 8,
  },
  flatListTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0F172A',
  },
  flatListSub: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  listSeparator: {
    height: 6,
  },
  sectionHeaderBox: {
    backgroundColor: '#002B49',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 6,
  },
  sectionHeaderText: {
    color: '#FFD100',
    fontSize: 12,
    fontWeight: '900',
  },
  sectionListItem: {
    backgroundColor: '#F1F5F9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
  },
  sectionItemName: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0F172A',
  },
  sectionItemSub: {
    fontSize: 11,
    color: '#475569',
    marginTop: 1,
  },
  // REJILLA FLEXBOX Y BADGES
  responsiveInfoText: {
    fontSize: 12,
    color: '#475569',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: '800',
    color: '#002B49',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  gridCard: {
    width: '48%',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  gridIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  gridCardTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0F172A',
  },
  gridCardSub: {
    fontSize: 10,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 2,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  chipPill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
  },
  chipText: {
    fontSize: 11,
    fontWeight: '800',
  },
  // IMÁGENES Y BACKGROUND
  imageDemoBox: {
    marginBottom: 12,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  demoImage: {
    width: 100,
    height: 100,
  },
  imgLoader: {
    position: 'absolute',
  },
  imageBgContainer: {
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#002B49',
  },
  imageBgStyle: {
    width: '100%',
    padding: 16,
  },
  bgOverlayContent: {
    alignItems: 'flex-start',
  },
  bgOverlayTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFD100',
  },
  bgOverlaySub: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 4,
    lineHeight: 16,
  },
  bgBadge: {
    backgroundColor: 'rgba(255, 209, 0, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#FFD100',
  },
  bgBadgeText: {
    color: '#FFD100',
    fontSize: 11,
    fontWeight: '800',
  },
  // MODALES
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  pickerModalContent: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 12,
    textAlign: 'center',
  },
  pickerOptionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 4,
  },
  pickerOptionSelected: {
    backgroundColor: '#FEF9C3',
  },
  pickerOptionText: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '600',
  },
  pickerOptionTextSelected: {
    color: '#002B49',
    fontWeight: '900',
  },
  dialogModalBox: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    elevation: 6,
  },
  dialogIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#002B49',
    marginBottom: 8,
    textAlign: 'center',
  },
  dialogMessage: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 18,
  },
  dialogBtnGroup: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  dialogBtnConfirm: {
    flex: 1,
    backgroundColor: '#002B49',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  dialogBtnConfirmText: {
    color: '#FFD100',
    fontWeight: '800',
    fontSize: 13,
  },
  dialogBtnClose: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  dialogBtnCloseText: {
    color: '#334155',
    fontWeight: '800',
    fontSize: 13,
  },
  footer: {
    paddingVertical: 24,
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
