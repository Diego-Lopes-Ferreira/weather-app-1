import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import MainCard from './src/MainCard';
import darkTheme, { bgDark, textColorDark } from './src/styles-dark';
import lightTheme, { bgLight, textColorLight } from './src/styles-light';

export default function App() {
  const [darkThemeOn, setDarkThemeOn] = useState(false);
  const [currentTemperature, setCurrentTemperature] = useState('32');
  const [location, setLocation] = useState('');
  const [styles, setStyles] = useState('');

  useEffect(() => {
    darkThemeOn ? setStyles(darkTheme) : setStyles(lightTheme);
  }, [darkThemeOn]);


  return (
    <View style={styles.container}>
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
        <Feather name={'sun'} size={40} color={'#ffbb00'} />
        <View style={styles.temperature}>
          <Text style={styles.tempText}>{currentTemperature}</Text>
          <Text style={styles.tempTypeText}>°C</Text>
        </View>
      </View>
      {/* Cards */}
      <View style={styles.cards}>
        <MainCard
          styles={styles}
          title='Manhã'
          type='morning'
          weather={'clear'}
          color={textColorDark}
          temp={'32'}
          bg={darkThemeOn ? '#ff873d' : '#cc6e30'}
        />
        <MainCard
          styles={styles}
          title='Tarde'
          type='afternoon'
          weather={'clear'}
          color={textColorDark}
          temp={'32'}
          bg={darkThemeOn ? '#d29600' : '#fcc63f'}
        />
        <MainCard
          styles={styles}
          title='Noite'
          type='night'
          weather={'clear'}
          color={textColorDark}
          temp={'32'}
          bg={darkThemeOn ? '#008081' : '#38b7b8'}
        />
      </View>
    </View>
  );
}

