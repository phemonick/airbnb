import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, AsyncStorage } from 'react-native';
import { goLogin, goToHome } from '../navigations';
import Airbnb from '../../images/airbnb.png';
import { USER_KEY } from '../config';

export default class Launcher extends Component {

    async componentDidMount() {
        try {
           
            const user = await AsyncStorage.getItem(USER_KEY)
            if(user) {
                goToHome();
            } else {
                setTimeout(()=> {
                    goLogin();
                    // goToHome();
                }, 1000)
                
            }

        } catch(err) {

        }
    }
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
