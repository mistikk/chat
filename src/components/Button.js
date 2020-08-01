import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonView = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress} {...props}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#F52958',
    alignSelf: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
  },
});

export default ButtonView;
