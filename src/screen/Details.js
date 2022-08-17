import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native'
import React from 'react'
import PlanetHeader from '../components/planetHeader'
import { colors } from '../Theme/colors'
import {
  MercurySvg,
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from '../svg/index.js'

import { spacing } from '../Theme/spacing'
import Text from '../components/Text'
import { Link } from '@react-navigation/native'
import EearthDetails from '../components/EearthDetails'

export default function Details({ route }) {
  const planet = route.params.planet
  console.log('you planet -->', planet.name)
  const {
    name,
    description,
    wikiLink,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
  } = planet
  const RenderImage = () => {
    switch (name) {
      case 'mercury':
        return <MercurySvg />
      case 'venus':
        return <VenusSvg />
      case 'earth':
        return <EarthSvg />
      case 'mars':
        return <MarsSvg />
      case 'jupiter':
        return <JupiterSvg />
      case 'saturn':
        return <SaturnSvg />
      case 'uranus':
        return <UranusSvg />
      case 'neptune':
        return <NeptuneSvg />
    }
  }

  return (
    <View style={styles.container}>
      <PlanetHeader backButton={true}></PlanetHeader>
      <ScrollView>
        <View style={styles.imageView}>{RenderImage()}</View>
        <View style={styles.Planet_Container}>
          <View>
            <Text preset="h2" style={styles.planetName}>
              {' '}
              {name}{' '}
            </Text>
          </View>
          <View>
            <Text style={styles.planet_Desc}> {description}</Text>
          </View>
          <Pressable
            onPress={() => Linking.openURL(wikiLink)}
            style={styles.planet_Source}
          >
            <Text preset="h4" style={{ color: colors.grey }}>
              Source:
            </Text>
            <Text style={styles.wiki} preset="h4">
              Wickedia
            </Text>
          </Pressable>
        </View>

        <EearthDetails title="ROTATION TIME" value={rotationTime} />
        <EearthDetails title="REVOLUTION TIME" value={revolutionTime} />
        <EearthDetails title="RADIUS" value={radius} />
        <EearthDetails title="AVG" value={avgTemp} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: colors.black,
  },

  imageView: {
    justifyContent: 'center',
    padding: spacing[5],
    alignItems: 'center',
    marginTop: spacing[8],
  },

  Planet_Container: {
    alignItems: 'center',
    padding: spacing[8],
  },

  planetName: {
    marginVertical: spacing[5],
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
  },

  planet_Desc: {
    color: colors.grey,
    fontSize: 22,
    textAlign: 'center',
  },

  planet_Source: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing[3],
    alignItems: 'center',
  },

  wiki: {
    textDecorationLine: 'underline',
    marginLeft: spacing[1],
  },
})
