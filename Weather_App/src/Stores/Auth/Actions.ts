import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions(
  {
    signIn: ['username'], // SIGN_IN. userName will be twitter nickname
    signInLoading: null, // SIGN_IN_LOADING
    signInSuccess: ['user'], // SIGN_IN_SUCCESS
    signInFailure: ['error'], // SIGN_IN_FAILURE
  },
  {prefix: 'AUTH_'},
);

export const AuthTypes = Types;
export default Creators;
