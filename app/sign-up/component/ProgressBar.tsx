import React from 'react';
import { StyleSheet, View} from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import {Colors} from "@/constants/Colors";
import {ThemedText} from "@/components/ThemedText";
import { withSpring } from 'react-native-reanimated';


type ProgressBarProps = {
  level: number;
}
export const ProgressBar = (
  {level}: ProgressBarProps) => {
  const width = useSharedValue<number>(0);

  const springConfig = {
    duration: 1500,
    dampingRatio: 0.4,
  }

  if (level === 1) width.value = withSpring(78, springConfig);
  if (level === 2) width.value = withSpring(246, springConfig);
  if (level === 3) width.value = withSpring(350, springConfig);

  return (
    <View style={styles.container}>
      <View style={styles.node}>
        <ThemedText size='xs' type="bold" style={styles.text}>1</ThemedText>
      </View>
      <Animated.View style={styles.node}>
        <ThemedText size='xs' type="bold" style={styles.text}>2</ThemedText>
      </Animated.View>
      <Animated.View style={styles.node}>
        <ThemedText size='xs' type="bold" style={styles.text}>3</ThemedText>
      </Animated.View>
      <Animated.View style={{ ...styles.bar, width, backgroundColor: "#080FA5",zIndex: 5 }} />
      <View style={styles.bar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  bar: {
    height: 3,
    width: 327,
    backgroundColor: Colors.dark.bgGray,
    borderRadius: 100,
    position: 'absolute',
    top: "50%",
    left: 11.5,
    zIndex: 1,
  },
  node: {
    height: 23,
    width: 23,
    backgroundColor: Colors.dark.primary,
    borderRadius: 20,
    zIndex: 10,
    // shadow for ios & android
    elevation: 6,
    shadowRadius: 4,
    shadowColor: '#00000040',
  },
  text: {
    lineHeight: 12,
    zIndex: 15,
    textAlign: 'center',
    marginVertical: "auto",
  },
});
