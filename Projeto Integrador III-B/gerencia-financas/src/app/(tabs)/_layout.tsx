
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="login/index"
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
