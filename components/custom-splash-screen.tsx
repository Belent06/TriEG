import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { AppTheme } from '@/constants/theme';
import { TEAM_PROFILE } from '@/data/team-info';

const { width } = Dimensions.get('window');

interface CustomSplashScreenProps {
  onFinish: () => void;
}

export const CustomSplashScreen: React.FC<CustomSplashScreenProps> = ({ onFinish }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.85)).current;
  const badgeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 6,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(badgeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // Auto navigate after 3.5 seconds if user doesn't press button
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFD100" />
      
      {/* Decorative background shapes */}
      <View style={styles.topYellowHeader} />
      <View style={styles.blueCurvedContainer} />
      <View style={styles.redLineAccent} />

      <View style={styles.content}>
        {/* Animated Emblem */}
        <Animated.View
          style={[
            styles.logoWrapper,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}>
          <Image
            source={require('@/assets/images/ecuador_logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </Animated.View>

        {/* App Title & Slogan */}
        <Animated.View style={[styles.textWrapper, { opacity: fadeAnim }]}>
          <View style={styles.titleBadge}>
            <Text style={styles.flagEmoji}>🇪🇨</Text>
            <Text style={styles.appName}>MiTri</Text>
          </View>
          <Text style={styles.teamSubtitle}>{TEAM_PROFILE.name}</Text>
          <Text style={styles.slogan}>"{TEAM_PROFILE.slogan}"</Text>
        </Animated.View>

        {/* Animated Badge & Action Button */}
        <Animated.View style={[styles.footerWrapper, { opacity: badgeAnim }]}>
          <View style={styles.worldCupPill}>
            <Text style={styles.worldCupText}>Rumbo al Mundial 2026 ⚽</Text>
          </View>

          <TouchableOpacity
            style={styles.enterButton}
            activeOpacity={0.8}
            onPress={onFinish}>
            <Text style={styles.enterButtonText}>Ingresar a MiTri 🚀</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD100',
  },
  topYellowHeader: {
    height: '25%',
    backgroundColor: '#FFD100',
  },
  blueCurvedContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '78%',
    backgroundColor: '#002B49',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  redLineAccent: {
    position: 'absolute',
    top: '22%',
    left: '10%',
    right: '10%',
    height: 4,
    backgroundColor: '#CE1126',
    borderRadius: 2,
    zIndex: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 24,
    zIndex: 20,
  },
  logoWrapper: {
    marginTop: 20,
    width: width * 0.55,
    height: width * 0.55,
    borderRadius: width * 0.28,
    backgroundColor: '#FFFFFF',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  textWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  titleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  flagEmoji: {
    fontSize: 36,
  },
  appName: {
    fontSize: 44,
    fontWeight: '900',
    color: '#FFD100',
    letterSpacing: 1.5,
  },
  teamSubtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 8,
    textAlign: 'center',
  },
  slogan: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#94A3B8',
    marginTop: 6,
  },
  footerWrapper: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  worldCupPill: {
    backgroundColor: 'rgba(255, 209, 0, 0.15)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFD100',
  },
  worldCupText: {
    color: '#FFD100',
    fontWeight: '600',
    fontSize: 14,
  },
  enterButton: {
    width: '85%',
    backgroundColor: '#FFD100',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#FFD100',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  enterButtonText: {
    color: '#002B49',
    fontSize: 18,
    fontWeight: '800',
  },
});
