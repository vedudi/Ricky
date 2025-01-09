import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../../components/ui/CustomButton';
import Colors from '../../themes/Colors';
import ScreenStyle from '../../styles/ScreenStyle';
import SearchItem from '../../components/characters/SearchItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../stores/actions/CharactersActions';

const SearchCharacters = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);
  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}));
  };
  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          value={searchText}
          placeholder="Search Character"
          onSubmitEditing={handleSubmit}
          style={{
            width: '95%',
            borderWidth: 0.5,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderColor: Colors.BROWN,
            padding: 10,
            height: 40,
            borderRadius: 100,
          }}
          onChangeText={setSearchText}
        />
        <CustomButton
          onPress={() => handleSubmit()}
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
      </View>
    );
  };

  return (
    <View style={ScreenStyle.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} />}
      />
    </View>
  );
};

export default SearchCharacters;

const styles = StyleSheet.create({});
