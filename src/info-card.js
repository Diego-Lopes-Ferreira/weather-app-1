import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function InfoCard({ info, styles }) {
  const [windSpeed, setWindSpeed] = useState('');
  const [umidity, setUmidity] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [tempMax, setTempMax] = useState('');

  useEffect(() => {
    setWindSpeed(info.windSpeed);
    setUmidity(info.umidity);
    setTempMin(info.tempMin);
    setTempMax(info.tempMax);
  }, [info])

  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoLine}>
        <View style={styles.infoBlock}>
          <Text style={styles.infoTextInfoTitle}>Vento</Text>
          <Text style={styles.infoTextInfo}>{windSpeed} km/h</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoTextInfoTitle}>Umidade</Text>
          <Text style={styles.infoTextInfo}>{umidity}%</Text>
        </View>
      </View>
      <View style={styles.infoLine}>
        <View style={styles.infoBlock}>
          <Text style={styles.infoTextInfoTitle}>Temp. Min</Text>
          <Text style={styles.infoTextInfo}>{tempMin}°C</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.infoTextInfoTitle}>Temp. Max</Text>
          <Text style={styles.infoTextInfo}>{tempMax}°C</Text>
        </View>
      </View>
    </View>
  );
}
