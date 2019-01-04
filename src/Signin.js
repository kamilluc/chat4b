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
              <h1><a href="http://68.183.66.48/" target='_blank' rel="noopener noreferrer">Chat4B</a></h1>
<h4>Zaloguj się!</h4>
        <div className="row">
          <form className="col s8">
            <div className="row">
            <div className="col s9">

              <div className="input-field col s12">
                <input id="icon_prefix" type="text" className="validate" placeholder="Kamil"/>
                <label htmlFor="icon_prefix">Użytkownik</label>
              </div>
              <div className="input-field col s12">
                <input id="icon_telephone" type="password" className="validate" />
                <label htmlFor="icon_telephone">Hasło</label>
              </div>
          
            <div className="col 12">
            {/* <button onClick={this.props.changeRoute}> */}
              <a className="waves-effect waves-light btn blue center" style={{width: '150px'}} onClick={(e)=>this.props.changeRoute(this.state.user, this.state.password)}>
                <strong>Start</strong>
              </a>
              {/* </button> */}
            </div>
            </div></div>
          </form>
          <div className="logos">
          <div className="col s4">
          <div className="row">
          <a href="http://68.183.66.48" target='_blank' rel="noopener noreferrer">
          <img src="http://68.183.66.48/wp-content/uploads/2018/10/logo-2.png" alt="logo"/>
          </a>
          </div>
          <a href="http://68.183.66.48" target='_blank' rel="noopener noreferrer">
          <h6>Sprawdź Chat4B</h6>
          </a>
          </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Signin;
