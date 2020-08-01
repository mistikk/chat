import {StackActions, useNavigation} from '@react-navigation/native';
import * as ROUTES from '../../constants/routes';

const LoginContainer = ({children}) => {
  const navigation = useNavigation();

  const _login = (username) => {
    navigation.dispatch(StackActions.replace(ROUTES.CONVERSATIONS));
  };

  return (
    children &&
    children({
      handleLoginButton: _login,
    })
  );
};

export default LoginContainer;
