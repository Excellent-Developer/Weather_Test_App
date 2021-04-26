import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import useSafeNavigation from '../../Hooks/safeNavigation';

import styles from './styles';

const CityItemCard = ({item}) => {
  const {navigate} = useSafeNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('Weather', {weatherInfo: item})}>
      <Text style={styles.cityName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CityItemCard;
