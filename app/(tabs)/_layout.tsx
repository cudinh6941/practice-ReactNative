import React from 'react';
import {Text} from 'react-native'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './explore';
import Task from './task';
import Ionicons from '@expo/vector-icons/Ionicons'
import CustomIcon from '@/components/CustomIcon';
import HomeScreen from './home';

const Tab = createBottomTabNavigator()

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tab.Navigator screenOptions={({ route })  => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: any;

        if (route.name === 'explore') {
          iconName = focused
            ? require('@/assets/images/IconSelected/Icon.png') 
            : require('@/assets/images/icon/Icon_home.png')
        } else if (route.name === 'index') {
          iconName = focused ? require('@/assets/images/IconSelected/Icon.png') : require('@/assets/images/icon/Icon_home.png') 
        }
        
        // You can return any component that you like here!
        // return <Ionicons name= 'home' size={size} color={color} />;
        return <CustomIcon size={size} color={color} imageSource={iconName}/>
      },
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'black',
      },
      tabBarLabelStyle: {
        marginTop: 20
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
    })} >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="explore" component={Explore}/>
      <Tab.Screen name="index" component={Task} />
    </Tab.Navigator>
  
  );
}
