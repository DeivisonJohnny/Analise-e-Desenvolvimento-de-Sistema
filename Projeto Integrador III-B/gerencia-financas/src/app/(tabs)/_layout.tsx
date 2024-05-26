import { StatusBar, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Icon, Tab } from 'react-native-elements';


export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: styles.bottomMenu
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'login',
          tabBarIconStyle: styles.iconTab,
          tabBarIcon: () => <Icon name='log-in' type='ionicon' color={'white'} size={22}></Icon>


        }}
      />
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
        name='dispesas/index'
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