import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import PlanetHeader from '../components/planetHeader'
import { colors } from '../Theme/colors'

export default function Details() {
  return (
    <View style={styles.container}>
      <PlanetHeader backButton={true}></PlanetHeader>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.black,
  },
})
