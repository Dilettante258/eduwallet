import {Image, StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Link} from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedText type='bold' size='lg'>Test PlayGround !!!</ThemedText>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Welcome!</ThemedText>
      </ThemedView>
      <Link href="/sign-up"><ThemedText>Sign up</ThemedText></Link>
      <Link href="/sign-up/step1"><ThemedText>Sign up/Step1</ThemedText></Link>
      <Link href="/asset"><ThemedText>Asset</ThemedText></Link>
      <Link href="/playground1"><ThemedText>PlayGround1</ThemedText></Link>
      <Link href="/playground2"><ThemedText>PlayGround2</ThemedText></Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
