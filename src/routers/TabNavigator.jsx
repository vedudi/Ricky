import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import Characters from '../screens/characters/Characters';
import Episodes from '../screens/episodes/Episodes';
import Locations from '../screens/locations/Locations';
import Settings from '../screens/settings/Settings';
import TabIcon from '../components/router/TabIcon';
import {TabBarStyle} from '../styles/TabBarStyle';
import HeaderRight from '../components/router/HeaderRight';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: TabBarStyle.headerStyle,
        tabBarStyle: TabBarStyle.tabBarStyle,
        headerRight: prop => <HeaderRight />,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      {/* <Tab.Screen name={EPISODES} component={Episodes} /> */}
      {/* <Tab.Screen name={LOCATIONS} component={Locations} /> */}
      {/* <Tab.Screen name={SETTINGS} component={Settings} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
