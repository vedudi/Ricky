import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
} from '../types/characterTypes';

const initialState = {
  characterList: [],
  pending: false,
  error: null,
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
    default:
      return state;
  }
};

export default CharactersReducer;

const styles = StyleSheet.create({});
