import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemedText} from "@/components/ThemedText";
import {Brand} from "@/components/svg";


const Loading = () => {
  return (
    <View style={styles.container}>
      <Brand.BrandBlackEdge length={150}/>
      <ThemedText type="BrandName">Welcome</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto",
  }
});

export default Loading;