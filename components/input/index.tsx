import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Colors} from "@/constants/Colors";

type InputProps = {
  defaultValue?: string;
} & TextInputProps;



const Input = ({defaultValue, ...props}: InputProps) => {
  const [value, onChangeValue] = React.useState(defaultValue??'');
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeValue}
        autoCapitalize="none"
        value={value}
        {...props}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 53,
    borderWidth: 1,
    backgroundColor: Colors.dark.bgGray,
    color: Colors.dark.textGray,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginVertical: 4,
  },
});

export default Input;