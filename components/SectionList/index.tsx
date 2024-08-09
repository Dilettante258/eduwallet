import {FlatList, Image, StyleSheet, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {Colors} from "@/constants/Colors";

type ItemProps = {
  time: string,
  data: {
    thumbnail: any,
    cover: any,
    NTF: string,
    course: string
  }[]
}

const data = [
  {
    time: 'Jun 6, 2024',
    data: [
      {
        thumbnail: require("@/assets/achievements/1_sm.png"),
        cover: require("@/assets/achievements/1.png"),
        NTF: 'Blue Pig',
        course: 'NFT Fundamentals: From Creation to Collection'
      },
    ]
  },
  {
    time: 'Jun 5, 2024',
    data: [
      {
        thumbnail: require("@/assets/achievements/2.png"),
        cover: require("@/assets/achievements/1.png"),
        NTF: 'Crying Monkey',
        course: 'Mastering NFT Art: Techniques and Market Insights'
      },
      {
        thumbnail: require("@/assets/achievements/3.png"),
        cover: require("@/assets/achievements/1.png"),
        NTF: 'Angry Monster',
        course: 'Blockchain and NFTs: A Comprehensive Guide'
      },
      {
        thumbnail: require("@/assets/achievements/4.png"),
        cover: require("@/assets/achievements/1.png"),
        NTF: 'Super Penguin 2450',
        course: 'Investing in NFTs: Trends, Risks, and Opportunities'
      },
    ]
  },
  {
    time: 'Jun 5, 2024',
    data: [
      {
        thumbnail: require("@/assets/achievements/5.png"),
        cover: require("@/assets/achievements/1.png"),
        NTF: 'Digital Dreamscapes',
        course: 'Creating and Minting NFTs: A Step-by-Step Workshop'
      },
    ]
  },
  {
    time: 'Jun 3, 2024',
    data: [
      {
        thumbnail: require("@/assets/achievements/6.png"),
        cover: require("@/assets/achievements/1.png"),
        NTF: 'Pixel Portfolio',
        course: 'Mastering NFT Art: Techniques and Market Insights'
      },
    ]
  },
  {
    time: 'Jun 3, 2024',
    data: [
      {
        thumbnail: require("@/assets/achievements/6.png"),
        cover: require("@/assets/achievements/1.png"),
        NTF: 'Pixel Portfolio',
        course: 'Mastering NFT Art: Techniques and Market Insights'
      },
    ]
  },
  {
    time: 'Jun 3, 2024',
    data: [
      {
        thumbnail: require("@/assets/achievements/6.png"),
        cover: require("@/assets/achievements/1.png"),
        NTF: 'Pixel Portfolio',
        course: 'Mastering NFT Art: Techniques and Market Insights'
      },
    ]
  },
]


const Item = ({item}: { item: ItemProps }) => {
  return (
    <View style={styles.section}>
      <View style={styles.time}>
        <ThemedText type='medium'>{item.time}</ThemedText>
      </View>
      <View style={{gap: 8}}>
        {item.data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.thumbnail} style={styles.thumbnail}/>
            <View style={styles.description}>
              <ThemedText size='sm'>{item.NTF}</ThemedText>
              <ThemedText type='muted' style={{fontSize: 12, lineHeight: 15}}>{item.course}</ThemedText>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}


export default function SectionList() {

  return (
    <FlatList
      data={data}
      renderItem={Item}/>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20
  },
  time: {
    width: 120,
    marginTop: 8,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: Colors.dark.borderGray,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.dark.bgGray,
    padding: 8,
    borderRadius: 12,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  description: {
    width: 150,
    marginHorizontal: "auto",
    gap: 4
  },
});