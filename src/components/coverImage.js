import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes, faUpload, faHeart } from '@fortawesome/free-solid-svg-icons'

class CoverImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const img = { uri: this.props.details.img };

        return (
            <ImageBackground source={img} style={styles.image}>
                <View style={styles.view}>
                    <View style={styles.iconView}>
                        <FontAwesomeIcon icon={faTimes} style={styles.iconSearch} size={20} />
                        <FontAwesomeIcon icon={faUpload} style={styles.iconSearch} size={20} />
                        <FontAwesomeIcon icon={faHeart} style={styles.iconSearch} size={20} />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>TRENDING</Text>
                        <Text style={styles.name}>{this.props.details.name}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    view: {
        height: '100%',
        backgroundColor: "#000000a0",
    },
    text: {
        color: "white",
        fontSize: 20,
    },
    name: {
        color: 'white',
        fontSize: 26
    },
    textView: {
        position: 'absolute',
        bottom: 0,
        padding: 25
    },
    iconView: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        padding: 25
    }
});

export default CoverImage;