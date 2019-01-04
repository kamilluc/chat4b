import React from "react";
import moment from "moment"
import './message.css'
//uzywac kiedy  komponent nie  ma state i lifecycle methods
const Message = ({ username, text, createdAt }) => {
  // const txt=text.includes('http') ? <a href={text}}>{{text}}</a> : {text};

  // <a href={`/customer/${item._id}`} >{item.get('firstName')} {item.get('lastName')}</a>

  return (
    <>
      <div className="message">
      <div className="message-username"><span className="message-date">{moment(createdAt).calendar()}</span></div>

      <div className="avatar btn btn-floating pink lighten-1">{username}</div>
        
        {/* <div className="message-text">{txt}</div> */}

        <div className="message-text">
        {
          // (text.toString().includes('http')) ? <h1>link</h1> : {text}
          // console.log(text)
          (text.includes('http')) ? <><a href={`${text}`}>{text}</a><img src='https://static.icy-veins.com/forum-files/news/41522-endgame-moves-m-the-moonkin-tank-a-tale-from-tol-dagor-280x100.jpg' /></> : text
        }
        </div>

      </div>
    </>
  );
};

export default Message;
