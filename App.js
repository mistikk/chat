import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SCREEN from './src/screens';
import * as ROUTES from './src/constants/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={ROUTES.LOGIN}>
        <Stack.Screen name={ROUTES.LOGIN} component={SCREEN.Login} />
        <Stack.Screen
          name={ROUTES.CONVERSATIONS}
          component={SCREEN.Conversations}
        />
        <Stack.Screen name={ROUTES.CHAT} component={SCREEN.Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
