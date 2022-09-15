import React, {ChangeEvent} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

interface Props {
  placeholder?: string;
  value: string;
  label: string;
  handleChange: (e: string | ChangeEvent<any>) => void;
  keyboardType: KeyboardTypeOptions;
}
export function Input({
  keyboardType,
  placeholder,
  label,
  value,
  handleChange,
}: Props) {
  return (
    <View style={styles.contentInput}>
      <Text style={styles.contentInputLabel}>{label}:</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        style={styles.input}
        onChangeText={handleChange}
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
