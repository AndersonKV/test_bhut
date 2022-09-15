import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';

type RootStack = NativeStackScreenProps<RootStackParams>;

type RootStackParams = {
  Home: undefined;
};

export function PageNotFound({navigation}: RootStack) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Pagina não encontrada </Text>
      <Button title="voltar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
