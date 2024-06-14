import { StatusBar, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Icon, Tab } from 'react-native-elements';
import { useState } from 'react';
import { Route } from 'expo-router/build/Route';


export default function Layout() {

  const [key, setKey] = useState('')


  return (
    <Tabs screenOptions={({ route }) => ({

      headerShown: false,
      tabBarStyle: route.key === 'renda/index' ? { display: 'none', } : styles.bottomMenu,
      // tabBarStyle: {display: 'none'}

      // Adiciona console.log para depuração
      // console.log('Current route key:', route.key == 'login');
      // console.log('Current route name:', route.name);
      // console.log('Current route name:', route.name === 'renda/index');
      
      // return {
      //   headerShown: false,
      //   tabBarStyle: route.name == 'renda/index' ? { display: 'none' } : styles.bottomMenu,
      // };

    })}>



      
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Inicio',
          tabBarIconStyle: styles.iconTab,
          tabBarIcon: () => <Icon name='home' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,

        }}
      />

      <Tabs.Screen
        name='renda/index'
        options={{
          title: 'Renda',
          tabBarIconStyle: styles.iconTab,
          tabBarIcon: () => <Icon name='wallet' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,
        }}
      />

      <Tabs.Screen
        name='dispesas/addDispesas'
        options={{
          title: 'Dispesas',
          tabBarIconStyle: styles.iconTab,
          tabBarIcon: () => <Icon name='bag-remove' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,
        }}
      />

    </Tabs>
  );
}


const styles = StyleSheet.create({
  bottomMenu: {
    backgroundColor: '#182232',
    borderTopWidth: 0,
    gap: 0,
    // paddingVertical:
    height: 55
  },


  iconTab: {
    color: 'white',
  }
});