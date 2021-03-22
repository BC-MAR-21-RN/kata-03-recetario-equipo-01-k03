import React, { Component } from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    changeTextValue = newText => {
        this.setState({ text: newText })
    }

    render() {
        return (
            <View style={styles.container}>
                <FontAwesomeIcon icon={faSearch} style={styles.iconSearch} size={20} />
                <TextInput
                    style={styles.searchBox}
                    placeholder="What do you want to eat?"
                    placeholderTextColor="white"
                    onChangeText={this.changeTextValue}
                    value={this.state.text} />
                <FontAwesomeIcon icon={faMicrophone} style={styles.iconMic} size={20} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconSearch: {
        color: 'white'
    },
    iconMic: {
        color: 'white',
        position: 'absolute',
        right: 10 
    },
    searchBox: {
        fontSize: 20,
        color: 'white',
        margin: 0
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#343435',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default SearchBar