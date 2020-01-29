import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = props => {
return <Text style={StyleSheet.text}>{props.children}</Text>
};

const styles = StyleSheet.create ({
    test: {
        fontFamily: 'open-sans'
    }
});

export default DefaultText; 