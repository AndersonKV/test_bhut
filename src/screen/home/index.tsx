import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Indicator} from '../../components/Indicator';

type ScreenProps = NativeStackScreenProps<RootStack>;

type RootStack = {
  List: undefined;
  PostCar: undefined;
};

export default function ScreenHome({navigation}: ScreenProps) {
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
          navigate={() => navigation.navigate('PostCar')}
        />

        <Indicator
          title="Listar todos os carros"
          background="#449d44"
          color="white"
          navigate={() => navigation.navigate('List')}
        />

        <Indicator
          title="Encontrar carro por id"
          background="#e6e6e6"
          color="#000"
          navigate={() => navigation.navigate('List')}
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
