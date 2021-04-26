import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions(
  {
    queryCities: null, // QUERY_CITIES
    queryCitiesLoading: null, // QUERY_CITIES_LOADING
    queryCitiesSuccess: ['cityList'], // QUERY_CITIES_SUCCESS
    queryCitiesFailure: ['error'], // QUERY_CITIES_FAILURE
  },
  {prefix: 'CITY_'},
);

export const CityTypes = Types;
export default Creators;
