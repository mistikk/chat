import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AvatarView = ({username, width = 50, height = 50, style}) => {
  return (
    <View style={[styles.avatar, {width, height}, style]}>
      <Text style={styles.avatarText}>{username.substring(0, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#F52958',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default AvatarView;
