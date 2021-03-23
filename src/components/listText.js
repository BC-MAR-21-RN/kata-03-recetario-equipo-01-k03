import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet, Image } from 'react-native'

class ListText extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.props.listIngredient}
        renderItem={({item}) => <Text style={styles.list}>{item.name} </Text>}
      />
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    flex: 1
  },
  ingredient: {
    color: 'white',
  },
  list: {
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    borderBottomColor: 'gray',
    color:"white"
  }
})
export default ListText;