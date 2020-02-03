import React from 'react'
import {View, Text} from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

class Helpers {
    static helperFunctionHere() {
        console.log("hi");
        alert()
    } 

    static resetNavigationstack(navigation, stackName) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: stackName })],
        });
        navigation.dispatch(resetAction);
    }
}
export default Helpers