import React, { Component } from 'react'
import {
    SafeAreaView, Alert, Image, TextInput, Text, View, ImageBackground, TouchableOpacity, ActivityIndicator
} from 'react-native'
import Helpers from '../Helper'

//Style
import styles from './SignInStyle'

export default class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: 'jm1@example.com',
            password: 'jay@123',
            isLoading: false
        }
    }

    render() {
        return (
                <View style={[styles.wrapper]}>
                    <View style={{ height: 330, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <ImageBackground style={[styles.homeImageBG, styles.overlay]} source={require('../pizza.png')} >
                            <View style={styles.overlay} />
                        </ImageBackground>
                        <View style={[styles.topLoginView]}>
                            <Text style={styles.topLoginText}>Log In</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 40, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                        <Text style={[styles.welcomeBacktext]}>Welcome back!</Text>
                        <Text style={styles.welcomeBacktext}>You've been missed.</Text>
                    </View>

                    <View style={[styles.startFillingFromTop]}>
                        <TextInput
                            keyboardType='email-address'
                            placeholder='Your email'
                            returnKeyType={"next"}
                            onSubmitEditing={() => { this.nextInput.focus() }}
                            style={[styles.commonInput]}
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email: email })}></TextInput>
                        <TextInput
                            secureTextEntry={true}
                            ref={nextInput => this.nextInput = nextInput}
                            placeholder='Your password'
                            style={[styles.commonInput]}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password: password })}></TextInput>

                        <View style={{ width: '80%', marginTop: 15, flex: 0, }}>
                            <TouchableOpacity style={styles.loginButton} onPress={this.onLogin}>
                                {this.state.isLoading ? <ActivityIndicator></ActivityIndicator> : <Text style={styles.buttonWithBoldText}>Log In</Text>}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.forgotPasswordButton}>
                                <Text style={styles.buttonWithWiteText}>Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Text>——————— <Text style={{ fontWeight: 'bold' }}> OR </Text> ———————</Text>
                        </View>
                        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '40%' }}>
                            <View style={[styles.socialIconView]}>
                                <Image source={require('../facebook.png')} style={styles.socialIcon}></Image>
                            </View>
                            <View style={styles.socialIconView}>
                                <Image source={require('../twitter.png')} style={styles.socialIcon}></Image>
                            </View>
                            <View style={styles.socialIconView}>
                                <Image source={require('../instagram.png')} style={styles.socialIcon}></Image>
                            </View>
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ color: 'gray' }}>New User? <Text style={{ color: 'black' }}>Sign In</Text></Text>
                        </View>
                    </View>
                </View>
        )
    }

    onLogin = () => {
        if (this.isValid()) {
            this.setState({ isLoading: true })
            fetch('http://35.160.197.175:3006/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'email': this.state.email,
                        'password': this.state.password
                    })
                }).then((response) => {
                    if (response.status == 200) {
                        return response.json()
                    } else {
                        this.setState({ isLoading: false })
                        this.alertView('Error!', 'Authentication fail')
                    }
                }).then((responseJSON) => {
                    this.setState({ isLoading: false })
                    console.log(responseJSON);
                    Helpers.resetNavigationstack(this.props.navigation, 'TabNavigator')
                    this.setState({
                        email: '',
                        password: ''
                    })
                }).catch((error) => {
                    console.error(error);
                });
        }
    }

    isValid = () => {
        if (this.state.email == '') {
            this.alertView('Error', 'Please enter email')
            return false
        }
        else if (this.state.password == '') {
            this.alertView('Error', 'Please enter password')
            return false
        }

        return true
    }

    alertView = (title, message) => {
        Alert.alert(title, message, [
            {
                text: 'Yes',
                style: 'cancel'
            },
        ])
    }
}