import React from 'react'; 
import { Platform } from 'react-native';
import Colors from '../constants /Colors';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'

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
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        headerTitle: 'A Screen'
    }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        }
    }},
    Favorites: {screen: FavoritesScreen, navigationOptions: {
        tabBarLabel: 'Favorites!', 
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
        }
    }}
},{
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
}); 


export default createAppContainer(MealsFavTabNavigator);