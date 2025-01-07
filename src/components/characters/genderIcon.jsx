import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {genderTypes} from '../../utils/constants';
import {Man, Unlock, Woman} from 'iconsax-react-native';
import Colors from '../../themes/Colors';

const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE) {
    return <Man size={size} color={Colors.RED} />;
  }
  if (gender == genderTypes.FEMALE) {
    return <Woman size={size} color={Colors.RED} />;
  }
  if (gender == genderTypes.UNKNOWN) {
    return <Unlock size={size} color={Colors.RED} />;
  }
};

export default GenderIcon;

const styles = StyleSheet.create({});
