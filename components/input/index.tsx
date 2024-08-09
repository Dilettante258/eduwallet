import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, TextInputProps, TouchableWithoutFeedback} from 'react-native';
import {Colors} from "@/constants/Colors";
import {ThemedText} from "@/components/ThemedText";


type InputProps = {
  defaultValue?: string;
} & TextInputProps;



const Input = ({defaultValue, style, ...props}: InputProps) => {
  const [value, onChangeValue] = React.useState(defaultValue??'');
  return (
    <SafeAreaView>
      <TextInput
        style={[style,styles.input]}
        onChangeText={onChangeValue}
        autoCapitalize="none"
        value={value}
        placeholderTextColor={Colors.dark.textGray}
        {...props}
      />
    </SafeAreaView>
  );
};
const SecureInput = ({defaultValue, ...props}: InputProps) => {
  const [hide, setHide] = useState<boolean>(false);
  const [value, onChangeValue] = React.useState(defaultValue??'');
  return (
    <SafeAreaView style={{position: 'relative',zIndex: 1}}>
      <TextInput
        secureTextEntry={hide}
        style={styles.input}
        onChangeText={onChangeValue}
        autoCapitalize="none"
        value={value}
        placeholderTextColor={Colors.dark.textGray}
        {...props}
      />
      <TouchableWithoutFeedback style={styles.touchable} onPress={()=>setHide(!hide)}>
        {/*{hide ? (*/}
        {/*  <FontAwesome6 name="eye" size={24} color="black" />) :*/}
        {/*  (<FontAwesome6 name="eye-slash" size={24} color="black" />)}*/}

        {hide ? (
            <ThemedText>1111111111</ThemedText>) :
          (<ThemedText>2222222</ThemedText>)}
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  input: {
    height: 53,
    borderWidth: 1,
    borderColor: Colors.dark.textGray,
    backgroundColor: Colors.dark.bgGray,
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 21,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginVertical: 4,
    zIndex: 5,
  },
  touchable: {
    position: 'absolute',
    right: 20,
    top: 20,
  }
});

export{
  Input,
  SecureInput
}