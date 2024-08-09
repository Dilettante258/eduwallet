import React from 'react'
import {Controller, ControllerProps, FieldPath, FieldValues, GlobalError, UseControllerProps} from 'react-hook-form'

import {TextStyle, View, ViewStyle} from 'react-native'
import {ThemedText} from "@/components/ThemedText";
import {WarningIcon} from "@/components/svg";

type FormItemProps<T extends FieldValues, TName extends FieldPath<T>> = {
  label?: string
  required?: boolean
  errors?: GlobalError
  style?: ViewStyle
  labelStyle?: TextStyle
  border?: boolean
} & ControllerProps<T, TName> &
  UseControllerProps<T, TName>

const FormItem = <T extends FieldValues, TName extends FieldPath<T>>(
  props: FormItemProps<T, TName>
) => {
  const {
    name,
    control,
    rules,
    label,
    required,
    errors,
    style = {},
    labelStyle = {},
    border = true,
    render
  } = props

  return (
    <View key={name} style={[style,{
      width: "100%",
      height: 109,
    }]}>
      {label && (
        <ThemedText
          style={[labelStyle, { marginBottom: 8 }]}
        >
          {label}
        </ThemedText>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={render}
      />
      {rules && errors && errors?.message && (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4
          }}
        >
          <WarningIcon />
          <ThemedText
            type='error'
            size='xxs'
          >
            {errors?.message}
          </ThemedText>
        </View>
        )}

      {/*<View*/}
      {/*  style={{*/}
      {/*    borderWidth: 1,*/}
      {/*    ...(!errors*/}
      {/*      ? {*/}
      {/*        borderColor: border ? '#B3BAC1' : 'transparent'*/}
      {/*      }*/}
      {/*      : {*/}
      {/*        borderColor: border ? '#D52D0B' : 'transparent'*/}
      {/*      })*/}
      {/*  }}*/}
      {/*>*/}

      {/*</View>*/}

    </View>
  )
}

export default FormItem
