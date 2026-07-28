import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#002B49',
    background: '#F8FAFC',
    tint: '#002B49',
    icon: '#475569',
    tabIconDefault: '#64748B',
    tabIconSelected: '#002B49',
    yellow: '#FFD100',
    blue: '#002B49',
    red: '#CE1126',
    card: '#FFFFFF',
    cardBorder: '#E2E8F0',
    subtext: '#475569',
  },
  dark: {
    text: '#FFFFFF',
    background: '#0B132B',
    tint: '#FFD100',
    icon: '#94A3B8',
    tabIconDefault: '#64748B',
    tabIconSelected: '#FFD100',
    yellow: '#FFD100',
    blue: '#1C2541',
    red: '#E63946',
    card: '#1C2541',
    cardBorder: '#3A5A40',
    subtext: '#94A3B8',
  },
};

export const AppTheme = {
  colors: {
    yellow: '#FFD100',
    navy: '#002B49',
    red: '#CE1126',
    white: '#FFFFFF',
    darkBg: '#0A192F',
    cardBg: '#112240',
    textMain: '#002B49',
    textMuted: '#64748B',
    goldGradient: ['#FFD100', '#FFA000'],
    navyGradient: ['#002B49', '#001427'],
  },
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
