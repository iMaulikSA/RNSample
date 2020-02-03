import { StyleSheet, Dimensions } from 'react-native'

//Style
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    socialIcon: {
        resizeMode: 'center',
        width: 20,
        height: 20,
    },
    socialIconView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    startFillingFromTop: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 40,
    },
    topHeader: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    commonInput: {
        width: '80%',
        borderWidth: 1.0,
        height: 44,
        borderRadius: 22,
        borderColor: '#D3D3D3',
        padding: 10,
        marginBottom: 15
    },
    loginButton: {
        backgroundColor: 'black',
        height: 50,
        borderWidth: 1.0,
        borderColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    forgotPasswordButton: {
        marginTop: 7,
        alignSelf: "flex-end",
        marginRight: 15,
        height: 20,
    },
    buttonWithBoldText: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    welcomeBacktext: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 25
    },
    buttonWithWiteText: {
        fontSize: 17,
        color: 'black',
    },
    topLoginView: {
        backgroundColor: '#000000',
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        position: 'absolute',
        bottom: -11
    },
    topLoginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',

    },
    homeImageBG: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000000',
        flex: 1,
        borderBottomRightRadius: Math.round(Dimensions.get('window').width) / 2.0,
        borderBottomLeftRadius: Math.round(Dimensions.get('window').width) / 2.0,
        overflow: "hidden"
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.2)',
    }
});

export default styles