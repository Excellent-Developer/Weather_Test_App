import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    width: '40%',
  },
  value: {
    fontSize: 22,
    fontWeight: '500',
  },
});

export default styles;
