import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
    },
    foodCategoryName: {
        flex: 1,
        position: 'absolute',
        color: 'white',
        fontSize: 25
    },
    fullWH: {
        width: '100%',
        height: '100%'
    },
    renderFoodItem: {
        flex: 1,
        margin: 5,
        height: 120,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 7,
        overflow: 'hidden'
    },
    viewSearchBar: {
        height: 70,
        justifyContent: 'center'
    },
    searchBarContainer: {
        padding: 20,
        marginTop: 10,
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    imputContainer: {
        backgroundColor: 'white',
        borderRadius: 20
    },
    input: {
        fontSize: 15,
        color: 'black'
    },
    noCategory:{
        alignSelf: 'center', 
        fontSize: 18
    }

})

export default styles