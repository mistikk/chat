import React, {useState} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const ChatInputView = ({sendMessage}) => {
  const [text, setText] = useState('');

  const _handleOnSubmitPress = (event) => {
    setText('');

    if (sendMessage && text !== '' && text.length < 300) {
      sendMessage(text);
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ios: 0, android: 25})}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <SafeAreaView>
        <View style={styles.container}>
          <TextInput
            returnKeyType="send"
            returnKeyLabel="Send"
            onSubmitEditing={() => _handleOnSubmitPress}
            style={styles.chatInput}
            value={text}
            underlineColorAndroid="transparent"
            placeholder="Send a chat"
            placeholderTextColor="#D3D3D3"
            onChangeText={(_text) => _text.length < 300 && setText(_text)}
          />
          {text.length > 0 && (
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={_handleOnSubmitPress}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowColor: '#A8A0A4',
    margin: 10,
    elevation: 3,
    borderColor: '#000',
    borderWidth: 0.1,
  },
  chatInput: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    fontSize: 15,
    flex: 1,
    margin: 10,
    color: '#3C3938',
    fontFamily: 'Avenir',
    zIndex: 1000,
    fontWeight: '700',
  },
  buttonWrapper: {
    height: 40,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F52958',
    width: 60,
    fontSize: 18,
  },
});

export default ChatInputView;
