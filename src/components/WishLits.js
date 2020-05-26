import React from 'react'
import {
  View,
} from 'react-native'
import { PostIt } from './PostIt'


export const WishList = props => {
  const { wishes, itemSelected } = props
  
  const iter = wishes.map(item => {
    return <PostIt color={item.color} text={item.text} onPress={()=>{itemSelected(item)}} />
  })
  return <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }} >
    {iter}
  </View>
}