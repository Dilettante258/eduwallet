// App.tsx
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TextInputProps,
  StyleSheet
} from 'react-native'
import { useForm } from 'react-hook-form'

import FormItem from '@/components/FormItem'
import Input from "@/components/input";

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/



export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = () => {
    Alert.alert('提交成功~💐')
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Sign in</Text>



      <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    marginBottom: 30,
    fontSize: 50
  }
})

