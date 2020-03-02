import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Fontisto';
import { connect } from "react-redux";

//Style
import styles from './ProfileStyle'

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            userImage: 'https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg',
            avatarSource: null,
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={[styles.wrapper]}>
                    <View style={[styles.profileTopContainer, styles.contentCenter]}>
                        <TouchableOpacity style={styles.profileSideButton} onPress={() => this.openPhotoGallery()}>
                            <Ionicons name={'ios-image'} size={25} />
                        </TouchableOpacity>
                        <View style={[styles.profileImage, styles.contentCenter]}>
                            <Image source={this.state.avatarSource ? this.state.avatarSource : { uri: this.state.userImage }} style={[styles.contentCenter, { width: '100%', height: '110%' }]}></Image>
                        </View>
                        <TouchableOpacity style={styles.profileSideButton} onPress={() => this.openDeviceCamera()}>
                            <Ionicons name={'ios-camera'} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.profileDetail]}>
                        <Text style={styles.name}>{this.props.user.firstName + ' ' + this.props.user.lastName}</Text>
                        <View style={styles.profileOthDetails}>
                            <Icon name={'email'} size={22} />
                            <Text style={styles.profileOthContent}>{this.props.user.email}</Text>
                        </View>
                        <View style={styles.profileOthDetails}>
                            <Icon name={'mobile'} size={22} />
                            <Text style={styles.profileOthContent}>+91-99999XXXXX</Text>
                        </View>
                        <View style={styles.profileOthDetails}>
                            <Icon name={'shopping-store'} size={22} />
                            <Text style={styles.profileOthContent}>4 - Outlets of JM's kitchen</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    openPhotoGallery = () => {
        const options = {
            mediaType: 'photo',
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            this.imageResponseHandler(response)
        });
    }

    openDeviceCamera = () => {
        const options = {
            mediaType: 'camera',
        };
        ImagePicker.launchCamera(options, (response) => {
            this.imageResponseHandler(response)
        });
    }

    imageResponseHandler = (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            const source = { uri: response.uri };
            this.setState({
                avatarSource: source,
            });
        }
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Profile)