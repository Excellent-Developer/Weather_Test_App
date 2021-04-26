import React from 'react';
import AuthSignIn from '../Containers/AuthSignIn';
import Home from '../Containers/Home';
import Weather from '../Containers/Weather';
import Settings from '../Containers/Settings';

import AppHeaderTitle from '../Components/AppHeaderTitle';

export const AuthStackConfig = {
  routeConfigMap: {
    AuthSignIn,
  },
  initialRouteName: 'AuthSignIn',
};

export const HomeStackConfig = {
  routeConfigMap: {
    Home,
    Weather,
  },
  navigationOptions: {
    tabBarLabel: 'Home',
  },
};

export const SettingsStackConfig = {
  routeConfigMap: {
    Settings,
  },
  navigationOptions: {
    tabBarLabel: 'Settings',
  },
};

export const tabBarOptions = {
  activeTintColor: '#3C485E',
  inactiveTintColor: '#3C485E',
  style: {
    backgroundColor: '#F7F7F7',
    borderTopWidth: 0,
    height: 53,
  },
  labelStyle: {
    fontSize: 10,
  },
};

export const stackScreensNavigationOptions = {
  headerTitle: (props) => <AppHeaderTitle {...props} />,
};
