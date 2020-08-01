import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TextInputView = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 13,
    padding: 14,
    borderColor: 'rgba(136, 6, 37, 0.3)',
    alignSelf: 'stretch',
  },
});

export default TextInputView;
