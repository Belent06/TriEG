// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<string, ComponentProps<typeof MaterialIcons>['name']>;

/**
 * Mapeo de iconos SF Symbols (iOS) a MaterialIcons (Android/Web)
 */
const MAPPING: IconMapping = {
  'house.fill': 'home',
  'flag.fill': 'flag',
  'cube.box.fill': 'widgets',
  'info.circle.fill': 'info',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person.3.fill': 'groups',
  'person.2.fill': 'people',
  'chart.bar.fill': 'bar-chart',
  'map.fill': 'map',
  'how-to-vote': 'how-to-vote',
};

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const iconName = MAPPING[name] || 'help-outline';
  return <MaterialIcons color={color} size={size} name={iconName} style={style} />;
}
