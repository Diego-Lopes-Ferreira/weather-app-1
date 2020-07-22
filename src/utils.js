
// Seleciona o icone
export function iconByType(weatherType) {
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
export function colorByType(weatherType) {
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
