import React from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardRegistry } from 'react-native-keyboard-input';

class KeyboardView extends React.Component {
    onButtonPress = () => {
        KeyboardRegistry.onItemSelected('KeboardView', {
            message: 'item selected from KeyboardView',
        });
    };

    render() {
        return (
            <ScrollView
                contentContainerStyle={[
                    styles.keyboardContainer,
                    { backgroundColor: 'purple' },
                ]}>
                <Text>Keyboard View</Text>
                <Text>{this.props.title}</Text>

                <TouchableOpacity
                    testID={'click-me'}
                    style={styles.button}
                    onPress={() => this.onButtonPress()}>
                    <Text>Click me!</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

class AnotherKeyboardView extends React.Component {
    onButtonPress = () => {
        KeyboardRegistry.toggleExpandedKeyboard('AnotherKeyboardView');
    };

    render() {
        return (
            <ScrollView
                style={[
                    styles.keyboardContainer,
                    { backgroundColor: 'orange' },
                ]}>
                <Text>Another Keyboard View</Text>
                <Text>{this.props.title}</Text>

                <TouchableOpacity
                    testID={'toggle-fs'}
                    style={styles.button}
                    onPress={this.onButtonPress()}>
                    <Text>Toggle Full-Screen</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 20,
        marginTop: 30,
        backgroundColor: 'white',
    },
});

KeyboardRegistry.registerKeyboard('KeyboardView', () => KeyboardView);
KeyboardRegistry.registerKeyboard(
    'AnotherKeyboardView',
    () => AnotherKeyboardView,
);
