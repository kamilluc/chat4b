import React from "react";

const initialState = {
  user: null,
  password: null,
  isAuthorized: false,
  route: "signin",
}

class Signin extends React.Component {
    constructor() {
      super();
      this.state = initialState;
    }

    render(){
      return(<><h1>Hello</h1></>)
    }


}

export default Signin;