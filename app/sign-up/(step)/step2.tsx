import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Button} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {Link} from 'expo-router';
import {FlexView} from "@/components/ThemedView";
import {Colors} from "@/constants/Colors";
import {BlurView} from "expo-blur";
import {Normal} from "@/components/svg";
import Animated, {useSharedValue, withTiming} from "react-native-reanimated";


const Step2 = () => {
  const opacity = useSharedValue(1);
  const secret:string[] = ['burger','buyer', 'detail','fire', 'fossil', 'hold', 'rain', 'search', 'slight', 'spray', 'tube', 'wire'];

  return (
    <FlexView style={{flex: 1, gap: 20}}>
      <View style={styles.formContainer}>
        <ThemedText size="lg">
          Create Password
        </ThemedText>
        <ThemedText size='sm'>
          Your secret backup phrase makes it easy to bak up and restore your account.
        </ThemedText>
        <ThemedText size='sm'>
          WARNING: Never disclose your backup phrase. Anyone with this phrase can take your wallet forever.
        </ThemedText>
      </View>
      <Pressable
        style={{borderRadius: 16, overflow: "hidden"}}
        onPress={() => {
          opacity.value = withTiming(0, {duration: 800})
        }}
      >
        <View style={styles.secretContainer}>
          {
            secret.map((item, index) => (
              <ThemedText key={index}>{item}</ThemedText>
            ))
          }
        </View>
        <Animated.View style={{
          ...StyleSheet.absoluteFillObject,
          flex: 1,
          opacity
        }}
        >
          <BlurView
            intensity={11}
            tint='systemUltraThinMaterialDark'
            experimentalBlurMethod={'dimezisBlurView'}
            style={styles.blurContainer}
          >
            <Normal.LockIcon/>
            <ThemedText>
              CLICK HERE TO REVEAL SECRET WORDS
            </ThemedText>
          </BlurView>

        </Animated.View>
      </Pressable>

      <View style={styles.confirmContainer}>
        <ThemedText style={styles.tips} size='sm'>
          Tips:
        </ThemedText>
        <NumberList data={[
          'Store this phrase in a password manager like 1Password.',
          'Write this phrase on a piece of paper and store in a secure location.',
          'Memorize this phrase.'
        ]}/>
      </View>

      <View style={{width: "100%", marginTop: "auto"}}>
        <Link href="./step3" style={{width: "100%"}} asChild>
          <Button size="lg" variant="solid">
            Next
          </Button>
        </Link>
      </View>
    </FlexView>
  );
}


const NumberList = ({data}: { data: string[] }) => {
  return (
    <View style={{display: "flex", width: "95%", gap: 4}}>
      {
        data.map((item, index) => (
          <View style={{display: "flex", flexDirection: "row"}} key={index}>
            <View style={{width: 12, marginRight: 4}}>
              <ThemedText size='sm' style={{textAlign: 'right'}}>{index + 1}.</ThemedText>
            </View>
            <View>
              <ThemedText size='sm'>{item}</ThemedText>
            </View>
          </View>
        ))
      }
    </View>
  )

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
      width: "100%",
    },
    secretContainer: {
      padding: 20,
      backgroundColor: Colors.dark.bgGray,
      gap: 12,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      position: "relative",
      overflow: "hidden",
    },
    blurContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      overflow: "hidden",
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
    },
    tips: {
      marginBottom: 21,
    }
  }
)

export default Step2;