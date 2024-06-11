import React from 'react';
import {Text} from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './explore';
import Task from './task';
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'explore') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'index') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        } 
        // You can return any component that you like here!
        return <Ionicons name= 'card' size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })} >
      <Tab.Screen name="explore" component={Explore}/>
      <Tab.Screen name="index" component={Task} />
    </Tab.Navigator>
  
  );
}
