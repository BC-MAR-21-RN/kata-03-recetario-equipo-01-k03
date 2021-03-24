import React, {Component} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

class ListText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ingredients}>
          <Text style={styles.headerTitle}>Ingredients</Text>
          <Text style={styles.headerTitle}>
            for {this.props.dinners} serving
          </Text>
        </View>
        <FlatList
          data={this.props.listIngredient}
          renderItem={({item}) => (
            <View style={styles.list}>
              <Text style={styles.textList}>{item.name}</Text>
              <Text style={styles.textList}>{item.quantity}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    flex: 1,
  },
  ingredients: {
    color: 'white',
    margin: 10,
  },
  headerTitle: {
    color: 'white',
  },
  list: {
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    borderBottomColor: 'gray',
    color: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textList: {
    color: 'white',
  },
});
export default ListText;
