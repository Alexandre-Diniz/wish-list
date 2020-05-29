import React from 'react'
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
  View,
  Dimensions
} from 'react-native'

import { EditWish } from './EditWish'

const amarelo = require('../assets/images/amarelo.png')
const azul = require('../assets/images/azul.png')
const rosa = require('../assets/images/rosa.png')
const salmao = require('../assets/images/salmao.png')
const verde = require('../assets/images/verde.png')

export const PostIt = props => {
  const { color, text, onPress, editList } = props
  let src = ''
  if (color === '#FCD462') {
    src = amarelo
  }
  else if (color === '#12CBE7') {
    src = azul
  }
  else if (color === '#FE8F8E') {
    src = rosa
  }
  else if (color === '#FFC097') {
    src = salmao
  }
  else if (color === '#39DB98') {
    src = verde
  }
  return (
    <ImageBackground
      source={src}
      style={{
        width: 150,
        height: 150,
        marginVertical:20,
        borderColor:color,
        borderWidth:1
      }} >
      <View style={{ width: 150, height: 40 }} >
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'flex-end' }}
          onPress={() => { onPress() }} >
          <Image source={require('../assets/images/close.png')} style={{ height: 24, width: 24, marginRight: 10, marginTop: 10 }} />
        </TouchableOpacity>
        <View style={{ width: 150, height: 110, alignItems: 'center' }}
        >
          <Text style={{ fontSize: 18, marginHorizontal:5 }} > {text} </Text>
        </View>
      </View>
    </ImageBackground>
  )
}