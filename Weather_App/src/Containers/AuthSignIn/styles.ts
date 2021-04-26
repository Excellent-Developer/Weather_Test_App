import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  inputField: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 20,
    color: '#AC0079',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#D6D8DB',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#3C485D',
  },
  errorText: {
    color: 'red',
    paddingVertical: 5,
  },
  buttonField: {
    width: 100,
    justifyContent: 'center',
  },
  loginButton: {
    width: 100,
    justifyContent: 'center',
  },
  loadingOverlay: {
    flex: 1,
  },
});

export default styles;
