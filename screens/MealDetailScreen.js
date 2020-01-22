import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View>
            <Text>The Meal Details Screen </Text>
        </View>
    );
};

const styles = Stylesheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen; 