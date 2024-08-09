import { TrueSheet } from "@lodev09/react-native-true-sheet"
import {useRef} from "react";
import {Button, Pressable, View} from "react-native";
import {Link, router} from "expo-router";
import {ThemedText} from "@/components/ThemedText";

const Playground = () => {
  const sheet = useRef<TrueSheet>(null)

  // Present the sheet ✅
  const present = async () => {
    await sheet.current?.present()
    console.log('horray! sheet has been presented 💩')
  }

  // Dismiss the sheet ✅
  const dismiss = async () => {
    await sheet.current?.dismiss()
    console.log('Bye bye 👋')
  }

  return (
    <View style={{flex:1,gap:4,padding: 16,marginVertical: 60}}>
      <Link href="/sign-up/(step)/step1"><ThemedText>Sign up</ThemedText></Link>
      <Link href="/(tabs)"><ThemedText>Asset</ThemedText></Link>
      <Link href="/playground1"><ThemedText>PlayGround1</ThemedText></Link>
      <Link href="/playground2"><ThemedText>PlayGround2</ThemedText></Link>

      <Button onPress={present} title="Present" />
      <TrueSheet ref={sheet}>
        <View style={{flex:1,gap:4,padding: 16}}>
          <ThemedText>Hello 👋</ThemedText>
        </View>
      </TrueSheet>
    </View>
  )
}

export default Playground