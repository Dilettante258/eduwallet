import React, {useState} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, IconButton} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {Brand, Normal} from "@/components/svg";
import {Link} from 'expo-router';
import {FlexView} from "@/components/ThemedView";
import Checkbox from "@/components/checkbox";
import {ProgressBar} from "@/app/sign-up/component/ProgressBar";
import {Colors} from "@/constants/Colors";





const Step3 = () => {
  const [selected, setSelected] = useState<Array<string>>([])
  const [checked, setChecked] = useState(false);
  const [level, setLevel] = useState(2)

  const secret:string[] = ['burger','buyer', 'detail','fire', 'fossil', 'hold', 'rain', 'search', 'slight', 'spray', 'tube', 'wire'];

  const Item = ({ item }: { item: string}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          if (selected.includes(item)) {
            setSelected(selected.filter(i => i !== item))
          } else {
            setSelected([...selected, item])
          }
        }}
        style={[styles.item,
        {backgroundColor: selected.includes(item) ? Colors.dark.primary : Colors.dark.bgGray}]}>
        <ThemedText style={{padding: 4, textAlign: "center"}}>{item}</ThemedText>
      </TouchableOpacity>
    );
  };


  return (
    <FlexView style={{ flex: 1, gap: 20}}>
      <View style={styles.formContainer}>
        <ThemedText size="lg">
          Confirm Your Secrete Backup Phrase
        </ThemedText>
        <ThemedText>
          Please select each phrase in order to make sure it is correct.
        </ThemedText>
      </View>
      <View style={styles.secretContainer}>
        {
          selected.map((item, index) => (
            <Pressable key={index}>
              <ThemedText>{item}</ThemedText>
            </Pressable>
          ))
        }
      </View>
      <View style={styles.buttonContainer}>
        <FlatList
          data={secret}
          numColumns={3}
          renderItem={Item}
          columnWrapperStyle={styles.columnWrapper}
          // keyExtractor={(item) => item}
        />
      </View>
      <View style={{width: "100%", marginTop: "auto"}}>
        <Link href="/sign-up/complete" style={{width: "100%"}} asChild>
          <Button size="lg" variant="solid">
            Confirm
          </Button>
        </Link>
      </View>
    </FlexView>
  );
}

const styles = StyleSheet.create(
  {
    formContainer: {
      gap: 20,
      width: "100%",
      display: "flex",
    },
    confirmContainer: {
      display: "flex",
      gap: 20,
      width: "100%",
      flex: 1,
    },
    secretContainer: {
      minHeight: 100,
      minWidth: "100%",
      padding: 20,
      backgroundColor: Colors.dark.bgGray,
      borderRadius: 16,
      gap: 12,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      position: "relative",
      overflow: "hidden",
    },
    buttonContainer: {
      width: "100%",
    },
    columnWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 8,
      marginTop: 8,
      flex: 3,
      width: "100%",
    },
    item: {
      flex: 1,
      backgroundColor: Colors.dark.bgGray,
      borderRadius: 4,
      padding: 4,
      width: "auto",
      textAlign: "center",
    },
    tips: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 8,
      alignItems: "center",
      width: "100%",
      marginTop: 20,
      marginBottom: 20,
    }
  }
)

export default Step3;