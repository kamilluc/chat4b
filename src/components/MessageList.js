import React from "react";
import ReactDOM from "react-dom";

import Message from "./Message";
class MessageList extends React.Component {
  //before component has been updated

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    if (!this.props.roomId) {
      return (
        <div className="message-list">
          <div className="join-room">&larr; Dołącz do grupy!</div>
        </div>
      );
    }

    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <Message
              key={index}
              username={message.senderId}
              text={message.text}
              createdAt={message.createdAt}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
