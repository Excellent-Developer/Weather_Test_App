const user = (state) => state.auth.user;
const signInLoading = (state) => state.auth.signInLoading;
const signInErrorMessage = (state) => state.auth.signInErrorMessage;

export default {
  user,
  signInLoading,
  signInErrorMessage,
};
