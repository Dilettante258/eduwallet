import {DarkTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';
import Loading from "@/app/loading";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return <Loading/>
  }

  return (
    // colorScheme === 'dark' ? DarkTheme : DefaultTheme
    <ThemeProvider value={DarkTheme}>
      <Stack initialRouteName="(tabs)" screenOptions={{}}>
        <Stack.Screen name="playground1" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{
          headerShown: false,
          animationTypeForReplace: 'pop',
          animation: 'slide_from_right',
        }}/>
        <Stack.Screen name="sign-up/index" options={
          {
            title: "Sign Up",
            headerShown: false,
            animation: 'fade_from_bottom',
          }}/>
        <Stack.Screen name="sign-up/(step)" options={
          {
            title: "Sign Up | Step 1",
            animation: 'slide_from_right',
            headerShown: false,
          }}/>
        <Stack.Screen name="sign-up/importPage" options={
          {
            title: "Import Account",
            animation: 'slide_from_right',
            headerShown: false,
          }}/>
        <Stack.Screen name="sign-up/complete"
                      options={{
                        animation: 'slide_from_right',
                        headerShown: false
                      }}/>
        <Stack.Screen name="(asset)" options={{headerShown: false, animation: 'slide_from_right',}}/>
        <Stack.Screen name="+not-found" options={{headerShown: false}}/>
      </Stack>
    </ThemeProvider>
  );
}
