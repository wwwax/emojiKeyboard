import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Content } from './src/components/Content';
import { KeyboardPanel } from './src/components/KeyboardPanel';
import { EmojiKeyboard } from './src/components/EmojiKeyboard';

const App = () => {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Content message={message} />
      <KeyboardPanel setMessage={setMessage} />
      <EmojiKeyboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default App;
