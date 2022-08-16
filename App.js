import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'

import Home from './src/screen/Home'
import Details from './src/screen/Details'

const Stack = createNativeStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    AntonioMidume: require('./src/fonts/Antonio-Medium.ttf'),
    LeagueSpartanRegular: require('./src/fonts/LeagueSpartan-Regular.ttf'),
    LeagueSpartanBold: require('./src/fonts/LeagueSpartan-Bold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
