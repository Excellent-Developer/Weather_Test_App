import React from 'react';
import {View, TextInput} from 'react-native';
import {Button, Text} from 'native-base';
import {Form, Field} from 'react-final-form';
import {useSelector, useDispatch} from 'react-redux';

import LoadingOverlay from '../../Components/LoadingOverlay';

import AuthActions from '../../Stores/Auth/Actions';
import AuthSelect from '../../Stores/Auth/Select';

import styles from './styles';

const AuthSignIn = () => {
  const d = useDispatch();

  const signInLoading = useSelector(AuthSelect.signInLoading);

  const doSubmit = ({username}) => {
    d(AuthActions.signIn(username));
  };

  const validate = (value) => {
    const errors: any = {};
    if (!value.username) {
      errors.username = 'Username cannot be blank';
    }
    return errors;
  };

  return (
    <View style={styles.container}>
      <Form
        onSubmit={doSubmit}
        validate={validate}
        render={({handleSubmit}) => (
          <>
            <Field name={'username'}>
              {({input, meta}) => (
                <View style={styles.inputField}>
                  <Text style={styles.label}>User Name</Text>
                  <TextInput
                    maxLength={18}
                    value={input.value}
                    onChange={input.onChange}
                    style={styles.input}
                  />
                  {meta.touched && meta.error && (
                    <View>
                      <Text style={styles.errorText}>{meta.error}</Text>
                    </View>
                  )}
                </View>
              )}
            </Field>
            <View style={styles.buttonField}>
              <Button style={styles.loginButton} onPress={handleSubmit}>
                {signInLoading ? (
                  <LoadingOverlay
                    size="small"
                    color="#0000ff"
                    style={styles.loadingOverlay}
                  />
                ) : (
                  <Text>Log In</Text>
                )}
              </Button>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default AuthSignIn;
