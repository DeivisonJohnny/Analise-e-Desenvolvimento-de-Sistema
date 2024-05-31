import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormComponents from '../../../components/formInsert/formComponents';

interface AddRendaProps {}

const AddRenda = (props: AddRendaProps) => {
  return (
    <View style={styles.container}>
      <FormComponents label={['primeiro', 'segundo']}></FormComponents>
    </View>
  );
};

export default AddRenda;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
});
