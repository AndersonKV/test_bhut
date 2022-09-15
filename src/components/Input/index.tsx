import React, {ChangeEvent} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';
import {ICar} from '../../types/Car';

interface Props {
  placeholder?: string;
  value: string | number;
  actionName: string;
  label: string;
  handleChange: (e: string | ChangeEvent<any>) => void;

  //handleChange: (text: string | number, actionName: string) => void;
}
export function Input({
  placeholder,
  label,
  value,
  handleChange,
  actionName,
}: Props) {
  return (
    <View style={styles.contentInput}>
      <Text style={styles.contentInputLabel}>{label}:</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={typeof value === 'number' ? 'numeric' : 'default'}
        value={value.toString()}
        style={styles.input}
        onChangeText={handleChange}

        // onChangeText={val => handleChange(val, actionName)}
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
