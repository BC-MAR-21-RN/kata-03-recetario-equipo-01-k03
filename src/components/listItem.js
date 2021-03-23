import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Text, StyleSheet, Image } from 'react-native'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>this.props.Press(this.props.id)}>
        <View
          style={{
            marginRight: 7,
            marginLeft: 7,
            width: this.props.width

          }}>
          <Image
            style={style.img}
            source={{ uri: `${this.props.img}` }}
          />
          <Text style={style.name}>{this.props.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
const style = StyleSheet.create({
  img: {
    width: '100%',
    height: '70%',
    borderRadius: 9
  },
  name: {
    color: 'white',
  }
})
export default ListItem;