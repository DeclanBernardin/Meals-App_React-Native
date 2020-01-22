import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const FavoritesScreen = props => {
    return (
        <View>
            <Text>The Favorites Screen </Text>
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

export default FavoritesScreen; 