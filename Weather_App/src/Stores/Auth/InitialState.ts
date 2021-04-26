export interface INITIAL_STATE_TYPES {
  user: {};
  signInLoading: boolean;
  signInErrorMessage: string;
}

export const initialState: INITIAL_STATE_TYPES = {
  user: {},
  signInLoading: false,
  signInErrorMessage: null,
};
