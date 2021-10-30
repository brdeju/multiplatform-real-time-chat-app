import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
// import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from '@expo/vector-icons';
import { Message as MessageModel } from '../../models';

const blue = '#3777f0';
const grey = 'lightgrey';

const Message = ({ message: propMessage }: { message: MessageModel }) => {
  const [message, setMessage] = useState<MessageModel>(propMessage);
  const [isMe, setIsMe] = useState<boolean | null>(null);

  useEffect(() => {
    setMessage(propMessage);
  }, [propMessage]);

  useEffect(() => {
    const checkIfMe = async () => {
      setIsMe(message.user.name === 'Greg');
    };
    checkIfMe();
  }, [message]);

  return (
    <Pressable style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
      <Text style={{ color: isMe ? 'black' : 'white' }}>{message.content}</Text>

      {isMe && <Ionicons name="checkmark" size={16} color="gray" style={{ marginHorizontal: 5 }} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  messageReply: {
    backgroundColor: 'gray',
    padding: 5,
    borderRadius: 5,
  },
  leftContainer: {
    backgroundColor: blue,
    marginLeft: 10,
    marginRight: 'auto',
  },
  rightContainer: {
    backgroundColor: grey,
    marginLeft: 'auto',
    marginRight: 10,
    alignItems: 'flex-end',
  },
});

export default Message;
