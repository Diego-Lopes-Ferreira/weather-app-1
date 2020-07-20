import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';

const textColorDark = '#e0e0e0';
const textColorLight = '#0e0e0e';
const bgDark = '#0e0e0e';
const bgLight = '#e0e0e0';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkThemeOn ? bgDark : bgLight,
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight + 10,
    },
  });


  const [darkThemeOn, setDarkThemeOn] = useState(false);
  const [currentTemperature, setCurrentTemperature] = useState('32');
  const [location, setLocation] = useState('');

  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', top: Constants.statusBarHeight + 10, left: 20 }}>
        <TouchableOpacity
          onPress={() => {}}
        >
          <Feather
            name='refresh-ccw'
            size={30}
            color={darkThemeOn ? textColorDark : textColorLight}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.temperatureWrapper}>

        <Feather name={'sun'} size={40} color={'#ffff00'} />
        <View style={styles.temperature}>
          <Text style={styles.tempText}>{currentTemperature}°C</Text>
        </View>
      </View>
    </View>
  );
}

function MainCard({ }) {
  return (
    <View></View>
  );
}
