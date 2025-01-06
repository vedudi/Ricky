import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CHARACTERDETAIL,
  FILTERCHARACTERS,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';

import CharacterDetail from '../screens/characters/characterDetail';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacters from '../screens/characters/searchCharacters';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
