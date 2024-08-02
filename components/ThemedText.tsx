import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
  type?: 'default' | 'bold' | 'medium' | 'subtitle' | 'link' | 'BrandName' | 'error';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  size = 'md',
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        styles[size],
        styles[type],
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  lg: {
    fontSize: 18,
    lineHeight: 27,
  },
  md: {
    fontSize: 16,
    lineHeight: 24,
  },
  sm: {
    fontSize: 14,
    lineHeight: 20,
  },
  xs: {
    fontSize: 12,
    lineHeight: 18,
  },
  xxs: {
    fontSize: 10,
    lineHeight: 15,
  },
  default: {
    fontFamily: 'PoppinsRegular',
  },
  medium: {
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
  },
  bold: {
    fontFamily: 'PoppinsBold',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'PoppinsBold',
    fontWeight: 'bold',
  },
  link: {
    fontFamily: 'PoppinsRegular',
    color: '#2AE9B9',
  },
  error: {
    fontFamily: 'PoppinsRegular',
    color: '#FB7945',
  },
  BrandName: {
    fontSize: 28,
    lineHeight: 42,
    fontFamily: 'PoppinsMedium',
    fontWeight: '500',
  },
});
