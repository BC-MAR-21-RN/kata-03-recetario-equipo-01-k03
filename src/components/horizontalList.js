import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, StatusBar, SafeAreaView } from 'react-native'
import ListItem from './listItem';

class HorizontalList extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    const renderItem = ({ item }) => (
        <ListItem Press={this.props.Press} id={item.id} width={this.props.size.width} name={item.name} img={item.img} />
    );
    return(
      <SafeAreaView 
        style={{
            flex: this.props.size.height, 
            marginLeft: 3, 
            marginTop: StatusBar.currentHeight || 0
        }}>
        <Text  style={styles.title}>{this.props.title.toUpperCase()}</Text>
        <FlatList
          horizontal={true}
          data={this.props.listData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    color: '#ec2280',
    fontSize: 20,
    marginBottom: 5
  },
});

export default HorizontalList;