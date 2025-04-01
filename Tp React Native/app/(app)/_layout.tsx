import { Text } from 'react-native';
import { Redirect, Stack, Tabs } from 'expo-router';
import { useAuth } from '@/context/ctx';
import Ionicons from "@expo/vector-icons/build/Ionicons";

export default function TabLayout() {
    const { user, loading } = useAuth();
  
  if (!user)
    return <Redirect href="/login" />
  return (
    
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
            backgroundColor: "#25292e",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#25292e",
          },
    }}
>
      <Tabs.Screen
    name="dashboard"
    options={{
      title: "dashboard",
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name={focused ? "home-sharp" : "home-outline"}
          color={color}
          size={24}
        />
      ),
    }}
  />
<Tabs.Screen
    name="profile"
    options={{
      title: "profule",
      tabBarIcon: ({ color, focused }) => (
        <Ionicons
          name={
            focused ? "information-circle" : "information-circle-outline"
          }
          color={color}
          size={24}
        />
      ),
    }}
  />
      </Tabs>
  )
}