import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home';
import List from '../screen/list';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
