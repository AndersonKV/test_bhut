import React from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';
import {ICar} from '../../types/Car';

interface Props {
  value: string | number;
  actionName: string;
  label: string;
  handleChange: (text: string | number, actionName: string) => void;
}
export function Input({label, value, handleChange, actionName}: Props) {
  return (
    <View style={styles.contentInput}>
      <Text style={styles.contentInputLabel}>{label}:</Text>
      <TextInput
        keyboardType={typeof value === 'number' ? 'numeric' : 'default'}
        value={value.toString()}
        style={styles.input}
        onChangeText={val => handleChange(val, actionName)}
        // onChangeText={val => handle({...rest, [actionName]: val} as ICar)}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  contentInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentInputLabel: {
    width: 50,
  },
  input: {flex: 1, backgroundColor: 'whitesmoke'},
});
