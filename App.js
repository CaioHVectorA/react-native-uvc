import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/ContosContainer'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import UserContext from './components/userContext'
import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import colors from './components/globalVars'
import { useFonts } from 'expo-font';
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
    const [Filtro, setFiltro] = useState(null)
    const [Screen, setScreen] = useState('Home')
    const [ref, setRef] = useState(null)
    const [txt,setTxt] = useState(null)
        const [fontsLoaded] = useFonts({
    'Raleaway': require('./assets/Fonts/Raleway-VariableFont_wght.ttf'),
  });
  return (
    
    <UserContext.Provider value={{Filtro, setFiltro,Screen,setScreen,ref,setRef,txt,setTxt}}>
    <NavigationContainer>
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.Rosa
      },
      drawerStyle: {
        backgroundColor: '#282828',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Raleaway'
      }
    }} useLegacyImplementation>
    <Drawer.Screen name={'Contos'} component={Home} />
    </Drawer.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
}
