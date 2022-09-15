import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import List from '../screen/List';
import {ScreenCar} from '../screen/Car';
import {PageNotFound} from '../screen/NotFound';
import {ScreenPostCar} from '../screen/PostCar';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'API REST TEST',
          }}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{
            title: 'Lista de carros',
          }}
          name="List"
          component={List}
        />

        <Stack.Screen
          options={{
            title: 'Publicação',
          }}
          name="PostCar"
          component={ScreenPostCar}
        />

        <Stack.Screen
          options={{
            title: 'Carro',
          }}
          name="Car"
          component={ScreenCar}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="PageNotFound"
          component={PageNotFound}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
