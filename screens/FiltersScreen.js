import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const FiltersScreen = props => {
    return (
        <View>
            <Text>The Filters Screen </Text>
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

export default FiltersScreen; 