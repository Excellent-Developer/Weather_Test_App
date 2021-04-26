import {call, put} from 'redux-saga/effects';
import AuthActions from '../../../Stores/Auth/Actions';
import NavigationService from '../../../Service/NavigationService';

import {signInByUsername} from '../../../Service/weather';

export default function* signIn({username}: ReturnType<any>) {
  yield put(AuthActions.signInLoading());
  try {
    const response = yield call(signInByUsername, username);
    if (response.error) {
      throw response.error;
    }
    yield put(AuthActions.signInSuccess(response.data));
    yield NavigationService.navigate('Home', {});
  } catch (error) {
    yield put(AuthActions.signInFailure(error));
  }
}
