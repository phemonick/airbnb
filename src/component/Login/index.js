import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Airbnb from '../../images/airbnb.png';
import { goToHome } from '../navigations';
import { Navigation } from 'react-native-navigation';

export default class Login extends Component {

    createAccount = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'SignUp'
            }
        })
    }

    goToHome = () => {
        goToHome();
    }

    render() {
        return (
            <View testID='loginId' style={styles.container}>
                <View style={styles.topNav}>
                    <TouchableOpacity onPress={()=> this.goToHome()}>
                        <Icon name="close" color="#fff" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity testID='loginId'>
                        <Text style={[styles.textColor]}>Log in</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    style={styles.logo}
                    source={Airbnb}
                />

                <Text style={[styles.textColor, styles.welcomeText]}>Welcome to Airbnb.</Text>

                <TouchableOpacity style={[styles.roundedButton, styles.withFb]}>
                    <Icon name="facebook" color="#1ebdb9" size={16} />
                    <Text style={[styles.fbText, styles.btnText]} >Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.createAccount} style={[styles.roundedButton, styles.createBtn]}>
                    <Text style={[styles.btnText, styles.textColor]} >Create Account</Text>
                </TouchableOpacity>

                <Text style={[styles.textColor, styles.optText]}>More options</Text>

                <Text style={[styles.textColor]}>
                    By tapping Continue, Create Account or More
                    options, I agree to Airbnb's Terms of service, payments Terms of Service, Privacy policy, and
                        Nondiscrimination policy
                </Text>
        
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00b7ad',
      padding: 20,
      color: '#fff'
    },
    logo: {
        marginBottom: 20,
    },
    topNav: {
      fontSize: 20,
      flexDirection: 'row',
      marginTop: 30,
      justifyContent: 'space-between',
      marginBottom: 20
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    textColor: {
        color: '#fff'
    },
    roundedButton: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 8,
        paddingLeft: 15,
    },
    withFb: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    },
    fbText: {
        color: '#00b7ad',
        flex: 3,
        textAlign: 'center',
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    fbLogo: {
        fontSize: 16
    },
    createBtn: {
        alignItems: 'center',
        marginBottom: 25
    },
    welcomeText: {
        fontSize: 30,
        marginBottom: 35
    },
    optText: {
        marginBottom: 25,
        fontSize: 20,
    }

  });
