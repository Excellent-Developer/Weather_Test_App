import {all, takeLatest} from 'redux-saga/effects';

import Auth from './Auth';
import {AuthTypes} from '../Stores/Auth/Actions';

export default function* root() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN, Auth.signIn),
    takeLatest(AuthTypes.SIGN_IN_SUCCESS, Auth.signInSuccess),
    takeLatest(AuthTypes.SIGN_IN_FAILURE, Auth.signInFailure),
  ]);
}
