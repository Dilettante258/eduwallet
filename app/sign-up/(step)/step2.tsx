import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, IconButton} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {BrandBlackEdge, LeftArrow} from "@/components/svg";
import {Link} from 'expo-router';
import {FlexView} from "@/components/ThemedView";
import Checkbox from "@/components/checkbox";
import {ProgressBar} from "@/app/sign-up/component/ProgressBar";


const Step1 = () => {
  const [checked, setChecked] = useState(false);
  const [level, setLevel] = useState(2)


  return (
    <FlexView style={[styles.container, {gap: 20, flex: 1}]}>
      <View style={{gap: 4,width: "100%"}}>
        <FlexView style={{flexDirection: 'row' ,gap: 4, alignItems: 'center'}}>
          <BrandBlackEdge length={32}/>
          <ThemedText>EduWallet</ThemedText>
        </FlexView>
        <Link href="/sign-up" asChild>
          <IconButton size='lg'>
            <LeftArrow />
          </IconButton>
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
      <View>
        <Link href="/sign-up/step3" style={{width: "100%"}} asChild>
          <Button size="lg" variant="solid">
            Create
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
      marginHorizontal: 20
    },
    formContainer: {
      gap: 20,
      width: "100%",
      display: "flex",
      flex: 1,
    },
    confirmContainer: {
      display: "flex",
      gap: 20,
      width: "100%",
    },
  }
)

export default Step1;