import React from "react";
import Chatkit from "@pusher/chatkit-client";
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
import RoomList from "./components/RoomList";
import NewRoomForm from "./components/NewRoomForm";
import { tokenUrl, instanceLocator } from "./config";

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "kamil",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        //TODO: dispply information about current users
        //avatary: https://ui-avatars.com/
        // console.log(this.currentUser.rooms[3].userIds)
          
        this.getRooms();
        // this.subscribeToRoom();
      })
      .catch(err => console.log("error on connecting: ", err));
  }

  getRooms() {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        });
      })
      .catch(err => console.log("error on joinableRooms: ", err));
  }
  subscribeToRoom(roomId) {
    this.setState({ messages: [] });
    this.setState({
      roomId: roomId
    });
    this.getRooms();

    this.currentUser
      .fetchMessages({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      })
      .then(messages => {
       this.setState({messages: messages})
      })
      .catch(err => console.log("error on subscribing to room: ", err));
  }
  // subscribeToRoom(roomId) {
  //   this.setState({ messages: [] });
  //   this.currentUser
  //     .subscribeToRoom({
  //       roomId: roomId,
  //       hooks: {
  //         //TODO: add user is typing notification
  //         //https://docs.pusher.com/chatkit/reference/javascript#room-subscription-hooks
  //         //  onUserStartedTyping: user => {
  //         /** render out the users */
  //         //}
  //         //as new component
  //         onNewMessage: message => {
  //           this.setState({
  //             messages: [...this.state.messages, message]
  //           });
  //         }
  //       }
  //     })
  //     .then(room => {
  //       this.setState({
  //         roomId: room.id
  //       });
  //       this.getRooms();
  //     })
  //     .catch(err => console.log("error on subscribing to room: ", err));
  // }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
    console.log(text);
    console.log(this.state.messages);

    let thismsg={
      senderId: "kamil",
text: text
    }
    const msgs2=this.state.messages;
    msgs2.push(thismsg);
    const tmpstate=this.state;
    tmpstate.messages=msgs2;
    this.setState(tmpstate);
  }

  createRoom(name) {
    this.currentUser
      .createRoom({
        name
      })
      .then(room => this.subscribeToRoom(room.id))
      .catch(err => console.log("error with createRoom: ", err));
  }

  //TODO: add button to show/hide rooms
  render() {
    return (
      <div className="app">
        <RoomList
          roomId={this.state.roomId}
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
        />
        <MessageList
          roomId={this.state.roomId}
          messages={this.state.messages}
        />
        <SendMessageForm
          disabled={!this.state.roomId}
          sendMessage={this.sendMessage}
        />
        <NewRoomForm createRoom={this.createRoom} />
      </div>
    );
  }
}

export default Chat;
