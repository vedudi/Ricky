import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CHARACTERDETAIL,
  FILTERCHARACTERS,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';

import CharacterDetail from '../screens/characters/CharacterDetail';
import FilterCharacters from '../screens/characters/FilterCharacters';
import SearchCharacters from '../screens/characters/SearchCharacters';
import TabNavigator from './TabNavigator';
import Colors from '../themes/Colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR,
        },
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
