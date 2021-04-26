import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  AuthStackConfig,
  HomeStackConfig,
  SettingsStackConfig,
  tabBarOptions,
  stackScreensNavigationOptions,
} from './AppNavigatorConfig';

const AuthStack = createStackNavigator(AuthStackConfig.routeConfigMap, {
  initialRouteName: AuthStackConfig.initialRouteName,
  headerMode: 'none',
});

const HomeStack = createStackNavigator(HomeStackConfig.routeConfigMap, {
  navigationOptions: HomeStackConfig.navigationOptions,
  defaultNavigationOptions: stackScreensNavigationOptions,
});
const SettingsStack = createStackNavigator(SettingsStackConfig.routeConfigMap, {
  navigationOptions: SettingsStackConfig.navigationOptions,
});

const ContentStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    tabBarOptions: tabBarOptions,
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: ContentStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const routeConfigMap = {
  // AuthLoading: { screen: AuthLoading },
  Auth: {screen: AuthStack, path: 'Auth'},
  App: {screen: RootStack, path: 'app'},
};

const App = createSwitchNavigator(routeConfigMap, {
  initialRouteName: 'Auth',
});

export default createAppContainer(App);
