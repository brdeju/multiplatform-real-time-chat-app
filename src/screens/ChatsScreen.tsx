import React from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import { ChatRoom } from '../src/models';
import ChatRoomItem from '../components/ChatRoomItem';
import CHAT_ROOMS from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  const chatRooms: Array<ChatRoom> = CHAT_ROOMS as Array<ChatRoom>;

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
