import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

export const KeyboardPanel = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={require('../img/emoji-button.png')} />
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Type your text here..." />

      <TouchableOpacity style={styles.button}>
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
