import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const LoadingOverlay = ({size, color, style}) => {
  return (
    <View style={style}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default LoadingOverlay;
