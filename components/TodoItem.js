import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoItem = () => {
  return (
    <View style={ToDostyles.itemContainer}> 
      <Pressable>

      </Pressable>
      <Text style={[
        ToDostyles.itemText,
        ToDostyles.itemTextChecked]}>
        코딩하기
      </Text>
      <Pressable style={[
        ToDostyles.deleteButton,
        ToDostyles.deleteButtonDone
      ]}
      hitSlop={10}
      >

      </Pressable>
    </View>
  )
}

export default TodoItem

const ToDostyles = StyleSheet.create({})