import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import MainCard from './src/main-card';
import InfoCard from './src/info-card';
import darkTheme, { bgDark, textColorDark } from './src/styles-dark';
import lightTheme, { bgLight, textColorLight } from './src/styles-light';

export default function App() {
  const [darkThemeOn, setDarkThemeOn] = useState(false);
  const [currentTemperature, setCurrentTemperature] = useState('32');
  const [location, setLocation] = useState('Ourinhos, SP, Brasil');
  const [styles, setStyles] = useState('');
  const [time, setTime] = useState('14:00');
  const [weatherType, setWeatherType] = useState('wind');

  useEffect(() => {
    darkThemeOn ? setStyles(darkTheme) : setStyles(lightTheme);
  }, [darkThemeOn]);


  return (
    <View style={styles.container}>
      <StatusBar style={darkThemeOn ? 'light' : 'dark'} />
      {/* Refresh Button */}
      <View style={styles.refresh}>
        <TouchableOpacity
          onPress={() => {
            setDarkThemeOn(!darkThemeOn)
          }}
        >
          <Feather
            name='refresh-ccw'
            size={22}
            color={darkThemeOn ? textColorDark : textColorLight}
          />
        </TouchableOpacity>
      </View>
      {/* Top info */}
      <View style={styles.temperatureWrapper}>
        <Feather name={iconByType(weatherType)} size={40} color={colorByType(weatherType)} />
        <View style={styles.temperature}>
          <Text style={styles.tempText}>{currentTemperature}</Text>
          <Text style={styles.tempTypeText}>°C</Text>
        </View>
        <Text style={styles.tempTypeText}>{location}, {time}</Text>
      </View>
      {/* Cards */}
      <View style={styles.cards}>
        <MainCard
          styles={styles}
          title='Manhã'
          type='morning'
          weather={'clear'}
          color={'#f0f0f0'}
          temp={'32'}
          bg={darkThemeOn ? '#cc6e30' : '#ff873d'}
        />
        <MainCard
          styles={styles}
          title='Tarde'
          type='afternoon'
          weather={'clear'}
          color={'#f0f0f0'}
          temp={'32'}
          bg={darkThemeOn ? '#fcc63f' : '#d29600'}
        />
        <MainCard
          styles={styles}
          title='Noite'
          type='night'
          weather={'clear'}
          color={'#f0f0f0'}
          temp={'32'}
          bg={darkThemeOn ? '#38b7b8' :  '#008081'}
        />
      </View>
      <View style={{ padding: 30, width: '100%' }}>
        <InfoCard
          info={infoEX}
          styles={styles}
        />
      </View>
    </View>
  );
}

const infoEX = {
  windSpeed: '32',
  umidity: '32',
  tempMin: '32',
  tempMax: '32',
}
// Seleciona o icone
function iconByType(weatherType) {
  const topIcons = {
    morningClear: 'sun',
    nightClear: 'moon',
    rainSmall: 'cloud-drizzle',
    rainBig: 'cloud-lightning',
    wind: 'wind',
  }
  switch (weatherType) {
    case 'clearM':
      return topIcons.morningClear
    case 'clearN':
      return topIcons.nightClear
    case 'rainSmall':
      return topIcons.rainSmall
    case 'rainBig':
      return topIcons.rainBig
    case 'wind':
      return topIcons.wind
  }
}
function colorByType(weatherType) {
  const topIcons = {
    morningClear: '#ffff00',
    nightClear: '#ffffff',
    rainSmall: '#aaaaaa',
    rainBig: '#f0f0f0',
    wind: '#a0a0a0',
  }
  switch (weatherType) {
    case 'clearM':
      return topIcons.morningClear
    case 'clearN':
      return topIcons.nightClear
    case 'rainSmall':
      return topIcons.rainSmall
    case 'rainBig':
      return topIcons.rainBig
    case 'wind':
      return topIcons.wind
  }
}