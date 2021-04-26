import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const AppHeaderTitle = ({children}) => {
  return <Text style={styles.headerText}>{children}</Text>;
};

export default AppHeaderTitle;
