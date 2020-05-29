import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export const KeyboardPanel = ({ setMessage }) => {
  const [text, setText] = React.useState('');

  const onChangeText = e => {
    setText(e);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../img/emoji-button.png')} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Type your text here..."
        onChangeText={onChangeText}
      />

      <TouchableOpacity style={styles.button} onPress={() => null}>
        <Image source={require('../img/papper-clip.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setMessage(text)}>
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
    borderColor: 'orange',
  },
  button: {
    padding: 10,
  },
  input: {
    flex: 1,
  },
});
