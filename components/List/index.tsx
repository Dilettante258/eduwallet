import {Dimensions, Image, Pressable, StyleSheet, View} from "react-native";
import {Button} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {Normal} from "@/components/svg";
import React, {useState} from "react";
import {Colors} from "@/constants/Colors";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {Input} from "@/components/input";

const windowHeight = Dimensions.get('window').height;


export default function List() {
  const [viewAll, setViewAll] = useState<boolean>(false);
  const initialHeight = windowHeight - 520;
  const height = useSharedValue(initialHeight);

  const handlePress = () => {
    setViewAll(!viewAll);
    height.value = viewAll ?  initialHeight : windowHeight - 40;
  };

  const animatedStyles = useAnimatedStyle(() => (
    {
      height: withSpring(height.value, {damping: 20, stiffness: 100}),
      top: withSpring(viewAll ?  0 : 360 ),
    }
  ));

  const searchStyles = useAnimatedStyle(() => (
    {
      overflow: 'hidden',
      height: withDelay(150, withTiming(viewAll ? 60 : 0))
    }
  ));

  const Search = () => {
    return (
      <Animated.View style={[searchStyles]}>
        <Input
          placeholder='Search asset'
        />
      </Animated.View>
    )
  }

  const Footer = () => {
    return (
      <View style={{
        marginHorizontal: "auto",
        overflow: 'hidden',
        paddingTop: 10,
        height: viewAll ? 150 : 0,
      }}>
        <ThemedText type='muted'>
          You have reached the bottom~
        </ThemedText>
      </View>
    )
  }

  const UpSvg = Animated.createAnimatedComponent(Normal.Up);

  const animatedSvgProps = useAnimatedProps(() => {
    return {
      rotation: viewAll ? 180 : 0,
      origin: [8,8],
      fillOpacity: 0
    };
  });



  return (
    <Animated.View
      style={[styles.assetContainer, animatedStyles]}>
      <View style={[styles.row,{gap: 8, alignItems: "center"}]}>
        <Button size='sm' textSize='xs'>
          Assets
        </Button>
        <Button size='sm' variant='ghost' textSize='xs'>
          NFT

        </Button>
        <Pressable
          onPress={handlePress}
          style={{display: "flex",flexDirection: "row",gap: 4, alignSelf: "center",marginLeft: "auto"}}
        >
          <ThemedText size='sm'>View All</ThemedText>
          <UpSvg {...animatedSvgProps} />
        </Pressable>
      </View>
      <Animated.FlatList data={assetsList} renderItem={AssetItem}
                ListHeaderComponent={Search}
                ListFooterComponent={Footer}
                ListEmptyComponent={Empty}
                initialNumToRender={5}
                ItemSeparatorComponent={Separator}
      />
    </Animated.View>
  );
}




















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

const styles = StyleSheet.create({
  assetContainer: {
    position: 'absolute',
    top: 0,
    width: "100%",
    height: windowHeight - 520,
    backgroundColor: Colors.dark.bgGray,
    borderRadius: 16,
    padding: 16,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 16,
  },
  inlineRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
})