import {all, fork} from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import CitySaga from './CitySaga';

export default function* root() {
  yield all([fork(AuthSaga)]);
  yield all([fork(CitySaga)]);
}
