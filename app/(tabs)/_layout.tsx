import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';





export default function TabLayout() {

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1D1A20',
          tabBarInactiveTintColor: '#AEAEAE',
          tabBarShowLabel: false,
          tabBarStyle: { 
            backgroundColor: '#fff',
            height: 70,
            borderTopWidth: 0,
          }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={30} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={30} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                backgroundColor: '#000000',
                height: 70,
                width: 70,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,

              }}>
                <Ionicons name={focused ? 'add-circle-outline' : 'add'} color={'#fff'} size={34} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: 'Notification',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'notifications' : 'notifications-outline'} color={color} size={30} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={30} />
            ),
          }}
        />
    </Tabs>
    </>
  );
}
