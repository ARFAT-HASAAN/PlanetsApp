import { View, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Text from './Text'
import { colors } from '../Theme/colors'
import { spacing } from '../Theme/spacing'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Press({ items }) {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', { planet: items })
      }}
    >
      <View style={styles.Item_container}>
        <View style={styles.item}>
          <View style={[styles.circle, { backgroundColor: items.color }]} />
          <Text preset="bold"> {items.name.toUpperCase()} </Text>
        </View>
        <View>
          <Text>
            <AntDesign name="right" size={18} color={colors.white} />
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: spacing[5],
  },

  Item_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[2],
  },

  item: {
    flexDirection: 'row',
    padding: spacing[3],
    alignItems: 'center',
  },

  circle: {
    width: 30,
    height: 30,
    marginRight: spacing[5],
    borderRadius: 15,
  },

  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.3,
  },
})
