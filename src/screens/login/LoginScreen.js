import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import LoginContainer from './LoginContainer';

const LoginScreen = () => {
  const [username, setUsername] = useState('');

  return (
    <LoginContainer>
      {({handleLoginButton}) => (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Welcome to</Text>
              <Text style={styles.title2}>Abc Chat</Text>
              <TextInput
                value={username}
                placeholder="Please write a username"
                onChangeText={setUsername}
              />
            </View>
            <View>
              <Button
                text="Continue"
                onPress={() => handleLoginButton(username)}
              />
            </View>
          </View>
        </SafeAreaView>
      )}
    </LoginContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 40,
  },
  title2: {
    fontSize: 40,
    color: '#F52958',
    marginBottom: 40,
  },
});

export default LoginScreen;
