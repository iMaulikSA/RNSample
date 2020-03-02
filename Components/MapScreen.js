import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import MapView, {Marker, Polyline} from 'react-native-maps'

//Style
import styles from './MapStyle'

export default class MapScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <MapView 
                style={{ flex: 1 }}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 23.025836,
                    longitude: 72.503349,
                    latitudeDelta: 0.010,
                    longitudeDelta: 0.010
                }}
                >
                    <Polyline
                    strokeWidth={3}
                    strokeColor='black'
                    coordinates={
                        [
                            {
                                latitude: 23.025734,
                                longitude: 72.503349
                            },
                            {
                                latitude: 23.025802,
                                longitude: 72.502587
                            },
                            {
                                latitude: 23.027712,
                                longitude: 72.502839
                            },
                            {
                                latitude: 23.027387,
                                longitude: 72.507136
                            }
                        ]
                    }
                >

                </Polyline>

                <Marker
                    coordinate={{
                        latitude: 23.025836,
                        longitude: 72.503349,
                    }}
                    title='Solution Analysts'
                    description='Analysing needs, delivering solutions'
                    identifier='1'
                >

                </Marker>
                </MapView>
                
            </SafeAreaView>
        )
    }
}