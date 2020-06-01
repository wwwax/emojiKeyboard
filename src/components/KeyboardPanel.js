import React from 'react';
import {
    TextInput,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
// import { Example } from './Example';

export const KeyboardPanel = ({ setMessage }) => {
    const [text, setText] = React.useState('');

    const onChangeText = e => {
        setText(e);
    };

    const sendMessage = () => {
        setMessage(text);
        setText('');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={require('../img/emoji-button.png')} />
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Type your text here..."
                value={text}
                onChangeText={onChangeText}
            />

            <TouchableOpacity style={styles.button} onPress={() => null}>
                <Image source={require('../img/papper-clip.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={sendMessage}>
                <Image source={require('../img/send-arrow.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: 'teal',
        backgroundColor: 'orange',
    },
    button: {
        padding: 10,
    },
    input: {
        flex: 1,
    },
});
