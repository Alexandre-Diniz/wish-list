import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export const ColorBar = props => {
  const { chooseColor } = props
  const [color, setColor] = useState('#FCD462')
  return (
    <View style={styles.container} >

      <View style={[styles.boxSelected, { borderColor: color === '#FCD462' ? '#555' : '#FFF' }]} >
        <TouchableOpacity style={[styles.box, { backgroundColor: '#FCD462' }]}
          onPress={() => {
            setColor('#FCD462')
            chooseColor('#FCD462')
          }}
        />
      </View>

      <View style={[styles.boxSelected, { borderColor: color === '#12CBE7' ? '#555' : '#FFF' }]} >
        <TouchableOpacity style={[styles.box, { backgroundColor: '#12CBE7' }]}
          onPress={() => {
            setColor('#12CBE7')
            chooseColor('#12CBE7')
          }}
        />
      </View>

      <View style={[styles.boxSelected, { borderColor: color === '#FE8F8E' ? '#555' : '#FFF' }]} >
        <TouchableOpacity style={[styles.box, { backgroundColor: '#FE8F8E' }]}
          onPress={() => {
            setColor('#FE8F8E')
            chooseColor('#FE8F8E')
          }}
        />
      </View>

      <View style={[styles.boxSelected, { borderColor: color === '#FFC097' ? '#555' : '#FFF' }]} >
        <TouchableOpacity style={[styles.box, { backgroundColor: '#FFC097' }]}
          onPress={() => {
            setColor('#FFC097')
            chooseColor('#FFC097')
          }}
        />
      </View>

      <View style={[styles.boxSelected, { borderColor: color === '#39DB98' ? '#555' : '#FFF' }]} >
        <TouchableOpacity style={[styles.box, { backgroundColor: '#39DB98' }]}
          onPress={() => {
            setColor('#39DB98')
            chooseColor('#39DB98')
          }}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    height:40
  },
  boxSelected: {
    borderWidth: 4,
  },
  box: {
    width: 30,
    height: 30,
  }
})