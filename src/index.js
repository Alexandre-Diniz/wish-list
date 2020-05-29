import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native'
import { AddWish } from './components/AddWish'
import { WishList } from './components/WishLits'


const App = () => {
  const [wishes, setWishes] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('wish-list')
      .then(wishes => {
        if (wishes !== null) {
          wishList = JSON.parse(wishes)
          setWishes(wishList)
        }
      })
  }, [])

  useEffect(() => {
    AsyncStorage.setItem('wish-list', JSON.stringify(wishes))
  }, [wishes])

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.body} >
        <ScrollView style={{ flex: 1, width: Dimensions.get('window').width - 60, marginTop:10 }} >
          <WishList wishes={wishes} itemSelected={item => {
            const filtered = wishes.filter(function (value, index, arr) {
              return value !== item
            })
            setWishes(filtered)
          }} />
        </ScrollView>

      </View>

      <View style={styles.footer} >
        <AddWish getWish={wish => {
          setWishes([...wishes, wish])
        }} />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 9,
    backgroundColor: '#FCEDEE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth:1,
    borderTopColor:'#FFC097',
  }
})