import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface dispesasProps {}

const dispesas = (props: dispesasProps) => {
  return (
    <View style={styles.container}>
      <Text>dispesas</Text>
    </View>
  );
};

export default dispesas;

const styles = StyleSheet.create({
  container: {}
});
