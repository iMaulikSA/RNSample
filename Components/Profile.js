import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native'

//Style
import styles from './ProfileStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Profile extends Component {

    constructor() {
        super()
        this.state = {
            userImage: 'https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg',
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={[styles.wrapper]}>
                    <View style={[styles.profileTopContainer, styles.contentCenter]}>
                        <TouchableOpacity style={styles.profileSideButton} onPress={() => this.openPhotoGallery()}>
                        </TouchableOpacity>
                        <View style={[styles.profileImage, styles.contentCenter]}>
                        <Image source={{ uri: this.state.userImage }} style={[styles.contentCenter, {width: '100%', height: '110%'}]}></Image>
                        </View>
                        <TouchableOpacity style={styles.profileSideButton} onPress={() => this.openDeviceCamera()}>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.profileDetail]}>
                            <Text></Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}