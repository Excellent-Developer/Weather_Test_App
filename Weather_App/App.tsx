/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler'; // https://github.com/kmagiera/react-native-gesture-handler/issues/746

import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Store from './src/Stores';

import RootScreen from './src/Containers/RootScreen';

const {store, persistor} = Store();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
