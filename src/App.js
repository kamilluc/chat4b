import React,{Component} from "react";
import Chat from './Chat';
import Signin from './Signin';

// const initialState = {
//   user: null,
//   password: null,
//   isSignedIn: false,
//   route: "signin",
// }

class App extends Component {
    constructor() {
      super();
      this.state = {
        user: null,
        password: null,
        isSignedIn: false,
        // route: "signin",
        route: "signin"
      }
    }

    changeRoute=()=>{
      let tempState=this.state;
      tempState.route="home";
this.setState(tempState);
    }

    onRouteChange = route => {
      if (route === "home") {
        this.setState({ isSignedIn: true });
      }
      this.setState({ route: route });
    };
  
    render() {
      const { route} = this.state;
      return (
        <div>
        
          {route === "home" ? (
            <div>
              <Chat />

            </div>
          ) : (
            <div>
            <Signin changeRoute={this.changeRoute}/>
            </div>
          ) 
          }
        </div>
      );
    } 


}

export default App;