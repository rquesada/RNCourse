/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TestComponent from './src/TestComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

// Screens
import HomeScreen from './src/screens/UserList';
import UserDetails from './src/screens/UserDetails';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }}/>
        <Stack.Screen 
        name="Settings" 
        component={UserDetails} 
        options={{title: 'User'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
