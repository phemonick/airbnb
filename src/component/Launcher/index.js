import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Airbnb from '../../images/airbnb.png';

export default class Launcher extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={Airbnb}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
