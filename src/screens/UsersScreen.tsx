import React, { useState, useEffect } from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { User } from '../models';
import UserItem from '../components/UserItem';
import Auth from '@aws-amplify/auth';
import API from '@aws-amplify/api';
import * as queries from '../graphql/queries'

export default function UsersScreen() {
  const [users, setUsers] = useState<Array<User>>([])

  useEffect(() => {
    // query users
    (async () => {
      const fetchedUsers = await DataStore.query(User)

      const authUser = await Auth.currentAuthenticatedUser()
      // const dbUser = await DataStore.query(User, authUser.attributes.sub)
      const dbUser = (await API.graphql({ query: queries.getUser, variables: { id: authUser.attributes.sub } })).data.getUser
      console.log('dbUser', dbUser)

      setUsers(fetchedUsers.filter(u => u.id !== dbUser.id))
    })()

    return () => {}
  }, [])

  return (
    <View style={styles.page}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
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
