import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CHANGE_PARAMS,
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_CHARACTERS,
  PENDING_SINGLECHARACTER,
  SINGLECHARACTER_REJECT,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  pending: false,
  error: null,
  singleCharacter: [],
  pendingSingleCharacter: true,
  errorSingleCharacter: null,
  params: {
    page: 1,
    status: null,
    gender: null,
    name: null,
  },
};

const CharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case CHARACTERS_REJECT:
      return {
        ...state,
        error: action.error,
        pending: false,
      };
    case PENDING_SINGLECHARACTER:
      return {
        ...state,
        pendingSingleCharacter: true,
      };
    case FETCH_SINGLECHARACTER:
      return {
        ...state,
        singleCharacter: action.payload,
        pendingSingleCharacter: false,
      };
    case SINGLECHARACTER_REJECT:
      return {
        ...state,
        errorSingleCharacter: action.error,
      };

    case CHANGE_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };
    default:
      return state;
  }
};

export default CharactersReducer;

const styles = StyleSheet.create({});
