import {useState, useCallback} from 'react';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import * as ROUTES from '../../constants/routes';

const ConversationsContainer = ({children}) => {
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  const {user} = route.params;

  useFocusEffect(
    useCallback(() => {
      const _users = [];
      firestore()
        .collection('Users')
        .doc(user.uid)
        .get()
        .then((result) => {
          const _data = result.data();
          setConversations(_data.chatUsers || []);
        });

      firestore()
        .collection('Users')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((documentSnapshot) => {
            if (user.uid !== documentSnapshot.id) {
              _users.push({
                uid: documentSnapshot.id,
                ...documentSnapshot.data(),
              });
            }
          });
          setUsers(_users);
        });
    }, [user.uid]),
  );

  const _openChat = useCallback(
    (_user) => {
      navigation.push(ROUTES.CHAT, {
        user: _user,
        currentUser: user,
      });
    },
    [navigation, user],
  );

  const _createConversation = useCallback(
    (_user) => {
      const chatUserPromise = firestore()
        .collection('Users')
        .doc(_user.uid)
        .update({
          chatUsers: firestore.FieldValue.arrayUnion(user),
        });
      const currentUserPromise = firestore()
        .collection('Users')
        .doc(user.uid)
        .update({
          chatUsers: firestore.FieldValue.arrayUnion(_user),
        });

      Promise.all([chatUserPromise, currentUserPromise]).then((result) => {
        navigation.push(ROUTES.CHAT, {
          user: _user,
          currentUser: user,
        });
      });
    },
    [navigation, user],
  );

  return (
    children &&
    children({
      handleMessageListItemPress: _openChat,
      handleUserListItemPress: _createConversation,
      conversations,
      users,
    })
  );
};

export default ConversationsContainer;
