import { StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
<Tabs screenOptions={{
  headerShown: false,
  tabBarStyle: {display: 'none'}
}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'login',
         
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'home',
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  bottomMenu: {
    backgroundColor: 'gray'
  }
});