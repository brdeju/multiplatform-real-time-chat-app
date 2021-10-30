import React from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import UserAvatar from 'react-native-user-avatar';
import moment from 'moment';
import { User, Message, ChatRoom } from '../../src/models';
import styles from './styles';

export default function ChatRoomItem({ chatRoom }: { chatRoom: ChatRoom }) {
  const navigation = useNavigation();
  const user = chatRoom.users.find((u) => u.name !== 'Greg'); // the display user
  const { lastMessage } = chatRoom;

  const onPress = () => {
    navigation.navigate('ChatRoom', {
      id: chatRoom.id,
      name: user?.name || '',
    });
  };

  const time = moment(lastMessage?.createdAt).from(moment());

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <UserAvatar size={50} name={user?.name} src={user?.imageUri} style={styles.image} />

      {!!chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {lastMessage?.content}
        </Text>
      </View>
    </Pressable>
  );
}
