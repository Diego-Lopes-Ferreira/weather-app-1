import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { iconByType, colorByType } from './utils';

export default function TopCard({ styles, weatherType, currentTemperature, location, time }) {
  return (
    <View style={styles.temperatureWrapper}>
      <Feather name={iconByType(weatherType)} size={40} color={colorByType(weatherType)} />
      <View style={styles.temperature}>
        <Text style={styles.tempText}>{currentTemperature}</Text>
        <Text style={styles.tempTypeText}>°C</Text>
      </View>
      <Text style={styles.tempTypeText}>{location}, {time}</Text>
    </View>
  );
}
