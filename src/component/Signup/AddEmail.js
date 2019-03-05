import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Switch } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { popStyles } from '../popStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddEmail extends Component {
    state = {
        email: ''
    }

    goBack = () => {
        Navigation.pop(this.props.componentId)
    }

    toNextPage = () => {
        if (this.checkTextInput() === true) {
            Navigation.push(this.props.componentId, {
                component: {
                    name: 'Password'
                }
            })
        }
    }

    checkTextInput = () => this.state.email !== '';

    render(){
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.goBack}>
                        <Icon style={styles.arrow} name="arrow-left" color="#fff" size={20}  backgroundColor='#00b7ad' />
                    </TouchableOpacity>
                    <Text style={[styles.question, popStyles.textColor]}>And, your email</Text>
                    <View style={styles.editBox}>
                        <Text style={styles.label}>email address</Text>
                        <TextInput
                            onChangeText={(email) => this.setState({email})}
                            style={styles.nameInput}
                        />
                    </View>
                    <View style={styles.addInfo}>
                        <Text style={popStyles.textColor}> i'd like to receive promotional communications, including discounts, surveys, inspiration, and love
                            from Airbnb via email, SMS, and phone.
                        </Text>
                    </View>
                    <View style={styles.subscription}>
                        <Text style={[popStyles.textColor, styles.markMessage]}>
                            I don't want to receive marketing messages from Airbnb. I can't opt out of receiving these at anytime in my account
                            settings or via the link in the message.
                        </Text>
                        <Switch />
                    </View>
                </View>
                <View style={styles.bottomNav}>
                    <TouchableOpacity onPress={this.toNextPage} style={[styles.next, { backgroundColor: this.checkTextInput() ? '#fff': '#12ded4'}]}>
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
    },
    addInfo: {
        marginBottom: 20
    },
    subscription: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    markMessage: {
        flex: 2
    }
})