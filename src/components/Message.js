import React from "react";
import moment from "moment";
import "./message.css";
import "../../node_modules/moment/locale/pl";
// const mom=moment.locale('pl');
//uzywac kiedy  komponent nie  ma state i lifecycle methods

const images = {
  facebook:
    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/31562081_10157324683366729_5005221974700457984_n.png?_nc_cat=1&_nc_ht=scontent-waw1-1.xx&oh=86868440adb0297b0af0078212c88709&oe=5CC67579",
  stack:
    "https://recruiterflow.com/blog/wp-content/uploads/2017/10/stackoverflow.png",
  google: "https://www.wprost.pl/_thumb/da/f0/e6adc87e52aec25f7b249a32ac05.png"
};
const Message = ({ username, text, createdAt }) => {
  // const txt=text.includes('http') ? <a href={text}}>{{text}}</a> : {text};

  // <a href={`/customer/${item._id}`} >{item.get('firstName')} {item.get('lastName')}</a>
  // moment.locale('pl')
  // var deMarch = moment('2017-03')
  // var crepl=deMarch.format('MMMM') // 'März'
  // moment(createdAt).calendar()
  return (
    <>
      <div className="message">
        <div className="message-username">
          <span className="message-date">{moment(createdAt).calendar()}</span>
        </div>
        <div className="avatar btn btn-floating pink lighten-1">{username}</div>
        {/* <div className="message-text">{txt}</div> */}
        <div className="message-text">
          {// (text.toString().includes('http')) ? <h1>link</h1> : {text}
          // console.log(text)
          text.includes("http") ? (
            <>
              <a href={`${text}`}>{text}</a>
            </>
          ) : (
            text
          )}
        </div>
        {/* {text.includes("facebook") ? (
          <>
            <img
              src={images.facebook}
              style={{
                width: "60x",
                height: "60px",
                marginBottom: "-60px",
                marginLeft: "5px",
                border: "1px solid black",
                marginTop: "4px"
              }}
            />
          </>
        ) : null}
        {text.includes("stack") ? (
          <>
            <img
              src={images.stack}
              style={{
                width: "60x",
                height: "60px",
                marginBottom: "-60px",
                marginLeft: "5px",
                border: "1px solid black",
                marginTop: "4px"
              }}
            />
          </>
        ) : null}
        {text.includes("google") ? (
          <>
            <img
              src={images.google}
              style={{
                width: "60x",
                height: "60px",
                marginBottom: "-60px",
                marginLeft: "5px",
                border: "1px solid black",
                marginTop: "4px"
              }}
            />
          </>
        ) : null} */}
        
      </div>
    </>
  );
};

export default Message;
