import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import React from "react";
import QRCode from "react-qr-code";
import {Colors} from "@/constants/Colors";
import {ThemedText} from "@/components/ThemedText";
import {Normal} from "@/components/svg";
import Header from "@/app/(asset)/component/header";


const ReceiveInvalid = () => {
  return (
    <View style={{margin: 20}}>
      <Header icon={<Normal.QRCode />} title={"Receive"}/>
      <View style={styles.QRContainer1}>
        <View style={styles.QRContainer2}>
          <QRCode
            size={256}
            style={{height: "auto", maxWidth: "auto", width: "100%", margin: 20}}
            value={'0x3E87B769fEAbf2F78bB74F3e4f791cFC1397aa1A'}
            viewBox={`0 0 240 240`}
          />
        </View>
      </View>
      <View style={styles.addressContainer}>
        <ThemedText type='muted' size='sm'>Your Wallet Address</ThemedText>
        <ThemedText>0x3E87B769fEAbf2F78bB74F3e4f791cFC1397aa1A</ThemedText>
        <View style={styles.inlineRow}>
          <ThemedText type='muted'>
            Copy
          </ThemedText><Normal.Copy />
        </View>
      </View>
    </View>
);
};


const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
  },
  QRContainer1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: Colors.dark.bgGray,
    padding: 20,
    marginVertical: 40,
  },
  QRContainer2: {
    height: "auto",
    borderRadius: 16,
    padding: 20,
    backgroundColor: "#fff",
  },
  addressContainer: {
    display: "flex",
    backgroundColor: Colors.dark.bgGray,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  inlineRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 4,
    textAlign: "right",
  }
})


export default ReceiveInvalid;