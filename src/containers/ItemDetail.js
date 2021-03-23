import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CoverImage from '../components/coverImage';
import ListText from '../components/listText'
import Data from '../share/data';
class ItemDetail extends Component {
  constructor(props) {
    super(props)

  }

  getDataInfo(){
    const data = Data;
    const newData = data.find((x) => x.id == this.props.route.params.itemId )
    return newData
  }

  render() {
    const items = this.getDataInfo();
    return(
      <View style = {styles.container}>
          <CoverImage details={items}/>
          <ListText listIngredient={items.ingredients} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      flexDirection: 'column',
    },
    listContianer: {
      flex:2
    }

  })

export default ItemDetail