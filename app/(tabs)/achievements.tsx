import {StyleSheet, View} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {Normal} from "@/components/svg";
import React, {useRef, useState} from "react";
import {Input} from "@/components/input";
import SectionList from "@/components/SectionList";
import Fuse from "fuse.js";

export default function Setting() {
  const inputRef = useRef(null);
  const [search, setSearch] = useState('')


  // 搜索有问题
  const fuseOptions = {
    shouldSort: true,
    minMatchCharLength: 2,
    threshold: 0.99,
    keys: [
      "data.NTF",
      "data.course"
    ]
  };


  const fuse = new Fuse(data, fuseOptions);

  return (
    <View style={{flex: 1, alignItems: 'center', gap: 20}}>
      <View style={styles.header}>
        <Normal.Achievement/>
        <ThemedText>Education Achievements</ThemedText>
      </View>
      <Input
        placeholder="Search nft"
        icon={<Normal.Search/>}
        ref={inputRef}
        onChange={e => {
          setSearch(e.nativeEvent.text)
          console.log(fuse.search(search))
        }}
      />
      <SectionList
        data={search ? fuse.search(search).sort((a, b) => a.refIndex - b.refIndex).map(item => item.item) : data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: "auto"
  },
});

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
