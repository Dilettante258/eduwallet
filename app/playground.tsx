import { TrueSheet } from "@lodev09/react-native-true-sheet"
import {useRef} from "react";
import {Button, View} from "react-native";
import {Link} from "expo-router";
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
    <View style={{flex:1,gap:4,padding: 16}}>
      <Link href={"/sign-up/step1"}><ThemedText>Sign up</ThemedText></Link>
      <Link href={"/asset"}><ThemedText>Asset</ThemedText></Link>
      <Link href={"/playground"}><ThemedText>PlayGround</ThemedText></Link>
      <Link href="/modal">Present modal</Link>


      <Button onPress={present} title="Present" />

    </View>
  )
}

export default Playground