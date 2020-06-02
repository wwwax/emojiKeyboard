import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    PixelRatio,
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
            customKeyboard: {
                component,
                initialProps: { title },
            },
        });
        console.log(this.state);
    };

    resetKeyboardView = () => {
        this.setState({ customKeyboard: {} });
    };

    onKeyboardItemSelected = (keyboardId, params) => {
        const receivedKeyboardData = `onItemSelected from "${keyboardId}"\nreceived params: ${JSON.stringify(
            params,
        )}`;
        this.setState({ receivedKeyboardData });
    };

    onKeyboardResigned = () => {
        this.resetKeyboardView();
    };

    getToolbarButtons = () => {
        return [
            {
                text: 'show1',
                testID: 'show1',
                onPress: () => {
                    this.showKeyboardView(
                        'KeyboardView',
                        'FIRST-1, (passed prop)',
                    );
                },
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
                <View style={styles.topLine} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        maxHeight={200}
                        ref={r => (this.textInputRef = r)}
                        placeholder={'message...'}
                        onFocus={() => this.resetKeyboardView()}
                        testID={'input'}
                    />
                    <TouchableOpacity
                        style={styles.sendButton}
                        onPress={() => KeyboardUtils.dismiss()}>
                        <Text>Action</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {this.getToolbarButtons().map((button, index) => (
                        <TouchableOpacity
                            style={styles.button}
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
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardDismissMode={
                        TrackInteractive ? 'interactive' : 'none'
                    }>
                    <Text style={styles.welcome}>
                        {this.props.message
                            ? this.props.message
                            : 'Keyboards Example'}
                    </Text>
                    <Text>{this.state.receivedKeyboardData}</Text>
                </ScrollView>
                <KeyboardAccessoryView
                    renderContent={this.keyboardAccessoryViewContent}
                    trackInteractive={TrackInteractive}
                    kbInputRef={this.textInputRef}
                    kbComponent={this.state.customKeyboard.component}
                    kbInitialProps={this.state.customKeyboard.initialProps}
                    onItemSelected={this.onKeyboardItemSelected}
                    onKeyboardResigned={this.onKeyboardResigned}
                    revealKeyboardInteractive
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    scrollContainer: {
        justifyContent: 'center',
        // padding: 15,
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        paddingTop: 50,
        paddingBottom: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    topLine: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#bbb',
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 2,
        paddingBottom: 5,
        fontSize: 16,
        backgroundColor: 'white',
        borderWidth: 0.5 / PixelRatio.get(),
        borderRadius: 18,
    },
    sendButton: {
        paddingRight: 15,
        paddingLeft: 15,
        alignSelf: 'center',
    },
    button: {
        paddingLeft: 15,
        paddingBottom: 10,
    },
});
