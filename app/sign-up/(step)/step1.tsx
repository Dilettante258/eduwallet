import React, {useState} from 'react';
import {Alert, Pressable, StyleSheet, View} from 'react-native';
import {BackButton, Button, IconButton} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {Brand, Normal} from "@/components/svg";
import { Link } from 'expo-router';
import {FlexView} from "@/components/ThemedView";
import {SecureInput} from "@/components/input";
import Checkbox from "@/components/checkbox";
import { ProgressBar }from "@/app/sign-up/component/ProgressBar";
import FormItem from "@/components/FormItem";
import {useForm} from "react-hook-form";
import {Colors} from "@/constants/Colors";
import {TrueSheet} from "@lodev09/react-native-true-sheet";
import {useRef} from "react";
import {bold} from "colorette";
const Step1 = () => {
  const [checked, setChecked] = useState(false);
  const [level, setLevel] = useState(1)
  const sheet = useRef<TrueSheet>(null)

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    getValues
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = () => {
    Alert. alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console. log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console. log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console. log('OK Pressed')},
      ]
    )
  }

  const watchPassword = watch("password")




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
    <FlexView style={[styles.container, {gap: 20, flex: 1}]}>
      <View style={{gap: 4,width: "100%"}}>
        <FlexView style={{flexDirection: 'row' ,gap: 4, alignItems: 'center'}}>
          <Brand.BrandBlackEdge length={32}/>
          <ThemedText>EduWallet</ThemedText>
        </FlexView>
        <BackButton />
      </View>
      <ProgressBar level={level} />
      <View style={styles.formContainer}>
        <ThemedText size="lg">
          Create Password
        </ThemedText>
        <FormItem
          required
          name="password"
          label="New password"
          control={control}
          errors={errors.password}
          rules={{
            required: 'Password required.',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: '8+ characters with upper, lower, numbers, symbols required.'
            }
          }}
          render={({ field: { onChange, value } }) => (
            <SecureInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter a password for your wallet"
            />
          )}
        />
        <FormItem
          required
          label="Confirm password"
          control={control}
          name="confirmPassword"
          rules={{
            required: 'Password required.',
            validate: (value, formValues) => {
              const { password } = formValues;
              return password === value || "Passwords should match!";
          }}}
          errors={errors.password}
          render={({ field: { onChange, value } }) => (
            <SecureInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter the password again"
              enterKeyHint="next"
            />
          )}
        />
        <View style={{flex: 1}} />
        <View style={styles.confirmContainer}>
          <Checkbox checked={checked} onCheckChange={setChecked}>
            <ThemedText size='sm'>
              I have read and agree to the{' '}
            </ThemedText>
            <Pressable onPress={present}>
              <ThemedText size='sm' type='link'>
                Terms of Use
              </ThemedText>
            </Pressable>
            <TrueSheet
              ref={sheet}
              sizes={['auto', 'large']}
              style={styles.sheet}
              cornerRadius={24}
            >
              <View style={{padding: 20, marginTop: 20}}>
                <ThemedText type='bold' size='xl' style={{textAlign: 'center'}}>Terms of Use</ThemedText>
                <ThemedText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit lorem molestie metus feugiat faucibus. Proin facilisis risus sit amet metus rutrum cursus. Nulla vitae ornare tortor. Nunc scelerisque tellus eu lacus pharetra, ac cursus ex porta. Vestibulum suscipit magna vel iaculis mollis. Aenean iaculis lectus vitae eleifend dignissim. Maecenas tincidunt hendrerit purus eget imperdiet. Aliquam erat volutpat. Nam vitae tellus luctus, pharetra nibh non, molestie ante. Aliquam ornare sollicitudin leo eu tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pellentesque tellus eget mattis luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec scelerisque ultrices nisl sit amet accumsan. Donec consequat purus dictum orci ullamcorper molestie.
                </ThemedText>
                <Button onPress={dismiss}>
                  Acknowledge
                </Button>
              </View>

            </TrueSheet>

          </Checkbox>
          <Link href="/sign-up/step2" style={{width: "100%"}} asChild>
            <Button size="lg" variant="solid"
                    // onPress={handleSubmit(onSubmit)}
                    onPress={onSubmit}>
              Create
            </Button>
          </Link>
        </View>
      </View>
    </FlexView>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      gap: 20,
      marginTop: 40,
      marginBottom: 20,
      marginHorizontal: 20
    },
    formContainer: {
      gap: 20,
      width: "100%",
      display: "flex",
      flex: 1,
    },
    confirmContainer: {
      display: "flex",
      gap: 20,
      width: "100%",
    },
    sheet: {
      backgroundColor: Colors.dark.background,
    }
  }
)

export default Step1;