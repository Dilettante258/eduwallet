import {Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle, Text} from "react-native";
import {Colors} from "@/constants/Colors";
import React from "react";
import {ThemedText} from "@/components/ThemedText";


type ButtonProps = PressableProps & {
  size?: "sm" | "md" | "lg",
  variant?: "solid" | "ghost",
  children: React.ReactNode,
  disabled?: boolean,
  style?: StyleProp<ViewStyle>
}

type PressableRef = React.ElementRef<typeof Pressable>;

const Button = React.forwardRef<PressableRef, ButtonProps>((
  {style,
    disabled,
    onPress,
    size = 'lg',
    variant = 'solid',
    children,
    ...rest
  }: ButtonProps, ref) => {
  return (
    <Pressable
      ref={ref}
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
})


const IconButton = React.forwardRef<PressableRef, ButtonProps>(({disabled, onPress, size = 'lg', variant = 'solid', children, ...rest}: ButtonProps,ref) => {
  return (
    <Pressable
      ref={ref}
      style={({ pressed }) => [
        styles.basic,
        IconButtonStyles[size],
        IconButtonStyles[variant]
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  )
})
// TODO: 莫名其妙的失效了




const styles = StyleSheet.create({
  basic: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    alignContent: "center",
  },
  sm: {
    width: 63,
    paddingHorizontal: 12,
    paddingVertical: 4,
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
    borderColor: "#A5A5A5",
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