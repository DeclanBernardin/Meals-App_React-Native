import { Platform } from 'react-native';
import Colors from '../constants /Colors'

import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

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

export default createAppContainer(MealsNavigator);