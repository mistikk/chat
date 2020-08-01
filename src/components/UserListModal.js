import React, {useCallback} from 'react';
import {
  StyleSheet,
  Text,
  Modal,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Button from './Button';
import Avatar from './Avatar';

const UserListModalView = ({
  visible,
  users,
  handleListItemPress,
  closeModal,
}) => {
  const _renderListItem = useCallback(({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleListItemPress(item)}
        style={styles.listItemWrapper}>
        <Avatar username={item.name} width={60} height={60} />
        <Text style={styles.usernameText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={visible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Users</Text>
          <Button style={styles.button} text="Close" onPress={closeModal} />
        </View>
        <FlatList
          data={users}
          keyExtractor={(item) => item.uid}
          renderItem={_renderListItem}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    color: '#F52958',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#F52958',
    alignSelf: 'center',
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
});

export default UserListModalView;
