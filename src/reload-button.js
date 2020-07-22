import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { textColorDark, textColorLight, bgLight, bgDark } from './colors';

export default function ReloadButton({ darkThemeOn, func, styles }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(darkThemeOn);
  }, [darkThemeOn])
  return (
    <View style={styles.refresh}>
      <TouchableOpacity onPress={func}>
        <Feather
          name='refresh-ccw'
          size={22}
          color={dark ? textColorDark : textColorLight}
        />
      </TouchableOpacity>
    </View>
  );
}
