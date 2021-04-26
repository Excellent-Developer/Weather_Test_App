import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import styles from './styles';

// const WeatherInfo = {
//   cityname: '',
//   type: 'Sunny',
//   temperature: '8',
//   wind: '20 mph',
//   humidity: '63%',
//   precipitation: '1%',
// };

const Weather = () => {
  const navigation = useNavigation();
  const WeatherInfo = navigation.getParam('weatherInfo', '');
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Temperature:</Text>
        <Text style={styles.value}>{`${WeatherInfo.temperature} 'C`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Type:</Text>
        <Text style={styles.value}>{WeatherInfo.type}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Wind:</Text>
        <Text style={styles.value}>{WeatherInfo.wind}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Humidity:</Text>
        <Text style={styles.value}>{WeatherInfo.humidity}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Precipitation:</Text>
        <Text style={styles.value}>{WeatherInfo.precipitation}</Text>
      </View>
    </View>
  );
};

Weather.navigationOptions = ({navigation}) => {
  const {name} = navigation.getParam('weatherInfo', '');
  return {
    title: name,
  };
};

export default Weather;
