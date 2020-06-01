import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const Content = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Message: {message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'lightgreen',
    },
    message: {
        fontSize: 30,
    },
});
