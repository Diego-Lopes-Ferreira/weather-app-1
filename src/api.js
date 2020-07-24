import React from 'react';
import * as Location from 'expo-location';

import { key } from './api-key.json';
/*
  I'm using the open weather API
  https://openweathermap.org/api

  Save your free key on a api-key.json
  '''
    {
      "key": "your key"
    }
  '''
*/

const axios = require('axios');

export async function fetchLocation() {
  let { status } = await Location.requestPermissionsAsync()
  if (status !== 'granted') { } else {
    let locale = await Location.getCurrentPositionAsync({})
    //console.log(locale)
    return locale
  }
}

export default async function getWeatherFromApi(locationCoords) {
  let lat = locationCoords.coords.latitude;
  let lon = locationCoords.coords.longitude;
  let result = {}
  //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your key}
  await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then((response) => {
      const data = response.data

      result.cityCountry = data.name + ', ' + data.sys.country;
      result.currentTemperature = data.main.temp - 273,15;
      result.tempMin = data.main.temp_min - 273,15;
      result.tempMax = data.main.temp_max - 273,15;
      result.umidity = data.main.humidity;
      result.wind = data.wind.speed;

      //console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  return result
}
