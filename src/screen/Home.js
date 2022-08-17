import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  Pressable,
  TextInput,
} from 'react-native'
import React, { useState } from 'react'
import PlanetHeader from '../components/planetHeader'
import { colors } from '../Theme/colors'
import { PLANET_LIST } from '../FakeData/planet-list'
import { spacing } from '../Theme/spacing'
import Press from '../components/Press'

export default function Home() {
  const [Data, setData] = useState(PLANET_LIST)

  const ValueSetter = (text) => {
    const searchText = text.toLowerCase()
    console.log('Search text -->', searchText)
    const Earths = Data.filter((earth) =>
      earth.name.toLowerCase().startsWith(searchText),
    )
    console.log(Earths)
    setData(Earths)
  }

  const RenderItem = ({ item, index }) => {
    return <Press items={item} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />

      <TextInput
        style={styles.input}
        placeholder="Type the planet name"
        placeholderTextColor={colors.grey}
        onChangeText={(text) => ValueSetter(text)}
      />

      <FlatList
        data={Data}
        renderItem={RenderItem}
        keyExtractor={(item) => item.name}
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

  input: {
    margin: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderBottomColor: colors.white,
    color: colors.grey,
    fontSize: 18,
  },
})
