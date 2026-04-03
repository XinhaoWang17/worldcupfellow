import { useColorScheme } from 'react-native';
import { lightColors, darkColors, ColorTokens } from '../theme/colors';

export function useTheme(): ColorTokens {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkColors : lightColors;
}
