import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import List from '../screen/List';
import {ScreenDashboard} from '../screen/Dashboard';
import {PageNotFound} from '../screen/NotFound';
import {ScreenPublish} from '../screen/Publish';
import {ScreenFindCar} from '../screen/FindCar';

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
          name="Publish"
          component={ScreenPublish}
        />

        <Stack.Screen
          options={{
            title: 'Carro',
          }}
          name="Dashboard"
          component={ScreenDashboard}
        />

        <Stack.Screen
          options={{
            title: 'Encontre carro pelo id',
          }}
          name="FindCar"
          component={ScreenFindCar}
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
