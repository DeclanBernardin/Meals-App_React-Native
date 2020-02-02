import React from 'react'; 
import { Platform, Text } from 'react-native';
import Colors from '../constants /Colors';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; 
import { createDrawerNavigator } from 'react-navigation-drawer'; 

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans',
        fontWeight: 'bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen'

}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoriesMealsScreen,
    },
    MealDetail: MealDetailScreen,
}, {
    mode: 'modal',
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    mode: 'modal',
    defaultNavigationOptions: defaultStackNavOptions
}
); 

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />);
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans', fontWeight: 'bold'}}>Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator, 
        navigationOptions: {
            tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />);
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans', fontWeight: 'bold' }}>Favorites</Text> : 'Favorites'
        }
    }
}; 

const MealsFavTabNavigator = Platform.OS === 'android' ? 
createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white', 
    shifting: true,
    barStyle: {
        backgroundColor: Colors.primaryColor
    },
}) 
: createBottomTabNavigator(
    tabScreenConfig,{
        labelStyle: {
            fontFamily: 'open-sans'
        },
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
}); 

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    // navigationOptions: {
    //     drawerLabel: 'Filters'
    // },
    mode: 'modal',
    defaultNavigationOptions: defaultStackNavOptions
}); 

const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen: MealsFavTabNavigator,
         navigationOptions: {
        drawerLabel: 'Meals'
    }}, 
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans',
            fontWeight: 'bold'
        }
    }
});


export default createAppContainer(MainNavigator);