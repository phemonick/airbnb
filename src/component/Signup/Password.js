import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { popStyles } from '../popStyles';
import { goToHome } from '../navigations';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Password extends Component {
    
    state = {
        password: '',
        show: false
    }

    changeVisibility = () => this.setState({...this.state, show: !this.state.show})

    checkTextInput =() => ((this.state.password !== '') && this.state.password.length > 7);

    goBack = () => {
        Navigation.pop(this.props.componentId)
    }

    toHome = () => {
        if (this.checkTextInput()) {
            goToHome();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity onPress={this.goBack}>
                        <Icon style={styles.arrow} name="arrow-left" color="#fff" size={20}  backgroundColor='#00b7ad' />
                    </TouchableOpacity>
                    <Text style={styles.createPass}>Create a password</Text>
                    <Text style={styles.instruction}>your password must include ate least one symbol and 8 or more characters long.</Text>
        
                    <View style={styles.editBox}>
                        <View style={styles.pass}>
                            <Text style={[styles.label, styles.password]}>password</Text>
                            <TouchableWithoutFeedback onPress={this.changeVisibility}>
                                <Text style={[styles.label, styles.visibility]}> {this.state.show ? 'Show' : 'Hide'} </Text>
                            </TouchableWithoutFeedback>
                            
                        </View>
                        <TextInput
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry={this.state.show}
                            style={styles.nameInput}
                        />
                    </View>
                </View>
                <View style={styles.bottomNav}>
                    <TouchableOpacity onPress={() => this.toHome()} style={[styles.next, { backgroundColor: this.checkTextInput() ? '#fff': '#12ded4'}]}>
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
    createPass: {
        ...popStyles.textColor,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 25,
    },
    arrow: {
        marginBottom: 15,
        marginTop: 20,
        backgroundColor: 'transparent'
    },
    instruction: {
        ...popStyles.textColor,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 35,
    },
    pass: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    password: {
        textTransform: 'uppercase'
    },
    label: {
        ...popStyles.textColor,
        fontSize: 16,
        fontWeight: 'bold',
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
        backgroundColor: '#12ded4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    visibility: {

    }

})