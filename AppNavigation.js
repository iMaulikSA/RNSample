import React from 'react'
import { View, Image } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens 
import SignIn from '../NavigationSample/Components/SignIn.js'
import Home from '../NavigationSample/Components/Home.js'
import Search from '../NavigationSample/Components/Search.js'
import AddNew from '../NavigationSample/Components/AddNew.js'
import Favorite from '../NavigationSample/Components/Favorite.js'
import Profile from '../NavigationSample/Components/Profile.js'


const commonNavigationOptions = { 
  headerTintColor: '#fff',
  headerTitleStyle: {
    textAlign: 'center',
    flex: 1
  },
  headerStyle: {
    backgroundColor: '#040404',
  },
  headerRight: () =>
    <View style={{ flexDirection: 'row'}}>
    <Image
      source={require('./Icons/bell.png')}
      style={{
        width: 20,
        height: 20,
        marginRight: 12,
        marginBottom: 20
      }}
    />
    <Image
      source={require('./Icons/hotel.png')}
      style={{
        width: 20,
        height: 20,
        marginRight: 15,
        marginBottom: 20
      }}
    />
  </View>
}

const HomeStack = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: { headerTitle: 'Home' } },
  },
  {
    defaultNavigationOptions: commonNavigationOptions,
  }
);

const SearchStack = createStackNavigator(
  {
    Search: { screen: Search, navigationOptions: { headerTitle: 'Search' } },
  },
  {
    defaultNavigationOptions: commonNavigationOptions,
  }
);

const AddPostStack = createStackNavigator(
  {
    Search: { screen: AddNew, navigationOptions: { headerTitle: 'Add Post' } },
  },
  {
    defaultNavigationOptions: commonNavigationOptions,
  }
);

const FavoriteStack = createStackNavigator(
  {
    Search: { screen: Favorite, navigationOptions: { headerTitle: 'Favorite' } },
  },
  {
    defaultNavigationOptions: commonNavigationOptions,
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile, navigationOptions: { headerTitle: 'Profile' } },
  },
  {
    defaultNavigationOptions: commonNavigationOptions,
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    AddNew: AddPostStack,
    Favorite: FavoriteStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? 'ios-home' : 'ios-home';
          // Sometimes we want to add badges to some icons.You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Search') {
          iconName = focused ? 'ios-search' : 'ios-search';
        }
        else if (routeName === 'AddNew') {
          iconName = focused ? 'ios-add-circle' : 'ios-add-circle';
        }
        else if (routeName === 'Favorite') {
          iconName = focused ? 'ios-heart' : 'ios-heart';
        }
        else {
          iconName = focused ? 'ios-person' : 'ios-person';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      allowFontScaling: true,
      adaptive: true,
      style: {
        backgroundColor: '#040404',
      }
    },
  },
);

const AuthenticateStack = createStackNavigator(
  {
    SignIn: { screen: SignIn, navigationOptions: { headerTitle: 'AAABBBBB' } },
  },
  {
    headerMode: 'none'
  }
);

const RootStack = createStackNavigator(
  {
    AuthenticateStack: AuthenticateStack,
    TabNavigator: TabNavigator,
  },
  {
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer
