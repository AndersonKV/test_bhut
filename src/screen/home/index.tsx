import React from 'react';
import {View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Indicator} from '../../components/Indicator';

type ScreenProps = NativeStackScreenProps<RootStack>;

type RootStack = {
  List: undefined;
  Publish: undefined;
  FindCar: undefined;
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
          navigate={() => navigation.navigate('Publish')}
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
          navigate={() => navigation.navigate('FindCar')}
        />
      </View>
    </View>
  );
}
