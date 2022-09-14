import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

interface Props {
  handle: () => void;
  title: string;
  color: string;
  background: string;
}

const Indicator = ({title, color, background, handle}: Props) => {
  return (
    <TouchableOpacity onPress={() => handle()}>
      <View style={[styles.button, {backgroundColor: background}]}>
        <Text style={[styles.text, {color: color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function List() {
  function handle() {
    console.log('click');
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'whitesmoke',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Indicator
          title="Adicionar carro"
          background="#337ab7"
          color="#fff"
          handle={handle}
        />
      </View>
    </View>
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
