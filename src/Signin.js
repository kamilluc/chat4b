import React, { Component } from "react";
import './Signin.css'
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      password: null
    };
  }

  render() {
    return (
      <div>
              <div className="container">
              <h1><a href="http://68.183.66.48/">Chat4B</a></h1>
<h3>Please Sign In</h3>
        <div className="row">
          <form className="col s8">
            <div className="row">
            <div className="col s9">

              <div className="input-field col s12">
                <input id="icon_prefix" type="text" className="validate" placeholder="Kamil"/>
                <label htmlFor="icon_prefix">Username</label>
              </div>
              <div className="input-field col s12">
                <input id="icon_telephone" type="password" className="validate" />
                <label htmlFor="icon_telephone">Password</label>
              </div>
          
            <div className="col 12">
            {/* <button onClick={this.props.changeRoute}> */}
              <a className="waves-effect waves-light btn center" onClick={(e)=>this.props.changeRoute(this.state.user, this.state.password)}>
                Login
              </a>
              {/* </button> */}
            </div>
            </div></div>
          </form>
          <div className="col s4">
          <img src="http://68.183.66.48/wp-content/uploads/2018/10/logo-2.png" />
          </div>
        </div>
        </div>






            

      </div>
    );
  }
}

export default Signin;
