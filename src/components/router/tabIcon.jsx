import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Book1, Location, PresentionChart, Setting} from 'iconsax-react-native';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';

const TabIcon = ({focused, color, size, screenName}) => {
  if (screenName == CHARACTERS) {
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (screenName == SETTINGS) {
    return (
      <Setting
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == EPISODES) {
    return (
      <PresentionChart
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == LOCATIONS) {
    return (
      <Location
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
};

export default TabIcon;

const styles = StyleSheet.create({});
