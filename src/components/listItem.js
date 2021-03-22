import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{
        marginRight: 7,
        marginLeft: 7,
        width: this.props.width
      }}>
        <Image
        style={style.img}
          source={{uri: `${this.props.img}`}}
        />
        <Text style={style.name}>{this.props.name}</Text>
      </View>
    )
  }
}
const style = StyleSheet.create({
  img: {
    width: '100%',
    height: '70%',
  },
  name: {
    color: 'white',
  }
})
export default ListItem;