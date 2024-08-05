import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Button, IconButton} from "@/components/button";
import {ThemedText} from "@/components/ThemedText";
import {BrandBlackEdge, LeftArrow} from "@/components/svg";
import { Link } from 'expo-router';
import {FlexView} from "@/components/ThemedView";
import {SecureInput} from "@/components/input";
import Checkbox from "@/components/checkbox";
import { ProgressBar }from "@/app/sign-up/component/ProgressBar";
import FormItem from "@/components/FormItem";
import {useForm} from "react-hook-form";



const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


const Step1 = () => {
  const [checked, setChecked] = useState(false);
  const [level, setLevel] = useState(1)

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


  return (
    <FlexView style={[styles.container, {gap: 20, flex: 1}]}>
      <View style={{gap: 4,width: "100%"}}>
        <FlexView style={{flexDirection: 'row' ,gap: 4, alignItems: 'center'}}>
          <BrandBlackEdge length={32}/>
          <ThemedText>EduWallet</ThemedText>
        </FlexView>
        <Link href="/sign-up" asChild>
          <View>
            <IconButton>
              <LeftArrow />
              <ThemedText>{' '}</ThemedText>
            </IconButton>
          </View>
        </Link>
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
            <Link href={'#'}>
              <ThemedText size='sm' type='link'>
                Terms of Use
              </ThemedText>
            </Link>
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
  }
)

export default Step1;