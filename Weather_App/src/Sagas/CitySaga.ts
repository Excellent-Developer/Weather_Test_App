import {all, takeLatest} from 'redux-saga/effects';

import City from './City';
import {CityTypes} from '../Stores/City/Actions';

export default function* root() {
  yield all([
    takeLatest(CityTypes.QUERY_CITIES, City.queryCities),
    takeLatest(CityTypes.QUERY_CITIES_SUCCESS, City.queryCitiesSuccess),
    takeLatest(CityTypes.QUERY_CITIES_FAILURE, City.queryCitiesFailure),
  ]);
}
