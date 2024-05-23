import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Link, router } from 'expo-router';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <View>
        <Button title='Pagina dispesas' onPress={()=> {router.push('dispesas/dispesasPage')}}/>
        <Link href="/dispesas/dispesasPage"></Link>
        </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
