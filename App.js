import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Article } from './src/components/Article';
import { KeyboardPanel } from './src/components/KeyboardPanel';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Article />
      <KeyboardPanel />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
