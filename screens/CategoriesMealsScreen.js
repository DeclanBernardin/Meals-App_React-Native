import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Meals Screen </Text>
            <Button title="go to details" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'}); 
            }}/>
            <Button title="GoBack" onPress={() => {
                props.navigation.goBack();
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen; 