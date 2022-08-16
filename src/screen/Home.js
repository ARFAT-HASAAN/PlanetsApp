import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  Pressable,
} from 'react-native'
import React from 'react'
import PlanetHeader from '../components/planetHeader'
import { colors } from '../Theme/colors'
import { PLANET_LIST } from '../FakeData/planet-list'
import Text from '../components/Text'
import { spacing } from '../Theme/spacing'
import { AntDesign } from '@expo/vector-icons'

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('Details')
              }}
            >
              <View style={styles.Item_container}>
                <View style={styles.item}>
                  <View
                    style={[styles.circle, { backgroundColor: item.color }]}
                  />
                  <Text preset="bold"> {item.name.toUpperCase()} </Text>
                </View>
                <View>
                  <Text>
                    <AntDesign name="right" size={18} color={colors.white} />
                  </Text>
                </View>
              </View>
            </Pressable>
          )
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.black,
  },
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
