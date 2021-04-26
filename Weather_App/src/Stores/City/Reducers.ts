import {createReducer} from 'reduxsauce';
import {initialState} from './InitialState';
import {CityTypes} from './Actions';

const queryCitiesLoading = (state) => ({
  ...state,
  queryCitiesLoading: true,
  queryCitiesErrorMessage: null,
});

const queryCitiesSuccess = (state, {cityList}) => ({
  ...state,
  cityList,
  queryCitiesLoading: false,
  queryCitiesErrorMessage: null,
});

const queryCitiesFailure = (state, {error}) => ({
  ...state,
  queryCitiesLoading: false,
  queryCitiesErrorMessage: error.message,
});

export const CityReducer = createReducer(initialState, {
  [CityTypes.QUERY_CITIES_LOADING]: queryCitiesLoading,
  [CityTypes.QUERY_CITIES_SUCCESS]: queryCitiesSuccess,
  [CityTypes.QUERY_CITIES_FAILURE]: queryCitiesFailure,
});
