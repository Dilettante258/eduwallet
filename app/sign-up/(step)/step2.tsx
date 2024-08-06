import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Button, IconButton} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {Brand, Normal} from "@/components/svg";
import {Link} from 'expo-router';
import {FlexView} from "@/components/ThemedView";
import Checkbox from "@/components/checkbox";
import {ProgressBar} from "@/app/sign-up/component/ProgressBar";
import {Colors} from "@/constants/Colors";


const Step2 = () => {
  const [checked, setChecked] = useState(false);
  const [level, setLevel] = useState(2)

  const secret:string[] = ['burger','buyer', 'detail','fire', 'fossil', 'hold', 'rain', 'search', 'slight', 'spray', 'tube', 'wire'];


  return (
    <FlexView style={[styles.container, {gap: 20, flex: 1}]}>
      <View style={{gap: 4,width: "100%"}}>
        <FlexView style={{flexDirection: 'row' ,gap: 4, alignItems: 'center'}}>
          <Brand.BrandBlackEdge length={32}/>
          <ThemedText>EduWallet</ThemedText>
        </FlexView>
        <Link href="/sign-up" asChild>
          <Pressable style={{width: 54, height: 54, backgroundColor: Colors.dark.bgGray, borderRadius: 100,alignItems: "center",
            justifyContent: "center",}} >
            <Normal.LeftArrow />
          </Pressable>
        </Link>
      </View>
      <ProgressBar level={level} />
      <View style={styles.formContainer}>
        <ThemedText size="lg">
          Create Password
        </ThemedText>
        <ThemedText>
          Your secret backup phrase makes it easy to bak up and restore your account.
        </ThemedText>
        <ThemedText>
          WARNING: Never disclose your backup phrase. Anyone with this phrase can take your wallet forever.
        </ThemedText>
      </View>
      <View style={styles.secretContainer}>
        {/*<Image blurRadius={10} style={styles.blurContainer}/>*/}
        {/*deprecated!!!*/}
        {/* TODO: 需要引入第三方组件 */}
        {
          secret.map((item, index) => (
            <Pressable key={index}>
              <ThemedText>{item}</ThemedText>
            </Pressable>
          ))
        }
      </View>
      <View style={styles.confirmContainer}>
        <ThemedText style={styles.tips}>
          {'\n'}Tips:{'\n\n'}
          1. Store this phrase in a password manager like 1Password.{'\n'}
          2. Write this phrase on a piece of paper and store in a secure location.{'\n'}
          3. Memorize this phrase.
        </ThemedText>
      </View>
      <View style={{width: "100%"}}>
        <Link href="/sign-up/step3" style={{width: "100%"}} asChild>
          <Button size="lg" variant="solid">
            Next
          </Button>
        </Link>
      </View>
    </FlexView>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      gap: 20,
      marginTop: 40,
      marginBottom: 20,
      marginHorizontal: 20,
    },
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
    blurContainer: {
      //deprecated!!!
      ...StyleSheet.absoluteFillObject,
      width: 1000,
      height: 1000,
      backgroundColor: "black",
      opacity: 0.5,
      zIndex: 10,
    },
    tips: {
    }
  }
)

export default Step2;