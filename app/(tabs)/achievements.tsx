import {StyleSheet, View} from 'react-native';
import {ThemedText} from '@/components/ThemedText';
import {Normal} from "@/components/svg";
import React, {useState} from "react";
import {Input} from "@/components/input";
import SectionList from "@/components/SectionList";


export default function Setting() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', gap: 20}}>
      <View style={styles.header}>
        <Normal.Achievement/>
        <ThemedText>Education Achievements</ThemedText>
      </View>
      <Input
        placeholder="Search nft"
      />
      <SectionList/>

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
