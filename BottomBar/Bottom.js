import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import Cart from '../Screens/Cart'
import Login from '../Authentication/Login'
import Profile from '../Screens/Profile'
import HeaderSearchbar from '../Screens/HeaderSearchbar'

const Bottom = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator  
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            iconColor = focused ? 'blue' : 'white';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
            iconColor = focused ? 'blue' : 'white';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
            iconColor = focused ? 'blue' : 'white';
          } else if (route.name === 'Login') {
            iconName = focused ? 'person' : 'person-outline';
            iconColor = focused ? 'blue' : 'white';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
        <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Search' component={Search} 
        options={{
            headerTitle:props=><HeaderSearchbar {...props} />,
        }}
      />
      <Tab.Screen name='Cart' component={Cart} />
      <Tab.Screen name='Login' component={Login} /> 
    </Tab.Navigator>
  )
}

export default Bottom