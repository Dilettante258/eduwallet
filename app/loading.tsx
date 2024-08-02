import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {BrandBlackEdge} from "@/components/svg";


const Loading = () => {
  const [text, setText] = useState("")


  return (
    <View style={styles.container}>
      <BrandBlackEdge length={150}/>
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