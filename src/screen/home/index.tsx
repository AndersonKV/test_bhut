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

export default function Home() {
  function handle() {
    console.log('click');
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'whitesmoke',
      }}>
      <View style={{padding: 20, borderWidth: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}>
          API REST TEST
        </Text>
      </View>

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

        <Indicator
          title="Listar todos os carros"
          background="#449d44"
          color="white"
          handle={handle}
        />

        <Indicator
          title="Encontrar carro por id"
          background="#e6e6e6"
          color="#000"
          handle={handle}
        />

        <Indicator
          title="Atualizar carro"
          background="#ec971f"
          color="white"
          handle={handle}
        />

        <Indicator
          title="Deletar carro"
          background="#d9534f"
          color="white"
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
