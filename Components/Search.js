import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements';

//Style
import styles from './SearchStyle'

export default class Search extends Component {

    constructor() {
        super()
        this.state = {
            search: '',
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
                { key: 'j', categoryName: 'Juice', image: 'https://www.organicfacts.net/wp-content/uploads/orangejuice.jpg' },
                { key: 'k', categoryName: 'Fast Food', image: 'https://image.freepik.com/free-psd/delicious-fast-food-mockup_23-2147712091.jpg' },
                { key: 'l', categoryName: 'Burger', image: 'https://www.recipetineats.com/wp-content/uploads/2019/08/Avocado-Chicken-Burgers_9.jpg' },
                { key: 'm', categoryName: 'Pizza', image: 'https://img.freepik.com/free-photo/tasty-pepperoni-pizza_79782-2100.jpg?size=626&ext=jpg' },
                { key: 'n', categoryName: 'Italian', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JGGqYGStoACVLEHUzeVXktRqjjb5sDFF95Cs4wlUJgoIRjgDcA&s' },
                { key: 'o', categoryName: 'Chinese', image: 'https://www.vortexrestaurantequipment.ca/wp-content/uploads/2019/01/Chinese-Food.jpg' },
                { key: 'p', categoryName: 'Sea Food', image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/06/seafood-pasta-5.jpg' },
                { key: 'q', categoryName: 'Street Food', image: 'https://st4.depositphotos.com/15238356/23776/i/1600/depositphotos_237763736-stock-photo-tacos-pastor-mexican-taco-street.jpg' },
                { key: 'r', categoryName: 'Sweet', image: 'https://i.pinimg.com/originals/7b/ed/67/7bed676605c7f6be77883f304bd1fd1b.jpg' },
                { key: 's', categoryName: 'Cold Drinks', image: 'https://new-img.patrika.com/upload/images/2016/04/06/cold-drink-1459939947_835x547.jpg' },
                { key: 't', categoryName: 'Juice', image: 'https://www.organicfacts.net/wp-content/uploads/orangejuice.jpg' }
            ],
            isWithSearch: false,
            arrCategoriesWithSearch: [],
        }
    }

    updateSearch = search => {
        let trimmedSearch = search.trim()
        this.setState({ search: trimmedSearch });
        this.state.isWithSearch = trimmedSearch.length > 0 ? true : false
        this.state.arrCategoriesWithSearch = this.state.arrPopularCategories.filter(obj => {
            return obj.categoryName.includes(search)
        })
        this.setState({})
    };

    renderFoodItems = ({ item, index }) => {
        return (
            <View style={styles.renderFoodItem}>
                <Image source={{ uri: item.image }} style={styles.fullWH}></Image>
                <View style={[styles.overlay, styles.fullWH]}>
                    <Text style={styles.foodCategoryName}>{item.categoryName}</Text>
                </View>
            </View>
        )
    }

    render() {
        const { search } = this.state;
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={[styles.wrapper, { justifyContent: 'center' }]}>
                    <View style={styles.viewSearchBar}>
                        <SearchBar
                            placeholder="Type Here..."
                            onChangeText={this.updateSearch}
                            value={search}
                            containerStyle={styles.searchBarContainer}
                            inputContainerStyle={styles.imputContainer}
                            inputStyle={styles.input}
                        />
                    </View>
                    <View style={[styles.wrapper, { justifyContent: 'center' }]}>
                        {this.state.isWithSearch && this.state.arrCategoriesWithSearch.length == 0 ?
                            <Text style={styles.noCategory}>Sorry! No Category found :(</Text>
                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                style={{ margin: 10 }}
                                numColumns={2}
                                data={this.state.isWithSearch ? this.state.arrCategoriesWithSearch : this.state.arrPopularCategories}
                                renderItem={this.renderFoodItems}
                                keyExtractor={(item, index) => 'key' + index}
                                ListFooterComponent={<View style={{ height: 10 }}></View>}>
                            </FlatList>}
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}