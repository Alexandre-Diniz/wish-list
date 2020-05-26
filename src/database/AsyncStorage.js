import { Alert, AsyncStorage } from 'react-native'

const key = 'wish-list'

export const includeWish = async wish => {
  let wishes = ''

  setTimeout(() => {
    wishes = getAllWishes()
  }, 2000)

  try {
    await AsyncStorage.setItem(key, JSON.stringify(wishes.push(wish)))
    Alert.alert('Wish added')
  } catch (err) {
    Alert.alert('Erro desconhecido')
  }
}

export const getAllWishes = async () => {
  try {
    const wishes = await AsyncStorage.getItem(key)
    console.log(wishes)
    if (wishes) {
      return JSON.parse(wishes)
    } else {
      console.log('aqui')
      return []
    }
  } catch (err) {
    Alert.alert('Erro desconhecido')
  }
}

export const removeWish = async wish => {
  AsyncStorage.getItem(key).then(dataset => {
    return JSON.parse(dataset).filter(item => item !== wish)
  })
}