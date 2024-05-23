import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface layoutsMenuProps {}

const layoutsMenu = (props: layoutsMenuProps) => {
  return (
    <View style={styles.container}>
      <Text>layoutsMenu</Text>
    </View>
  );
};

export default layoutsMenu;

const styles = StyleSheet.create({
  container: {}
});
