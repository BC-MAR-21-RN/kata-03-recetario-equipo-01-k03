import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HorizontalList from '../components/horizontalList';
import SearchBar from '../components/searchBar';
import Data from '../share/data';

class Home extends Component {

  render() {
    return(
      <View style = {styles.container}>
        <SearchBar />

        <HorizontalList title="trending" size={{height:0.33, width:110}} listData={Data}/>
        <HorizontalList title="recent" size={{height:0.55, width:160}} listData={Data}/>
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