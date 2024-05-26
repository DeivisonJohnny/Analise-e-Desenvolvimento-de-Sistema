import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface addRendaProps {}

const addRenda = (props: addRendaProps) => {
  return (
    <View style={styles.container}>
      <Text>addRenda</Text>
    </View>
  );
};

export default addRenda;

const styles = StyleSheet.create({
  container: {}
});
