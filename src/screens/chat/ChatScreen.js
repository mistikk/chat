import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Text,
} from 'react-native';

import ChatInput from '../../components/ChatInput';
import ChatItem from '../../components/ChatItem';
import Avatar from '../../components/Avatar';

import ChatContainer from './ChatContainer';

const ChatScreen = () => {
  const _getChatItem = ({item}) => {
    return (
      <ChatItem
        message={item.text}
        senderId={item.user.uid}
        messageId={item.key}
        connectWithTop={item.connectWithTop}
        isCurrentUser={item.isCurrentUser}
      />
    );
  };

  return (
    <ChatContainer>
      {({messages, goBack}) => (
        <View style={styles.container}>
          <View style={[styles.header, styles.shadow]}>
            <SafeAreaView style={styles.safeArea}>
              <TouchableOpacity onPress={goBack}>
                <Text>x</Text>
              </TouchableOpacity>
              <Avatar
                username="mustafa"
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
            // sendMessage={_sendMessage}
          />
        </View>
      )}
    </ChatContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    zIndex: 100,
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
});

export default ChatScreen;
