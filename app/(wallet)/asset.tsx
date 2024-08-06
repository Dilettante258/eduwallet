import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import {ThemedText} from "@/components/ThemedText";
import {Normal} from "@/components/svg";
import {Colors} from "@/constants/Colors";
import {Button, IconButton} from "@/components/button";

type asset = {
  icon: any,
  name: string,
  code: string,
  amount: number,
  changePercent: number,
}

const assetsList = [
  {
    icon: require("@/assets/currency/ethreum.png"),
    name: "Ethreum",
    code: "ETH",
    amount: 16737,
    changePercent: 2.67,
  },
  {
    icon: require("@/assets/currency/bitcoin.png"),
    name: "Bitcoin",
    code: "BTC",
    amount: 533.89,
    changePercent: 0.67,
  },
  {
    icon: require("@/assets/currency/chainlink.png"),
    name: "ChainLink",
    code: "LINK",
    amount: 1225.31,
    changePercent: -0.08,
  },
  {
    icon: require("@/assets/currency/apecoin.png"),
    name: "ApeCoin",
    code: "APE",
    amount: 10.12,
    changePercent: 0.05,
  },
  {
    icon: require("@/assets/currency/decentraland.png"),
    name: "Decentraland",
    code: "MANA",
    amount: 988.05,
    changePercent: 0.72,
  },
  {
    icon: require("@/assets/currency/enjin-coin.png"),
    name: "Enjin Coin",
    code: "ENJ",
    amount: 0.08,
    changePercent: 0.2,
  },
  {
    icon: require("@/assets/currency/enjin-coin.png"),
    name: "Enjin Coin",
    code: "ENJ",
    amount: 0.08,
    changePercent: 0.2,
  },
  {
    icon: require("@/assets/currency/enjin-coin.png"),
    name: "Enjin Coin",
    code: "ENJ",
    amount: 0.08,
    changePercent: 0.2,
  },
]

const AssetItem = ({item}: {item: asset}) => {
  return (
    <View style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingVertical: 16,
      paddingRight: 6
    }}>
      <Image source={item.icon} style={{width: 54, height: 54, marginRight: 8, borderRadius: 50}}/>
      <View style={{flex: 1, gap: 4}}>
        <View style={styles.inlineRow}>
          <ThemedText type='medium'>{item.name}</ThemedText>
          <ThemedText type='medium'>${item.amount}</ThemedText>
        </View>
        <View  style={styles.inlineRow}>
          <ThemedText>{item.code}</ThemedText>
          <ThemedText type='medium' style={
            item.changePercent > 0 ?
              {color: Colors.dark.ok} :
              {color: Colors.dark.warning}
          }>
            {item.changePercent > 0 ?
              <Normal.LeftArrow color={Colors.dark.ok} transform="rotate(135 7 6)"/> :
              <Normal.LeftArrow color={Colors.dark.warning} transform="rotate(-135 7 6)"/>}
            {' '}
            {Math.abs(item.changePercent)}%
          </ThemedText>
        </View>
      </View>
    </View>
  )
}

const Empty = () => {
  return (
    <View style={{
      marginHorizontal: "auto",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
    }}>
      <ThemedText type='muted'>You don’t have any assets yet~</ThemedText>
    </View>
  )
}

const Separator = () => {
  return (
    <View style={{width: "100%", height: 1, backgroundColor: Colors.dark.textGray}}/>
  )
}


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
        <IconButton>
          <Normal.QRCode />
        </IconButton>
      </View>
      <View style={styles.assetContainer}>
        <View style={[styles.row,{gap: 8, alignItems: "center"}]}>
          <Button size='sm'>
            <ThemedText size='xs'>Assets</ThemedText>
          </Button>
          <Button size='sm' variant='ghost'>
            <ThemedText size='xs'>NFT</ThemedText>
          </Button>
          <Pressable style={{display: "flex",flexDirection: "row",gap: 4, alignSelf: "center",marginLeft: "auto"}}>
            <ThemedText size='sm'>View All</ThemedText>
            <Normal.Up />
          </Pressable>
        </View>
        <FlatList data={assetsList} renderItem={AssetItem}
                  ListEmptyComponent={Empty}
                  initialNumToRender={3}
                  ItemSeparatorComponent={Separator}
                  />

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
  assetContainer: {
    width: "100%",
    height: 324,
    backgroundColor: Colors.dark.bgGray,
    borderRadius: 16,
    padding: 16,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 16,
    position: "relative",
  },
  inlineRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default AssetPage;