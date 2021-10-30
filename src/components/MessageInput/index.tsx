import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    console.log('message', message);
    resetFields();
  };

  const onPlusClicked = () => {
    console.warn('On plus clicked');
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };

  const resetFields = () => {
    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.root, { height: 'auto' }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={message} onChangeText={setMessage} placeholder="Send message..." />
        </View>

        <Pressable onPress={onPress} style={styles.buttonContainer}>
          {message ? <Ionicons name="send" size={18} color="white" /> : <AntDesign name="plus" size={24} color="white" />}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#dedede',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
  },
});

export default MessageInput;
