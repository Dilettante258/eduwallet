import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {ThemedText} from "@/components/ThemedText";
import {Normal} from "@/components/svg";
import {Colors} from "@/constants/Colors";
import {Link} from "expo-router";
import List from "@/components/List";


const AssetPage = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row,{paddingBottom: 40}]}>
        <Image source={require("@/assets/images/avatar.png")} width={68} height={68} style={styles.avatar}/>
        <View>
          <ThemedText>Hi, akbcut554</ThemedText>
          <ThemedText type='muted'>Good Morning 👋</ThemedText>
        </View>
        <View style={{
          flexDirection: "row",
          flex: 1,
          gap: 16 ,
          display: "flex",
          justifyContent: "flex-end",
        }}>
          <Normal.Clock length={32}/>
          <Normal.Scan length={32}/>
        </View>
      </View>
      <View style={styles.balance}>
        <ThemedText style={{fontSize: 40, lineHeight: 60}} type="bold">$0</ThemedText>
        <ThemedText type="muted">Your Balance</ThemedText>
        <View style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 16,
          gap: 4,
          alignItems: "center",
          alignSelf: "flex-end",
        }}>
          <ThemedText type="muted">Profit</ThemedText>
          <ThemedText size='sm' type='medium'>$0</ThemedText>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWarp}>
          <View style={styles.buttonIcon}>
            <Normal.LeftArrow color={Colors.dark.fill} transform="rotate(135 7 6)"/>
          </View>
          <ThemedText size='sm' type='medium'>Transfer</ThemedText>
        </View>
        <View style={[styles.buttonWarp,{backgroundColor: '#2AE9B9'}]}>
          <View style={styles.buttonIcon}>
            <Normal.LeftArrow color={Colors.dark.fill} transform="rotate(-45 7 6)"/>
          </View>
          <ThemedText size='sm' style={{color: Colors.dark.fill}} type='medium'>Request</ThemedText>
        </View>
        <Link href='/receive-invalid' asChild>
          <Pressable style={{width: 54, height: 54, backgroundColor: Colors.dark.bgGray, borderRadius: 100,alignItems: "center",
            justifyContent: "center",}} >
            <Normal.QRCode />
          </Pressable>
        </Link>
      </View>
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    position: 'relative',
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 50,
    marginRight: 12,
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  balance: {
    display: "flex",
    backgroundColor: Colors.dark.bgGray,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 16,
    padding: 16,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    paddingVertical: 24,
  },
  buttonWarp: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 54,
    gap: 4,
    paddingVertical: 16,
    paddingLeft: 60,
    paddingRight: 22,
    borderRadius: 100,
    backgroundColor: '#121BDF',
    position: "relative",
  },
  buttonIcon: {
    ...StyleSheet.absoluteFillObject,
    top: 3,
    left: 3,
    width: 48,
    height: 48,
    borderWidth: 12,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AssetPage;