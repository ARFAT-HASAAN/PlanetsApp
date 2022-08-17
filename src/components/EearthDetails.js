import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from './Text'
import { spacing } from '../Theme/spacing'
import { colors } from '../Theme/colors'

export default function EearthDetails({ title, value }) {
  return (
    <View style={styles.DetailsContainer}>
      <Text>{title}</Text>
      <Text preset="h1">{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  DetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing[3],
    margin: spacing[4],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.darkGrey,
  },
})
