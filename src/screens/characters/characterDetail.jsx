import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSingleCharacter} from '../../stores/actions/CharactersActions';
import Spinner from '../../components/ui/Spinner';
import ScreenStyle from '../../styles/ScreenStyle';
import {CharacterDetailStyle} from '../../styles/CharactersStyle';
import {statusTypes} from '../../utils/constants';

const CharacterDetail = ({route}) => {
  const {characterID} = route?.params;
  const dispatch = useDispatch();
  const {pendingSingleCharacter, singleCharacter} = useSelector(
    state => state.characters,
  );
  useEffect(() => {
    dispatch(getSingleCharacter(characterID));
  }, []);
  return (
    <View style={ScreenStyle.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View style={CharacterDetailStyle.imageContainer}>
            <Image
              style={[
                CharacterDetailStyle.image,

                singleCharacter.status == statusTypes.ALIVE
                  ? CharacterDetailStyle.statusAliveContainer
                  : CharacterDetailStyle.statusDeadContainer,
              ]}
              source={{uri: singleCharacter.image}}
            />
            <View
              style={[
                singleCharacter.status == statusTypes.ALIVE
                  ? CharacterDetailStyle.aliveStatusContainer
                  : CharacterDetailStyle.deadStatusContainer,
              ]}>
              <Text style={CharacterDetailStyle.status}>
                {singleCharacter.status}
              </Text>
            </View>
          </View>
          <View style={CharacterDetailStyle.nameContainer}>
            <Text style={CharacterDetailStyle.name}>
              {singleCharacter.name}
            </Text>
          </View>
          <View style={CharacterDetailStyle.sectionContainer}>
            <Text style={CharacterDetailStyle.sectionTitle}>PROPERTIES</Text>
            <View style={CharacterDetailStyle.rowContainer}>
              <View style={CharacterDetailStyle.infoContainer}>
                <Text>Gender</Text>
              </View>
              <View style={CharacterDetailStyle.infoBox}>
                <Text>{singleCharacter.gender}</Text>
              </View>
            </View>
            <View style={CharacterDetailStyle.rowContainer}>
              <View style={CharacterDetailStyle.infoContainer}>
                <Text>Species</Text>
              </View>
              <View style={CharacterDetailStyle.infoBox}>
                <Text>{singleCharacter.species}</Text>
              </View>
            </View>
            <View style={CharacterDetailStyle.rowContainer}>
              <View style={CharacterDetailStyle.infoContainer}>
                <Text>Status</Text>
              </View>
              <View style={CharacterDetailStyle.infoBox}>
                <Text>{singleCharacter.status}</Text>
              </View>
            </View>
          </View>
          <View style={CharacterDetailStyle.sectionContainer}>
            <Text style={CharacterDetailStyle.sectionTitle}>WHERE ABOUTS</Text>
            <View style={CharacterDetailStyle.rowContainer}>
              <View style={CharacterDetailStyle.infoContainer}>
                <Text>Origin</Text>
              </View>
              <View style={CharacterDetailStyle.infoBox}>
                <Text>{singleCharacter.origin?.name}</Text>
              </View>
            </View>
            <View style={CharacterDetailStyle.rowContainer}>
              <View style={CharacterDetailStyle.infoContainer}>
                <Text>Location</Text>
              </View>
              <View style={CharacterDetailStyle.infoBox}>
                <Text>{singleCharacter.location?.name}</Text>
              </View>
            </View>
          </View>
          <View style={CharacterDetailStyle.sectionContainer}>
            <Text style={CharacterDetailStyle.sectionTitle}>
              FEATURE CHAPTERS
            </Text>
            <View style={CharacterDetailStyle.rowContainer}>
              <View style={CharacterDetailStyle.infoContainer}>
                <Text>Origin</Text>
              </View>
              <View style={CharacterDetailStyle.infoBox}>
                <Text>{singleCharacter.created}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({});
