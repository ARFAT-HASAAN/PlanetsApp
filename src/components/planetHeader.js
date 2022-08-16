import { View, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import Text from './Text'
import { spacing } from '../Theme/spacing'
import { colors } from '../Theme/colors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function PlanetHeader({ backButton = false }) {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Sub_Header}>
        {backButton && (
          <Pressable
            onPress={() => {
              navigation.goBack()
            }}
          >
            <AntDesign
              style={styles.RightArrow}
              name="left"
              size={24}
              color={colors.white}
            />
          </Pressable>
        )}

        <Text preset="h1">THE PLANETS</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
  },

  Sub_Header: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },

  RightArrow: {
    marginRight: spacing[3],
  },
})
