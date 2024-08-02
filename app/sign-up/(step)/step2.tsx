import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, IconButton} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {BrandBlackEdge, LeftArrow} from "@/components/svg";
import { Link } from 'expo-router';
import {FlexView} from "@/components/ThemedView";
import Input from "@/components/input";
import Checkbox from "@/components/checkbox";
import { ProgressBar }from "@/app/sign-up/component/ProgressBar";




export default function Step2() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Step 2</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
  }
)