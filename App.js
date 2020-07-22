import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Switch, View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import darkTheme from './src/styles-dark';
import lightTheme from './src/styles-light';

import ReloadButton from './src/reload-button';
import TopCard from './src/top-card';
import MainCard from './src/main-card';
import InfoCard from './src/info-card';

export default function App() {
  const [darkThemeOn, setDarkThemeOn] = useState(false);
  const [styles, setStyles] = useState('');
  
  const [location, setLocation] = useState('Ourinhos, SP, Brasil');
  const [time, setTime] = useState('14:00');

  const [currentTemperature, setCurrentTemperature] = useState('32');
  const [windSpeed, setWindSpeed] = useState('');
  const [umidity, setUmidity] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [weatherType, setWeatherType] = useState('wind');


  useEffect(() => {
    darkThemeOn ? setStyles(darkTheme) : setStyles(lightTheme);
  }, [darkThemeOn]);


  return (
    <View style={styles.container}>
      <StatusBar style={darkThemeOn ? 'light' : 'dark'} />
      {/* Refresh Button */}
      <ReloadButton darkThemeOn={darkThemeOn} func={() => { }} styles={styles} />
      {/* Top info */}
      <TopCard
        styles={styles}
        weatherType={weatherType}
        currentTemperature={currentTemperature}
        location={location}
        time={time}
      />
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
          bg={darkThemeOn ? '#38b7b8' : '#008081'}
        />
      </View>
      <View style={{ padding: 30, width: '100%' }}>
        <InfoCard
          info={infoEX}
          styles={styles}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Feather
          name={darkThemeOn ? 'sun' : 'moon'}
          size={32}
          color={darkThemeOn ? '#ffffff' : '#000000'}
        />
        <Switch
          trackColor={{ false: "#000000", true: "#ffffff" }}
          thumbColor={"#aaaaaa"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => { setDarkThemeOn(!darkThemeOn) }}
          value={darkThemeOn}
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
