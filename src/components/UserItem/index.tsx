import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DataStore } from '@aws-amplify/datastore';
import Auth from '@aws-amplify/auth';
import UserAvatar from 'react-native-user-avatar';
import { User, ChatRoom, ChatRoomUser } from '../../models';
import styles from './styles';
import API from '@aws-amplify/api';
import * as queries from '../../graphql/queries'

export default function UserItem({ user }: { user: User }) {
  const navigation = useNavigation();

  const onPress = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser()
      // const dbUser = await DataStore.query(User, authUser.attributes.sub)

      console.log(authUser.id)
      // const dbUser = (await API.graphql({ query: queries.getUser, variables: { id: authUser.id } })).data.getUser

      // const chatrooms = (await API.graphql({ query: queries.listChatRooms })).data.listChatRooms.items

      // console.log(dbUser, user, chatrooms[0].ChatRoomUsers.items)

      // TODO: if chatroom between users exists then open it
      // DataStore.query(ChatRoom)
      // .then(cr => console.log(cr))
      // const currentUserChatRooms: Array<ChatRoom> = (await DataStore.query(ChatRoomUser))
      //   .filter(cru => cru.user.id === dbUser.id)
      //   .map(cr => cr.chatroom.id)

      // const clickedUserChatRooms: Array<ChatRoom> = (await DataStore.query(ChatRoomUser))
      //   .filter(cru => cru.user.id === user.id)
      //   .map(cr => cr.chatroom.id)

      // currentUserChatRooms

      // console.log(currentUserChatRooms, clickedUserChatRooms)

      // if (exists) {
      //   console.log('chatroom exists', exists.id)
      //   navigation.navigate('ChatRoom', { id: exists.id, name: user.name })
      //   return
      // }

      // // create new chatroom
      // const chatroom = await DataStore.save(new ChatRoom({ newMessages: 0 }))

      // if (!dbUser) {
      //   throw Error('authenticated user not found')
      // }

      // await DataStore.save(new ChatRoomUser({ chatroom, user: dbUser }))
      // await DataStore.save(new ChatRoomUser({ chatroom, user }))

      // navigation.navigate('ChatRoom', { id: chatroom.id, name: user.name })
    } catch (error) {
      console.log('chatroom create error', error)
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <UserAvatar size={50} name={user?.name} src={user?.imageUri} style={styles.image} />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user?.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}
