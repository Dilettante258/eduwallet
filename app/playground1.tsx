import {StyleSheet, View} from 'react-native';


import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Link} from "expo-router";
import React from "react";

export default function HomeScreen() {
  return (
    <View>
      <ThemedText type='bold' size='lg'>Test PlayGround !!!</ThemedText>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Welcome!</ThemedText>
      </ThemedView>
      <Link href="/sign-up"><ThemedText>Sign up</ThemedText></Link>
      <Link href="/sign-up/step2"><ThemedText>Sign up/Step2</ThemedText></Link>
      <Link href="/asset"><ThemedText>Asset</ThemedText></Link>
      <Link href="/playground1"><ThemedText>PlayGround1</ThemedText></Link>
      <Link href="/playground2"><ThemedText>PlayGround2</ThemedText></Link>
    </View>
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
