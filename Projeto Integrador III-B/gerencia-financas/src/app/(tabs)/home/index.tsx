import { color } from '@rneui/base';
import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, } from 'react-native';




const Home = () => {
  return (

    <ImageBackground source={require('../../assets/img/bg-home.png')} style={styles.body} imageStyle={{ width: '100%', height: '100%' }}>

      <View style={styles.containerSaldos}>


        <View style={styles.boxSaldos}>
          <Text style={[styles.titleSaldo, {color: 'red'}]}>Dispesas</Text>
          <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>R$ 2.300,00</Text>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text>Status: </Text>
            <Text>Insuficiente</Text>
          </View>
        </View>

        <View style={styles.boxSaldos} >
          <Text style={styles.titleSaldo}>Renda</Text>
          <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>R$ 1.757,32</Text>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text>Status: </Text>
            <Text>Insuficiente</Text>
          </View>
        </View>

      </View>

    </ImageBackground>

  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },

  containerSaldos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 15,
    paddingHorizontal: 15,
  },


  boxSaldos: {
    borderWidth: 1,
    borderColor: '#ffffff28',
    justifyContent: 'space-around',
    width: '48%',
    height: 100,
    backgroundColor: '#ffffff0c',
    padding: 10,
    borderRadius: 5
  },

  titleSaldo: {
    color: '#00cf6885',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1.2
  },


  textStatus: {
    color: 'gray',
    fontSize: 12,
  }

});
