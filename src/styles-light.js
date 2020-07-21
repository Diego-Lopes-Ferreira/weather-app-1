import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import {textColorDark} from './styles-dark';

export const textColorLight = '#0e0e0e';
export const bgLight = '#e0e0e0';

export default lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgLight,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 20,
  },
  refresh: {
    position: 'absolute',
    top: Constants.statusBarHeight + 20,
    left: 20,
  },
  tempText: {
    fontSize: 50,
    color: textColorLight,
  },
  tempTypeText: {
    fontSize: 10,
    color: textColorLight,
  },
  temperature: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperatureWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  // MainCard
  cards: {
    flexDirection: 'row',
  },
  cardWrapper: {
    width: 100,
    backgroundColor: '#ff00ff',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 5,
  },
  cardTitle: {
    fontSize: 22,
    color: textColorDark,
  },
  cardTemp: {
    fontSize: 32,
    color: textColorDark,
  },
  /* 
  */
});