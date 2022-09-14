import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ICar} from '../../types/Car';

type RootStack = NativeStackScreenProps<RootStackParams>;

type RootStackParams = {
  Car: {};
};
export function ScreenCar({route}: RootStack) {
  useEffect(() => {
    const params = route.params as any;
    const values = params.item as ICar;

    console.log(values);
  }, []);
  return (
    <View>
      <Text>carro</Text>
    </View>
  );
}
