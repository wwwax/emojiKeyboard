import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {
    KeyboardAccessoryView,
    KeyboardUtils,
} from 'react-native-keyboard-input';
import './KeyboardView';

const TrackInteractive = true;

export default class KeyboardInput extends React.Component {
    state = {
        customKeyboard: {
            component: undefined,
            initialProps: undefined,
        },
        receivedKeyboardData: undefined,
    };

    showKeyboardView = (component, title) => {
        this.setState({
            customKeyboard: component,
            initialProps: { title },
        });
    };

    resetKeyboardView = () => {
        this.setState({ customKeyboard: {} });
    };

    getToolbarButtons = () => {
        return [
            {
                text: 'show1',
                testID: 'show1',
                onPress: () =>
                    this.showKeyboardView(
                        'KeyboardView',
                        'FIRST-1, (passed prop)',
                    ),
            },
            {
                text: 'show2',
                testID: 'show2',
                onPress: () =>
                    this.showKeyboardView(
                        'AnotherKeyboardView',
                        'SECOND-2, (passed prop)',
                    ),
            },
            {
                text: 'reset',
                testID: 'reset',
                onPress: () => this.resetKeyboardView(),
            },
        ];
    };

    keyboardAccessoryViewContent = () => {
        return (
            <View>
                <View />
                <View>
                    <TextInput
                        maxHeight={200}
                        ref={r => (this.textInputRef = r)}
                        placeholder={'message...'}
                        underlineColorAndroid="red"
                        onFocus={() => this.resetKeyboardView()}
                        testID={'input'}
                    />
                    <TouchableOpacity onPress={() => KeyboardUtils.dismiss()}>
                        <Text>Action</Text>
                    </TouchableOpacity>
                    {this.getToolbarButtons().map((button, index) => (
                        <TouchableOpacity
                            onPress={button.onPress}
                            key={index}
                            testID={button.testID}>
                            <Text>{button.text}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    };

    render() {
        return (
            <View>
                <ScrollView
                    keyboardDismissMode={
                        TrackInteractive ? 'interactive' : 'none'
                    }>
                    <Text>
                        {this.props.message
                            ? this.props.message
                            : 'Keyboards Example'}
                    </Text>
                    <Text>{this.state.receivedKeyboardData}</Text>
                </ScrollView>
                <KeyboardAccessoryView
                    renderContent={this.keyboardAccessoryViewContent}
                />
            </View>
        );
    }
}
