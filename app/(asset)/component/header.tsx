import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemedText} from "@/components/ThemedText";
import {BackButton} from "@/components/button";


export default function Header({icon, title}: {icon: React.ReactNode, title: string
}) {
  return (
    <View style={styles.container}>
      <BackButton style={{...StyleSheet.absoluteFillObject,}}/>
      <View style={styles.inlineRow}>
        {/*<Normal.QRCode />*/}
        {icon}
        <ThemedText type='medium' size='lg'>
          {title}
        </ThemedText>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
    position: "relative",
    justifyContent: "center",
    height: 54,
  },
  inlineRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

})