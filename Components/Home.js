import React, { Component } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, Alert, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native'
import styles from './HomeStyle'
import API from '../APIHelper'
import { connect } from "react-redux";

const secure = API.createSecure()
class Home extends Component {

    constructor() {
        super()
        this.state = {
            arrPopularCategories: [
                { key: 'a', categoryName: 'Fast Food', image: 'https://image.freepik.com/free-psd/delicious-fast-food-mockup_23-2147712091.jpg' },
                { key: 'b', categoryName: 'Burger', image: 'https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg' },
                { key: 'c', categoryName: 'Pizza', image: 'https://img.freepik.com/free-photo/tasty-pepperoni-pizza_79782-2100.jpg?size=626&ext=jpg' },
                { key: 'd', categoryName: 'Italian', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JGGqYGStoACVLEHUzeVXktRqjjb5sDFF95Cs4wlUJgoIRjgDcA&s' },
                { key: 'e', categoryName: 'Chinese', image: 'https://www.vortexrestaurantequipment.ca/wp-content/uploads/2019/01/Chinese-Food.jpg' },
                { key: 'f', categoryName: 'Sea Food', image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/06/seafood-pasta-5.jpg' },
                { key: 'g', categoryName: 'Street Food', image: 'https://st4.depositphotos.com/15238356/23776/i/1600/depositphotos_237763736-stock-photo-tacos-pastor-mexican-taco-street.jpg' },
                { key: 'h', categoryName: 'Sweet', image: 'https://i.pinimg.com/originals/7b/ed/67/7bed676605c7f6be77883f304bd1fd1b.jpg' },
                { key: 'i', categoryName: 'Cold Drinks', image: 'https://new-img.patrika.com/upload/images/2016/04/06/cold-drink-1459939947_835x547.jpg' },
                { key: 'j', categoryName: 'Juice', image: 'https://www.organicfacts.net/wp-content/uploads/orangejuice.jpg' }
            ],
            arrRecipes: [],
            isLoading: false,
            isRefreshing: false
        }
    }

    //#region Componenet LifeCycle
    componentDidMount() {
        console.log('this.props.token', this.props.token);
        console.log('this.props.user', this.props.user);
        this.doInitialSetUp()
    }
    //#endregion

    //#region Componenet Methods

    doInitialSetUp = () => {
        this.setState({ isLoading: true })
        this.fetchRecepies()
    }

    fetchRecepies() {
        secure.getFoodFeed().then((response) => {
            console.log(response)
            if (response.ok && response.status == 200) {
                this.setState({
                    isLoading: false,
                    isRefreshing: false,
                    arrRecipes: response.data
                }) //displaying data to screen
            }
        })
    }

    renderPopulerCategories = ({ item }) => {
        return (
            <View style={{ justifyContent: 'center' }}>
                <View style={[styles.popularCatItem, { flex: 0 }]}>
                    <View style={styles.popularCatInsideView}>
                        <Image style={[styles.popularCatInsideView, { resizeMode: 'cover' }]} source={{ uri: item.image }}></Image>
                    </View>
                </View>
                <Text style={styles.categoryName}>{item.categoryName}</Text>
            </View>
        )
    }

    onPressFoodItem = () => {
        this.props.navigation.navigate('MapScreen')
    }

    renderFoodItems = ({ item, index }) => {
        return (
            <TouchableOpacity 
            activeOpacity={1}
            style={{ flex: 0, padding: 10 }} onPress={() => this.onPressFoodItem()}>
                <View style={styles.foodItemInsideView}>
                    <Image source={{ uri: item.photo ? item.photo : 'https://assets.materialup.com/uploads/b03b23aa-aa69-4657-aa5e-fa5fef2c76e8/preview.png' }} style={styles.foodItemImage}></Image>
                    {/* <View style={{ width: 70, height: 20, alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center', marginTop: 15, backgroundColor: '#F15555', position: 'absolute' }}>
                        <Text style={{ color: 'white' }}>$ 5</Text>
                    </View> */}
                    <View style={[styles.foodItemDetail, { justifyContent: 'space-between', marginBottom: 0 }]}>
                        <Text style={styles.restaurantName}>{item.name}</Text>
                        <TouchableOpacity onPress={() => this.onPressHeart(item, index)}>
                            <Image source={item.inCookingList == 1 ? require('../Icons/heartfilled.png') : require('../Icons/heart.png')} style={styles.heart}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.foodItemDetail, { marginTop: 0 }]}>
                        <Image source={require('../Icons/star.png')} style={{ width: 17, height: 17 }}></Image>
                        <Text style={styles.ratingText}>4.5 (124 Reviews)</Text>
                        <Text style={styles.dot}>•</Text>
                        <Text style={styles.foodItemCategorty}>Cafe</Text>
                        <Text style={styles.dot}>•</Text>
                        <Text style={styles.foodItemCategorty}>{item.serves} Person</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    onPressHeart = (item, index) => {
        console.log(item)
        this.state.arrRecipes[index].inCookingList = item.inCookingList == 0 ? 1 : 0
        this.setState({})
    }

    onRefresh() {
        this.setState({ isRefreshing: true })
        this.fetchRecepies()
    }
    //#endregion

    //#region render()
    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={[styles.wrapper]}>
                    <View style={styles.popularCatView}>
                        <Text style={styles.textPopularCategories}>Popular categories</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            style={styles.flatList}
                            horizontal={true}
                            ItemSeparatorComponent={({ item }) =>
                                <View style={{ width: 15 }} />
                            }
                            data={this.state.arrPopularCategories}
                            renderItem={this.renderPopulerCategories}
                            keyExtractor={(item, index) => 'key' + index}
                            ListHeaderComponent={<View style={{ width: 10 }}></View>}
                            ListFooterComponent={<View style={{ width: 10 }}></View>}
                        >
                        </FlatList>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text style={[styles.textPopularCategories, { marginTop: 20 }]}>Most popular</Text>
                        {this.state.isLoading ?
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <ActivityIndicator size='small' color='black' />
                                <Text style={{ alignSelf: 'center', marginTop: 10, color: 'gray' }}> Loading our most popular...</Text>
                            </View>
                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                style={styles.flatList}
                                data={this.state.arrRecipes}
                                renderItem={this.renderFoodItems}
                                keyExtractor={(item, index) => 'key' + index}
                                ListHeaderComponent={<View style={{ width: 0 }}></View>}
                                ListFooterComponent={<View style={{ width: 0 }}></View>}
                                refreshControl={
                                    <RefreshControl
                                        colors={["#9Bd35A", "#689F38"]}
                                        refreshing={this.state.isRefreshing}
                                        onRefresh={() => this.onRefresh()}
                                    />
                                }>
                            </FlatList>
                        }
                    </View>
                </View>
            </SafeAreaView>
        )
    }
    //#endregion
}

const mapStateToProps = (state) => {
    return { token: state.token,
        user: state.user }
}

export default connect(mapStateToProps)(Home)