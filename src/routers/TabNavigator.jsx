import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import Characters from '../screens/characters/Characters';
import Episodes from '../screens/episodes/Episodes';
import Locations from '../screens/locations/Locations';
import Settings from '../screens/settings/Settings';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
