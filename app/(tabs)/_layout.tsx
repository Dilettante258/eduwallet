import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import Animated, {Easing, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;


const Test = ({ focused, ...rest}: {
  focused: boolean;
}) => {
  const width = useSharedValue(0);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, config),
    };
  });
  width.value = 42;
  if (!focused) {
    width.value = 0;
  }
  return (
    <Animated.View style={[{
      position: 'absolute',
      height: 4,
      width: 0,
      borderRadius: 100,
      bottom: 0,
      backgroundColor: 'blue'
    },style]}>
    </Animated.View>
  )
}


export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      sceneContainerStyle={{
        marginHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
        flex: 1,
        position: 'relative',
      }}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          top: windowHeight - 86,
          marginHorizontal: 20,
          marginBottom: 20,
          borderRadius: 100,
          height: 76,
          paddingHorizontal: 40,
          backgroundColor: "white",
        },
        tabBarItemStyle: {
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          paddingVertical: 16,
          paddingHorizontal: 16,
          position: "relative",
        },
        tabBarLabel: ({focused,...rest})=> <Test focused={focused}/>,
        tabBarActiveTintColor: '#1C1C1C',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: 'Achievements',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
