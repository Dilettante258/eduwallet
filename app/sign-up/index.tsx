import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {BrandBlackEdge} from "@/components/svg";
import { Link } from 'expo-router';
import {FlexView} from "@/components/ThemedView";



const Sign = () => {
  return (
    <FlexView style={styles.container}>
      <FlexView style={styles.brandContainer}>
        <BrandBlackEdge length={84}/>
        <ThemedText size="lg">Welcome</ThemedText>
        <ThemedText style={{
          textAlign: "center",
        }}>Easiest way{"\n"}
          Manage your web3 assets</ThemedText>
      </FlexView>
      <FlexView style={styles.buttonContainer}>
        <Link href="/sign-up/step1" asChild>
          <Button size="lg" variant="solid" style={{width: 350}}>
            Create a wallet
          </Button>
        </Link>
        <Link href={"#"} asChild>
          <Button size="lg" variant="ghost" style={{width: 350}}>
            Import wallet
          </Button>
        </Link>
      </FlexView>
    </FlexView>
  );
};

const styles = StyleSheet.create({
  brandContainer: {
    gap: 8,
  },
  buttonContainer: {
    gap: 20,
  },
  container: {
    marginVertical: "auto",
    gap: 180,
  }
});

export default Sign;