import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Avatar from '../../components/Avatar';

import ConversationsContainer from './ConversationsContainer';

const ConversationsScreen = () => {
  const _renderListItem = ({item, handleListItemPress}) => {
    return (
      <TouchableOpacity
        onPress={handleListItemPress}
        style={styles.listItemWrapper}>
        <Avatar username={item} width={60} height={60} />
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
  usernameText: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 16,
    textTransform: 'capitalize',
  },
});

export default ConversationsScreen;
