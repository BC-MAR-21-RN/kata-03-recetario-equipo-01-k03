import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HorizontalList from '../components/horizontalList';
import SearchBar from '../components/searchBar';
import Data from '../share/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
      recent: [],
    };
  }

  componentDidMount() {
    this.setState({
      trending: Data.filter(item => item.category === 'trending'),
      recent: Data.filter(item => item.category === 'recent'),
    });
  }

  handlePress = id => {
    this.props.navigation.navigate('Detail', {itemId: id});
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <HorizontalList
          handlePress={this.handlePress}
          title="trending"
          size={{height: 0.37, width: 110}}
          listData={this.state.trending}
        />
        <HorizontalList
          handlePress={this.handlePress}
          title="recent"
          size={{height: 0.55, width: 160}}
          listData={this.state.recent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    flexDirection: 'column',
  },
});

export default Home;
