import {useNavigation} from '@react-navigation/native';
import * as ROUTES from '../../constants/routes';

const ConversationsContainer = ({children}) => {
  const navigation = useNavigation();
  const data = ['mustafa', 'mistik'];

  const _openChat = (username) => {
    navigation.push(ROUTES.CHAT);
  };

  return (
    children &&
    children({
      handleListItemPress: _openChat,
      users: data,
    })
  );
};

export default ConversationsContainer;
