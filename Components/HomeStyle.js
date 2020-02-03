import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    popularCatView: {
        height: 140,
        backgroundColor: 'white',
    },
    textPopularCategories: {
        fontSize: 17,
        marginTop: 10,
        marginLeft: 10,
    },
    flatList: {
        marginTop: 10,
        // height: 120,
    },
    popularCatItem: {
        width: 74,
        height: 74,
        flex: 1,
        borderRadius: 37,
        borderWidth: 1.5,
        borderColor: '#000',
        alignSelf: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    popularCatInsideView: {
        width: 66,
        height: 66,
        borderRadius: 33,
        overflow: 'hidden',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    categoryName: {
        fontSize: 13,
        alignSelf: 'center',
        marginTop: 5,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        // alignSelf: 'left', 
    },
    foodItemInsideView: {
        flex: 0,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#F1F1F1',
    },
    foodItemImage: {
        height: 200,
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    foodItemDetail: {
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        color: '#F15555',
        marginLeft: 5,
        marginTop: 2
    },
    dot: {
        color: 'gray',
        marginLeft: 3,
        fontSize: 20,
    },
    foodItemCategorty: {
        color: 'gray',
        marginLeft: 3,
        marginTop: 4,
        fontSize: 12,
    },
    diamondNarrow: {
        width: 30   ,
        height: 30,
        backgroundColor: 'green'
      },
      heart: {
        marginTop: 5, 
        marginRight: 15, 
        width: 22, 
        height: 22 
      },
})

export default styles