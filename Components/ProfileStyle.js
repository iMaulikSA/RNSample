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
        backgroundColor: 'gray',
        flex: 1
    }

})

export default styles