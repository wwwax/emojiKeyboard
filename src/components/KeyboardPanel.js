import React, { useState } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export const KeyboardPanel = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../img/emoji-button.png')} />
        </TouchableOpacity>

        <TextInput style={styles.input} placeholder="Type your text here..." />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <Image source={require('../img/papper-clip.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={require('../img/send-arrow.png')} />
        </TouchableOpacity>
      </TouchableWithoutFeedback>
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
    backgroundColor: 'red',
  },
  input: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
});
