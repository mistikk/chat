import {useNavigation} from '@react-navigation/native';
import * as ROUTES from '../../constants/routes';

const ChatContainer = ({children}) => {
  const navigation = useNavigation();
  const messages = [
    {
      text: 'test',
      senderId: 2,
      key: '10',
      connectWithTop: false,
      isCurrentUser: true,
      user: {uid: 5},
    },
    {
      text: 'test',
      senderId: 2,
      key: '11',
      connectWithTop: true,
      isCurrentUser: true,
      user: {uid: 5},
    },
    {
      text: 'test',
      senderId: 2,
      key: '12',
      connectWithTop: false,
      isCurrentUser: false,
      user: {uid: 5},
    },
    {
      text: 'test',
      senderId: 2,
      key: '13',
      connectWithTop: false,
      isCurrentUser: true,
      user: {uid: 5},
    },
  ];

  const _goBack = (username) => {
    navigation.goBack();
  };

  return (
    children &&
    children({
      goBack: _goBack,
      messages: messages,
    })
  );
};

export default ChatContainer;
