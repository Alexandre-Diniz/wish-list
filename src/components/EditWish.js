import React, { Component, useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native"

import { ColorBar } from './ColorBar'
import { includeWish } from '../database/AsyncStorage'

export const EditWish = props => {
  const { getWish, } = props
  const [modalVisible, setModalVisible] = useState(false)
  const [color, setColor] = useState(props.color)
  const [ text, setText ] = useState(props.text)


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width:200, height:100, borderColor:'#aaa', borderWidth:1, marginBottom:20, padding:10 }} >
              <TextInput style={{ width:180, height:80, fontSize:18 }} multiline value={text} onChangeText={text => setText(text)} />
            </View>
            <ColorBar chooseColor={color => setColor(color)} colorSelected={color} />

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible)
                getWish({text, color, key: wish.key})
                setText('')
                setColor('#FCD462')
              }}
            >
              <Text style={styles.textStyle}>ADD WISH</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#FFF", borderColor:'#2196F3', borderWidth:1, marginTop:5 }}
              onPress={() => {
                setModalVisible(!modalVisible)
                setText('')
                setColor('#FCD462')
              }}
            >
              <Text style={{...styles.textStyle, color:'#2196F3'}}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={{ width: 150, height: 110, alignItems: 'center' }}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={{ fontSize:18 }} > {text} </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F16072",
    borderRadius: 5,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})