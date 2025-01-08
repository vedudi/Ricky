import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../themes/Colors';

const CustomButton = () => {
  return (
    <View>
      <Text>CustomButton</Text>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    padding: 8,
    borderRadius: 5,
    margin: 5,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: Colors.WHITE,
  },
});
