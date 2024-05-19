import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Praticando} from './src/screens/props';
// import Index from './src/screens';

export default function App() {
  return (
    <View>
      <Praticando text='Botão 1' colorBg='red' onPress={() => {console.log('clicou 1')}}/>
      <Praticando text='Botão 2' colorBg='blue' onPress={() => {console.log('clicou 2')}}/>
      <Praticando text='Botão 3' onPress={() => {console.log('clicou 3')}}/>
      <Text>
        
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})