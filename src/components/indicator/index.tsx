import React from 'react';

import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

interface Props {
  handle?: () => void;
  title: string;
  color: string;
  background: string;
  navigate: () => void;
}

export function Indicator({title, color, background, navigate}: Props) {
  return (
    <TouchableOpacity onPress={navigate}>
      <View style={[styles.button, {backgroundColor: background}]}>
        <Text style={[styles.text, {color: color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderColor: 'none',
  },
  text: {fontWeight: 'bold', fontSize: 20},
});
