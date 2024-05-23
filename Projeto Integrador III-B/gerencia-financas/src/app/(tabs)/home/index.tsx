import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, } from 'react-native';




const Home = () => {
return (
    
    <ImageBackground source={require('../../assets/img/bg-home.png')} style={styles.body} imageStyle={{width: '100%', height: '100%'}}>

       <View style={styles.menu}>

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


  menu: {

  }

});
