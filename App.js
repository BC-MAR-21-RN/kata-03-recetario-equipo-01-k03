import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/containers/Home';
import ItemDetail from './src/containers/ItemDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}}  component={Home}/>
        <Stack.Screen name="Detail" options={{headerShown: false}}  component={ItemDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
