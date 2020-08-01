import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
} from 'react-native';
import get from 'lodash/get';

import ChatInput from '../../components/ChatInput';
import ChatItem from '../../components/ChatItem';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';

import ChatContainer from './ChatContainer';

const ChatScreen = () => {
  const _getChatItem = useCallback(({item}) => {
    return (
      <ChatItem
        message={item.text}
        messageId={item.key}
        connectWithTop={item.connectWithTop}
        isCurrentUser={item.isCurrentUser}
        username={get(item, 'user.name')}
      />
    );
  }, []);

  return (
    <ChatContainer>
      {({messages, goBack, sendMessage, user}) => (
        <View style={styles.container}>
          <View style={[styles.header, styles.shadow]}>
            <SafeAreaView style={styles.safeArea}>
              <Button style={styles.button} text="Close" onPress={goBack} />
              <Avatar
                username={user.name}
                width={40}
                height={40}
                style={styles.avatar}
              />
            </SafeAreaView>
          </View>
          <FlatList
            data={messages}
            renderItem={_getChatItem}
            removeClippedSubviews
            keyboardShouldPersistTaps="always"
            disableVirtualization
            maxToRenderPerBatch={50}
            initialNumToRender={50}
            keyExtractor={(item) => item.key}
            inverted
            getItemLayout={(data, index) => ({
              length: messages.length,
              offset: messages.length * index,
              index,
            })}
          />
          <ChatInput
            handleOnSendButtonPress={() => {}}
            sendMessage={sendMessage}
          />
        </View>
      )}
    </ChatContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    zIndex: 100,
    paddingBottom: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#F52958',
    alignSelf: 'center',
  },
});

export default ChatScreen;
