import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export const SearchBar = () => (
    <View>
        <View style={styles.inputWrapper}>
            <Icon name='search' size={15} color='#ddd' />
            <TextInput style={styles.inputSearch} placeholder="Try 'local luis' " />
        </View>

    </View>
)

const styles = StyleSheet.create({
    searchBox: {
        top: 40,
        position: 'absolute',
        width,
    },
    inputWrapper: {
        marginLeft: 15,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 0,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#ddd',
        shadowColor: '#ddd',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.95,
        shadowRadius: 2,
        padding: 10

        
    },
    inputSearch: {
        fontSize: 14,
        marginLeft: 10
    },
    label: {
        fontSize: 10,
        fontStyle: 'italic',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 0
    }
})
