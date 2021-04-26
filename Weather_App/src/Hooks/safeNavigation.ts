import {useNavigation} from 'react-navigation-hooks';
// import {useSelector} from 'react-redux';

export default function useSafeNavigation() {
  const nav = useNavigation();
  const isAuthenticated = true;
  const safeNavigate = !isAuthenticated
    ? () => nav.navigate('AuthSignIn')
    : (routeName: string, params: any) => nav.navigate(routeName, params);

  return {
    ...nav,
    safeNavigate,
    isAuthenticated,
  };
}
