import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home/Home';
import { Catalog } from '@screens/Catalog/Catalog';
import { Profile } from '@screens/Profile/Profile';

export function BottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Catalog" component={Catalog} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
