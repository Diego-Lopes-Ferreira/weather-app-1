import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const morningIcons = {
  clear: 'sun',
  rainSmall: 'cloud-drizzle',
  rainBig: 'cloud-lightning',
  wind: 'wind',
}
const afternoonIcons = {
  clear: 'sun',
  rainSmall: 'cloud-drizzle',
  rainBig: 'cloud-lightning',
  wind: 'wind',
}
const nightIcons = {
  clear: 'moon',
  rainSmall: 'cloud-drizzle',
  rainBig: 'cloud-lightning',
  wind: 'wind',
}

// Seleciona o icone
function byType(weatherType, data) {
  switch(weatherType) {
    case 'clear':
      return data.clear
    case 'rainSmall':
      return data.rainSmall
    case 'rainBig':
      return data.rainBig
    case 'wind':
      return data.wind
  }
}

export default function MainCard({
    title = 'Morning',
    type='morning',
    weather='clear',
    color = '#ffbb00',
    temp = '32',
    styles,
    bg
  }) {

  const [icon, setIcon] = useState('sun');
  const [temperature, setTemperature] = useState('32');
  
  useEffect(() => {
    // Seleciona o tipo, e chama a selecao de icone
    switch(type) {
      case 'morning':
        setIcon(byType(weather, morningIcons))
        break
      case 'afternoon':
        setIcon(byType(weather, afternoonIcons))
        break
      case 'night':
        setIcon(byType(weather, nightIcons))
        break
    }
    // Coloca a temperatura num useState
    setTemperature(temp)
  }, [weather, temp])
  return (
    <View style={[styles.cardWrapper, { backgroundColor: bg }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Feather
        name={icon}
        size={50}
        color={color}
      />
      <Text style={styles.cardTemp}>{temperature}°</Text>
    </View>
  );
}

/*
  cloud-rain
  cloud-snow
  cloud
  sunrise
  sunset
  wind


  cloud-drizzle, cloud-lightning
  
  sun

*/