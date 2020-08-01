import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Avatar from './Avatar';

const ChatItemView = ({message, connectWithTop, isCurrentUser, username}) => {
  const _getGroomedStylesForMessage = () => {
    const result = [];

    if (isCurrentUser) {
      result.push(styles.currentUserItemText);
    } else {
      result.push(styles.otherUserItemText);
    }

    if (connectWithTop && isCurrentUser) {
      result.push(styles.connectTopCurrentUser);
    } else if (connectWithTop) {
      result.push(styles.connectTopOtherUser);
    }

    return result;
  };

  const _isEmoji = () => {
    const emojiCodePoint = 127000;

    return emojiCodePoint < message.codePointAt();
  };

  return (
    <View style={[styles.item, isCurrentUser && styles.currentUser]}>
      {!isCurrentUser && !connectWithTop && (
        <Avatar username={username} width={40} height={40} />
      )}
      <View style={!isCurrentUser ? styles.itemBody : styles.selfItem}>
        <View style={[styles.itemText, _getGroomedStylesForMessage()]}>
          <Text
            style={[
              styles.message,
              isCurrentUser
                ? styles.currentUserMessage
                : styles.otherUserMessage,
              _isEmoji() && styles.emojiStyle,
            ]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 7,
    paddingRight: 7,
  },
  currentUser: {
    alignSelf: 'flex-end',
  },
  itemBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selfItem: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  itemText: {
    borderRadius: 15,
    justifyContent: 'center',
    shadowOpacity: 0.2,
    shadowColor: '#5f5f5fbf',
    maxWidth: Dimensions.get('window').width / 1.4,
    minWidth: Dimensions.get('window').width / 7,
    marginLeft: 7,
    marginRight: 5,
    marginTop: 0,
    shadowOffset: {
      height: 0.3,
    },
    position: 'relative',
  },
  message: {
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    color: '#fff',
  },
  currentUserMessage: {
    color: '#FFFFFF',
  },
  otherUserMessage: {
    color: '#000000',
  },
  emojiStyle: {
    fontSize: 40,
  },
  currentUserItemText: {
    marginTop: 4,
    borderBottomRightRadius: 2,
    backgroundColor: '#F52958',
    marginBottom: 15,
  },
  otherUserItemText: {
    marginTop: 4,
    borderBottomLeftRadius: 2,
    backgroundColor: '#FEF0F3',
    marginBottom: 15,
  },
  connectTopCurrentUser: {
    borderBottomRightRadius: 15,
    marginTop: 4,
    marginBottom: 0,
  },
  connectTopOtherUser: {
    borderBottomLeftRadius: 15,
    marginLeft: 43,
    marginTop: 4,
    marginBottom: 0,
  },
});

export default ChatItemView;
