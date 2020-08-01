import {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import get from 'lodash/get';

const ChatContainer = ({children}) => {
  const [messages, setMessages] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  const {user, currentUser} = route.params;
  const userIds = [user.uid, currentUser.uid];
  userIds.sort();

  const roomId = `${userIds[0]}-${userIds[1]}`;

  useEffect(() => {
    const subscriber = firestore()
      .collection('Chat')
      .doc(roomId)
      .collection('Messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const _messages = [];
        let prevItem = {};

        querySnapshot.forEach((documentSnapshot) => {
          const _data = documentSnapshot.data();
          _messages.push({
            ..._data,
            key: documentSnapshot.id,
            isCurrentUser: get(_data, 'user.uid') === currentUser.uid,
            connectWithTop:
              get(prevItem, 'user.uid') === get(_data, 'user.uid'),
          });

          prevItem = _data;
        });

        setMessages(_messages);
      });

    return () => {
      subscriber();
    };
  }, [user.uid, currentUser.uid, roomId]);

  const _goBack = () => {
    navigation.goBack();
  };

  const _sendMessage = (text) => {
    const message = {
      text,
      createdAt: new Date(),
      user: currentUser,
    };

    firestore()
      .collection('Chat')
      .doc(roomId)
      .collection('Messages')
      .add(message);
  };

  return (
    children &&
    children({
      goBack: _goBack,
      messages: messages,
      sendMessage: _sendMessage,
      user,
    })
  );
};

export default ChatContainer;
