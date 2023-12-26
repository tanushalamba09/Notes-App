import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NotesHandlerScreen from './screens/NotesHandlerScreen';
import NewNotes from './screens/NewNotes';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NotesHandler" component={NotesHandlerScreen} />
        <Stack.Screen name="NewNotes" component={NewNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
