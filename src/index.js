import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Alert,
  AsyncStorage,
  ScrollView,
  Button
} from 'react-native'
import { AddWish } from './components/AddWish'
import { PostIt } from './components/PostIt'
import { WishList } from './components/WishLits'


const App = () => {
  const [wishes, setWishes] = useState([])

  return (
    <View style={styles.container} >

      <View style={styles.body} >
        <ScrollView style={{ flex: 1 }} >
          <WishList wishes={wishes} itemSelected={item => {
            const filtered = wishes.filter(function (value, index, arr) {
              return value !== item
            })
            setWishes(filtered)
            AsyncStorage.setItem('wish-list', JSON.stringify(filtered))
          }} />
        </ScrollView>

      </View>

      <View style={styles.footer} >
        <AddWish getWish={wish => {
          let wishList = []
          AsyncStorage.getItem('wish-list')
            .then(wishes => {
              if (wishes !== null) {
                wishList = JSON.parse(wishes || '[]')
                wishList = [...wishList, wish]
                setWishes(wishList)
                AsyncStorage.setItem('wish-list', JSON.stringify(wishList))
                  .then(() => Alert.alert('Wish added'))
              }
            })
        }} />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 9,
    backgroundColor: '#EFCAC4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})