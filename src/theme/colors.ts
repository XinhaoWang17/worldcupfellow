// 2026 FIFA World Cup Official Color Palette
// Primary: FIFA Navy + FIFA Blue + Gold accent
// The brand identity reflects the three host nations: USA, Canada, Mexico

export const FIFA_COLORS = {
  gold: '#FFB800',
  goldDark: '#E6A400',
  navy: '#0C1D33',
  blue: '#0C4A9E',
  blueLight: '#4A90E2',
  red: '#E63946',
  white: '#FFFFFF',
  black: '#000000',
} as const;

export interface ColorTokens {
  background: string;
  backgroundAlt: string;
  card: string;
  cardElevated: string;
  primary: string;
  primaryLight: string;
  accent: string;
  accentDark: string;
  danger: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderLight: string;
  tabBar: string;
  tabBarActive: string;
  tabBarInactive: string;
  headerBackground: string;
  headerText: string;
  liveIndicator: string;
  qualifiedHighlight: string;
  qualifiedBorder: string;
  sectionHeader: string;
  sectionHeaderText: string;
  shadow: string;
  scoreBackground: string;
  groupBadge: string;
  groupBadgeText: string;
}

export const lightColors: ColorTokens = {
  background: '#F0F4FA',
  backgroundAlt: '#E8EFF9',
  card: '#FFFFFF',
  cardElevated: '#FFFFFF',
  primary: '#0C4A9E',
  primaryLight: '#1A5DB5',
  accent: '#FFB800',
  accentDark: '#E6A400',
  danger: '#E63946',
  text: '#0C1D33',
  textSecondary: '#3D5A80',
  textMuted: '#6B7280',
  border: '#DDE5F0',
  borderLight: '#EEF2F8',
  tabBar: '#FFFFFF',
  tabBarActive: '#0C4A9E',
  tabBarInactive: '#9CA3AF',
  headerBackground: '#0C1D33',
  headerText: '#FFFFFF',
  liveIndicator: '#E63946',
  qualifiedHighlight: '#FFF9E6',
  qualifiedBorder: '#FFB800',
  sectionHeader: '#E8EFF9',
  sectionHeaderText: '#0C4A9E',
  shadow: '#000000',
  scoreBackground: '#F0F4FA',
  groupBadge: '#0C4A9E',
  groupBadgeText: '#FFFFFF',
};

export const darkColors: ColorTokens = {
  background: '#0C1D33',
  backgroundAlt: '#0A1929',
  card: '#1A2E4A',
  cardElevated: '#213650',
  primary: '#4A90E2',
  primaryLight: '#5DA0F0',
  accent: '#FFB800',
  accentDark: '#E6A400',
  danger: '#FF5A65',
  text: '#F0F4FA',
  textSecondary: '#A8BFDC',
  textMuted: '#6B849E',
  border: '#2D4A6A',
  borderLight: '#243D5C',
  tabBar: '#0C1D33',
  tabBarActive: '#FFB800',
  tabBarInactive: '#4A6080',
  headerBackground: '#07111F',
  headerText: '#F0F4FA',
  liveIndicator: '#FF5A65',
  qualifiedHighlight: '#1E3520',
  qualifiedBorder: '#FFB800',
  sectionHeader: '#0A1929',
  sectionHeaderText: '#4A90E2',
  shadow: '#000000',
  scoreBackground: '#0A1929',
  groupBadge: '#FFB800',
  groupBadgeText: '#0C1D33',
};
