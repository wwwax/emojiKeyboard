import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Content } from './src/components/Content';
import { KeyboardPanel } from './src/components/KeyboardPanel';
import KeyboardInput from './src/components/Keyboard/KeyboardInput';

const App = () => {
    const [message, setMessage] = useState('');

    return (
        // <SafeAreaView style={styles.container}>
        //     <Content message={message} />
        //     <Text>Emoji</Text>
        //     <KeyboardPanel setMessage={setMessage} />
        // </SafeAreaView>

        <KeyboardInput />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',
    },
});

export default App;
