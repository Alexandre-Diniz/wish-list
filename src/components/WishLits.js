import React from 'react'
import {
  View,
} from 'react-native'
import { PostIt } from './PostIt'


export const WishList = props => {
  const { wishes, itemSelected, editList } = props
  
  const iter = wishes.map(item => {
    return <PostIt
      text={item.text}
      key={item.key}
      color={item.color}
      onPress={()=>{
        itemSelected(item)
      }}
      editList={wish=>editList(wish)} />
  })
  return <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }} >
    {iter}
  </View>
}