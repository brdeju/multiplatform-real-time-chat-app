import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

import { ChatRoomScreenRouteProp } from '../../types';
import { Message as MessageModel } from '../models';

import CHAT from '../../assets/dummy-data/Chat';

export default function ChatRoomScreen() {
  const route = useRoute<ChatRoomScreenRouteProp>();
  const chatId = route.params.id;
  const { name } = route.params;
  const chat = CHAT;
  const messages = chat.messages as Array<MessageModel>;

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={messages}
        renderItem={({ item }: { item: MessageModel }) => (
          <Message message={item} />
        )}
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
