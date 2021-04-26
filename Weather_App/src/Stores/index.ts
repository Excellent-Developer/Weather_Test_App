import {combineReducers} from 'redux';

import RootSaga from '../Sagas';
import ConfigureStore from './ConfigureStore';

import {AuthTypes} from './Auth/Actions';
import {AuthReducer} from './Auth/Reducers';
import {CityReducer} from './City/Reducers';

export default () => {
  const appReducer = combineReducers({
    auth: AuthReducer,
    city: CityReducer,
  });

  const rootReducer = (state, action) => {
    if (action.type === AuthTypes.SIGN_OUT_SUCCESS) {
      state = undefined;
    }

    return appReducer(state, action);
  };

  return ConfigureStore(rootReducer, RootSaga);
};
