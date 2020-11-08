import React , { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from './screens/SettingScreen';
import CounterScreen from './screens/CounterScreen'

export const ThemeContext = React.createContext();

const Stack = createStackNavigator();

export default function App() {
  
  const [theme, setTheme] = useState('light')

  return (
    <NavigationContainer>
      <ThemeContext.Provider value={theme, setTheme} >
      <Stack.Navigator initialRouteName="CounterScreen">
        
          <Stack.Screen name='CounterScreen' component={CounterScreen} />
          <Stack.Screen name='SettingScreen' component={SettingScreen} />
        
      </Stack.Navigator>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
