import React, {Component} from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes, faUpload, faHeart} from '@fortawesome/free-solid-svg-icons';
import {TouchableWithoutFeedback} from 'react-native';
class CoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleHeart: false,
    };
  }

  render() {
    const img = {uri: this.props.details.img};

    return (
      <ImageBackground source={img} style={styles.image}>
        <View style={styles.view}>
          <View style={styles.iconView}>
            <TouchableWithoutFeedback onPress={this.props.buttonReturn}>
              <FontAwesomeIcon icon={faTimes} style={styles.icon} size={24} />
            </TouchableWithoutFeedback>
            <View style={styles.iconRight}>
              <FontAwesomeIcon
                icon={faUpload}
                style={styles.iconUpload}
                size={24}
              />
              <TouchableWithoutFeedback
                onPress={() =>
                  this.setState({styleHeart: !this.state.styleHeart})
                }>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: this.state.styleHeart ? 'red' : 'white'}}
                  size={24}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text}>
              {this.props.details.category.toUpperCase()}
            </Text>
            <Text style={styles.name}>{this.props.details.name}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  view: {
    height: '100%',
    backgroundColor: '#000000a0',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  name: {
    color: 'white',
    fontSize: 26,
  },
  textView: {
    position: 'absolute',
    bottom: 0,
    padding: 25,
  },
  iconView: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    top: 0,
    padding: 25,
    justifyContent: 'space-between',
  },
  icon: {
    color: 'white',
  },
  iconUpload: {
    color: 'white',
    marginRight: 30,
  },
  iconRight: {
    flexDirection: 'row',
  },
  iconHeart: {},
});

export default CoverImage;
