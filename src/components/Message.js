import React from "react";
import moment from "moment"
import './message.css'
//uzywac kiedy  komponent nie  ma state i lifecycle methods
const Message = ({ username, text, createdAt }) => {
  return (
    <>
      <div className="message">
      <div className="message-username"><span className="message-date">{moment(createdAt).calendar()}</span></div>

      <div className="avatar btn btn-floating pink lighten-1">{username}</div>
        
        <div className="message-text">{text}</div>
        
      </div>
    </>
  );
};

export default Message;
