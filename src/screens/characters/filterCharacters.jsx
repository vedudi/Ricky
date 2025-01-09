import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenStyle from '../../styles/ScreenStyle';
import Colors from '../../themes/Colors';
import {changeParams} from '../../stores/actions/CharactersActions';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {genders, status} from '../../utils/constants';
import CustomButton from '../../components/ui/CustomButton';

const FilterCharacters = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {params} = useSelector(state => state.characters);
  const filterCharacters = () => {
    navigation.goBack();
  };
  const clearFilter = () => {
    navigation.goBack();
    dispatch(changeParams({gender: null, status: null}));
  };
  return (
    <View style={ScreenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: Colors.BROWN,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({gender: item.value}))}
                style={{
                  backgroundColor:
                    params.gender == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Text style={{color: Colors.WHITE}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              color: Colors.BROWN,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Status
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({status: item.value}))}
                style={{
                  backgroundColor:
                    params.status == item.value ? Colors.GREEN : Colors.BROWN,
                  padding: 10,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Text style={{color: Colors.WHITE}}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', paddingBottom: 20}}>
        <CustomButton
          onPress={filterCharacters}
          title="Filter"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
        <CustomButton
          onPress={clearFilter}
          title="Clear"
          backColor={Colors.BACKTITLECOLOR}
        />
      </View>
    </View>
  );
};

export default FilterCharacters;

const styles = StyleSheet.create({});
