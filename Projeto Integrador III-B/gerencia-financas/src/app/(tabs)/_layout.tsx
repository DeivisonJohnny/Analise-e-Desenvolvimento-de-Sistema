import { StatusBar, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Icon, Tab } from 'react-native-elements';
import { useState } from 'react';
import { Route } from 'expo-router/build/Route';


export default function Layout() {



  return (
    <Tabs screenOptions={({ route }) => ({

      headerShown: false,
      tabBarStyle: route.key === 'renda/index' ? { display: 'none', } : styles.bottomMenu,

    })}>

      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIconStyle: styles.iconTab,
          tabBarIcon: () => <Icon name='home' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,

        }}
      />

<Tabs.Screen
  name="renda/index"
  options={{
    title: 'Lista de rendas',
    tabBarIconStyle: styles.iconTab,
    tabBarIcon: () => <Icon name='list' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,

  }}
/>
<Tabs.Screen
  name='renda/form'
  options={{
    title: 'Add renda',
    tabBarIconStyle: styles.iconTab,
    tabBarIcon: () => <Icon name='add' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,
  }}
/>
<Tabs.Screen
  name='dispesa/index'
  options={{
    title: 'Lista Despesas',
    tabBarIconStyle: styles.iconTab,
    tabBarIcon: () => <Icon name='list' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,
  }}

/>
<Tabs.Screen
  name='dispesa/form'
  options={{
    title: 'Add despesa',
    tabBarIconStyle: styles.iconTab,
    tabBarIcon: () => <Icon name='add' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,
  }}
/>

<Tabs.Screen
  name='resumo/index'
  options={{
    title: 'Resumo',
    tabBarIconStyle: styles.iconTab,
    tabBarIcon: () => <Icon name='newspaper' type='ionicon' color={'white'} size={22} containerStyle={{ height: 22, }}></Icon>,
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