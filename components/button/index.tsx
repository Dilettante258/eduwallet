import {Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle} from "react-native";
import {Colors} from "@/constants/Colors";
import React, {useState} from "react";
import {ThemedText} from "@/components/ThemedText";


type ButtonProps = PressableProps & {
  size?: "sm" | "md" | "lg",
  variant?: "solid" | "ghost",
  children: React.ReactNode,
  disabled?: boolean,
  style?: StyleProp<ViewStyle>
}



const Button = (
  {style,
    disabled,
    onPress,
    size = 'lg',
    variant = 'solid',
    children,
    ...rest
  }: ButtonProps) => {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={[
        styles.basic,
        styles[size],
        styles[variant],
        style,
        disabled ? styles.disabled : undefined
      ]}
      {...rest}
    >
      <ThemedText>
        {children}
      </ThemedText>
    </Pressable>
  )
}


const IconButton = ({disabled, onPress , size = 'lg', variant = 'solid', children, ...rest}: ButtonProps) => {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? 'rgb(210, 230, 255)'
            : Colors.dark.primary
        },
        styles.basic,
        IconButtonStyles[size],
        IconButtonStyles[variant]
      ]}
      {...rest}
    >
      {children}
      </Pressable>
  )
}




const styles = StyleSheet.create({
  basic: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  sm: {
    width: 350,
    height: 54,
  },
  md: {
    width: 350,
    height: 54,
  },
  lg: {
    width: "100%",
    height: 54,
  },
  solid: {
    backgroundColor: Colors.dark.primary,
  },
  ghost: {
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  text: {
    color: Colors.dark.text,
    fontSize: 16
  },
  disabled: {
    opacity: 0.5
  }
});

const IconButtonStyles = StyleSheet.create({
  sm: {
    width: 54,
    height: 54,
  },
  md: {
    width: 54,
    height: 54,
  },
  lg: {
    width: 54,
    height: 54,
  },
  solid: {
    backgroundColor: Colors.dark.bgGray,
  },
  ghost: {
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "transparent",
  },
})

export {
  Button,
  IconButton
}