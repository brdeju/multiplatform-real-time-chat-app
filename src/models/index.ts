type User = {
  name: string;
  id: string;
  status: string;
  imageUri?: string;
}
type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: User;
}
type ChatRoom = {
  id: string;
  users: Array<User>;
  lastMessage: Message;
  newMessages: number;
}
type ChatRoomUser = {

}

export {
  Message,
  ChatRoom,
  ChatRoomUser,
  User,
};
