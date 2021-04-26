import {call, put} from 'redux-saga/effects';
import CityActions from '../../../Stores/City/Actions';

import {getWeathers} from '../../../Service/weather';

export default function* queryCities() {
  yield put(CityActions.queryCitiesLoading());
  try {
    const response = yield call(getWeathers);
    if (response.error) {
      throw response.error;
    }
    yield put(CityActions.queryCitiesSuccess(response.data));
  } catch (error) {
    yield put(CityActions.queryCitiesFailure(error));
  }
}
