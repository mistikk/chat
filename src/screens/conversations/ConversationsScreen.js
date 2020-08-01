import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import ConversationsContainer from './ConversationsContainer';

const ConversationsScreen = () => {
  const _renderListItem = ({item, handleListItemPress}) => {
    return (
      <TouchableOpacity
        onPress={handleListItemPress}
        style={styles.listItemWrapper}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.substring(0, 2)}</Text>
        </View>
        <Text style={styles.usernameText}>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ConversationsContainer>
      {({handleListItemPress, users}) => (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text style={styles.title}>Users</Text>
            <FlatList
              data={users}
              renderItem={(item) =>
                _renderListItem({...item, handleListItemPress})
              }
            />
          </View>
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
  avatar: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#F52958',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '600',
  },
  usernameText: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 16,
    textTransform: 'capitalize',
  },
});

export default ConversationsScreen;
