import {Navigator, Stack, usePathname, useSegments} from 'expo-router';
import {ThemedText} from "@/components/ThemedText";
import {View} from "react-native";
import Slot = Navigator.Slot;
import {ProgressBar} from "@/app/sign-up/component/ProgressBar";
import SignUpHeader from "@/app/sign-up/component/Header";
import CommonCSS from "@/constants/CommonCSS";

export default function HomeLayout() {
  const pathname = usePathname();

  return (
    <View style={CommonCSS.screen}>
      <SignUpHeader />
      <ThemedText>{}</ThemedText>
      <ProgressBar level={Number(pathname.slice(-1))} />
      <Slot/>
    </View>
  );
}