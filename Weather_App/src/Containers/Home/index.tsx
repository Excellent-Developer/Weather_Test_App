import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import CityActions from '../../Stores/City/Actions';
import CitySelect from '../../Stores/City/Select';

import CityItemCard from '../../Components/CityItemCard';
import LoadingOverlay from '../../Components/LoadingOverlay';

import styles from './styles';

const _renderCity = ({item}) => {
  return <CityItemCard item={item} />;
};

const CityListEmpty = () => {
  return (
    <View>
      <Text>No city found</Text>
    </View>
  );
};

const Home = () => {
  const d = useDispatch();
  const queryCitiesLoading = useSelector(CitySelect.queryCitiesLoading);
  const CITY_LIST = useSelector(CitySelect.cityList);

  useEffect(() => {
    d(CityActions.queryCities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (queryCitiesLoading) {
    return (
      <LoadingOverlay
        size="large"
        color="#0000ff"
        style={styles.loadingOverlay}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.flatListContainer}
        renderItem={_renderCity}
        ListEmptyComponent={CityListEmpty}
        data={CITY_LIST}
      />
    </View>
  );
};

export default Home;
