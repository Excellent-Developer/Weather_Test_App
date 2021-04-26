import {createReducer} from 'reduxsauce';
import {initialState} from './InitialState';
import {AuthTypes} from './Actions';

const signInLoading = (state) => ({
  ...state,
  signInLoading: true,
  signInErrorMessage: null,
});

const signInSuccess = (state, {user}) => ({
  ...state,
  user,
  signInLoading: false,
  signInErrorMessage: null,
});

const signInFailure = (state, {error}) => ({
  ...state,
  signInLoading: false,
  signInErrorMessage: error.message,
});

export const AuthReducer = createReducer(initialState, {
  [AuthTypes.SIGN_IN_LOADING]: signInLoading,
  [AuthTypes.SIGN_IN_SUCCESS]: signInSuccess,
  [AuthTypes.SIGN_IN_FAILURE]: signInFailure,
});
