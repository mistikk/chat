import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import UserListModal from '../../components/UserListModal';

import ConversationsContainer from './ConversationsContainer';

const ConversationsScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const _renderListItem = useCallback(({item, handleMessageListItemPress}) => {
    return (
      <TouchableOpacity
        onPress={() => handleMessageListItemPress(item)}
        style={styles.listItemWrapper}>
        <Avatar username={item.name} width={60} height={60} />
        <Text style={styles.usernameText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }, []);

  const _handleUserListItemPress = (handleUserListItemPress, item) => {
    setIsModalOpen(false);
    handleUserListItemPress(item);
  };

  return (
    <ConversationsContainer>
      {({
        handleMessageListItemPress,
        handleUserListItemPress,
        conversations,
        users,
      }) => (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Users</Text>
              <Button
                style={styles.button}
                text="New"
                onPress={() => setIsModalOpen(true)}
              />
            </View>
            <FlatList
              data={conversations}
              keyExtractor={(item) => item.uid}
              renderItem={(item) =>
                _renderListItem({...item, handleMessageListItemPress})
              }
            />
          </View>
          <UserListModal
            visible={isModalOpen}
            users={users}
            handleListItemPress={(item) =>
              _handleUserListItemPress(handleUserListItemPress, item)
            }
            closeModal={() => setIsModalOpen(false)}
          />
        </SafeAreaView>
      )}
    </ConversationsContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 34,
    color: '#F52958',
  },
  listItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  usernameText: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 16,
    textTransform: 'capitalize',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#F52958',
    alignSelf: 'center',
  },
});

export default ConversationsScreen;
