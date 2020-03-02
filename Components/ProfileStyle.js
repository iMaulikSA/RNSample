import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    profileTopContainer: {
        marginTop: 24,
        flexDirection: 'row',
    },
    contentCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileSideButton: {
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: 112,
        height: 112,
        borderRadius: 66,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 24,
        marginRight: 24,
        overflow: 'hidden'
    },
    profileDetail: {
        marginTop: 24,
        marginHorizontal: 20,
        flex: 1
    },
    name: {
        fontSize: 30,
        fontWeight: '500',
        alignSelf: 'center'
    },
    profileOthDetails: {
        flex: 0,
        marginHorizontal: 10,
        marginVertical: 6,
        flexDirection: 'row',
    },
    profileOthContent: {
        paddingLeft: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: '500',
    }

})

export default styles