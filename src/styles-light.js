import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { textColorDark } from './styles-dark';

export const textColorLight = '#080B1A';
export const bgLight = '#C1C4CD';

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
    color: '#f0f0f0',
  },
  cardTemp: {
    fontSize: 32,
    color: '#f0f0f0',
  },
  // InfoCard
  infoWrapper: {
    width: '100%',
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  infoLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoBlock: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 80,
    padding: 30,
  },
  infoTextInfoTitle: {
    fontSize: 20,
    color: textColorDark,
  },
  infoTextInfo: {
    fontSize: 15,
    color: textColorDark,
  },
});