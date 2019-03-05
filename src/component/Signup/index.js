import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { popStyles } from '../popStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation'

export default class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '', 
        hasText: false
    }

    goBack = () => {
        Navigation.pop(this.props.componentId)
    }

    checkTextInput = () => {
        return ((this.state.firstName !== '') && (this.state.lastName !== ''))
    }

    nextPage = () => {
        if (this.checkTextInput() === true) {
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Email'
                }
            })
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.goBack}>
                        <Icon style={styles.arrow} name="arrow-left" color="#fff" size={20}  backgroundColor='#00b7ad' />
                    </TouchableOpacity>
                    <Text style={[styles.question, popStyles.textColor]}>What's your name?</Text>
                    <View style={styles.editBox}>
                        <Text style={styles.label}>first name</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({...this.state, firstName: text})}
                            style={styles.nameInput}
                            value={this.state.firstName}
                        />
                    </View>
                    <View style={styles.editBox}>
                        <Text style={styles.label}>last name</Text>
                        <TextInput
                            onChangeText={(text) => this.setState({...this.state, lastName: text})}
                            style={styles.nameInput}
                            value={this.state.lastName}
                        />
                </View>
                </View>
                <View style={styles.bottomNav}>
                    <TouchableOpacity onPress={this.nextPage} style={[styles.next, { backgroundColor: this.checkTextInput() ? '#fff': '#12ded4'}]}>
                        <Icon color='#00b7ad' name="angle-right" size={25} />
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...popStyles.container,
        justifyContent: 'space-between'

    },
    question: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 35,
    },
    arrow: {
        marginBottom: 15,
        marginTop: 20,
        backgroundColor: 'transparent'
    },
    editBox: {
        marginBottom: 30,
    },
    label: {
        ...popStyles.textColor,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    nameInput: {
        ...popStyles.textColor,
        borderBottomWidth: 1,
        borderColor: '#fff',
        height: 40,
        fontSize: 25
    },
    bottomNav: {
        alignItems: 'flex-end'
    },
    next: {
        padding: 10,
        width: 44,
        height: 44,
        borderRadius: 44/2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})