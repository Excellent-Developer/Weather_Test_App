export interface INITIAL_STATE_TYPES {
  cityList: [];
  queryCitiesLoading: boolean;
  queryCitiesErrorMessage: string;
}

export const initialState: INITIAL_STATE_TYPES = {
  cityList: [],
  queryCitiesLoading: false,
  queryCitiesErrorMessage: null,
};
