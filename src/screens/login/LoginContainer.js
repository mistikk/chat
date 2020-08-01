import {useEffect, useCallback} from 'react';
import {Alert} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

import * as ROUTES from '../../constants/routes';

const LoginContainer = ({children}) => {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('current_user').then((result) => {
      if (result) {
        navigation.dispatch(
          StackActions.replace(ROUTES.CONVERSATIONS, {
            user: JSON.parse(result),
          }),
        );
      }
    });
  }, [navigation]);

  const _login = useCallback(
    (username) => {
      if (username.length > 2) {
        firestore()
          .collection('Users')
          .add({name: username})
          .then((res) => {
            const userObj = {uid: res.id, name: username};
            const jsonValue = JSON.stringify(userObj);
            AsyncStorage.setItem('current_user', jsonValue);
            navigation.dispatch(
              StackActions.replace(ROUTES.CONVERSATIONS, {
                user: userObj,
              }),
            );
          });
      } else {
        Alert.alert(
          'Warning',
          'Enter a username of at least 2 characters in length!',
        );
      }
    },
    [navigation],
  );

  return (
    children &&
    children({
      handleLoginButton: _login,
    })
  );
};

export default LoginContainer;
