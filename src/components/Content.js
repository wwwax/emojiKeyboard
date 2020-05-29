import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const Content = ({ message = 'hello' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
