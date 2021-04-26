import React from 'react';
import {View} from 'react-native';

import AppNavigator from '../../Navigators/AppNavigator';
import NavigationService from '../../Service/NavigationService';
import styles from './styles';

const RootScreen = () => {
  return (
    <View style={styles.container}>
      <AppNavigator
        enableURLHandling={false}
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default RootScreen;
