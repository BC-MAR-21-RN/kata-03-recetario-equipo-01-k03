import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

class Home extends Component {

  render() {
    return(
      <View style = {styles.container}>

        <Text>itemDetails page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282828',
      flexDirection: 'column'
    }
  })

export default Home