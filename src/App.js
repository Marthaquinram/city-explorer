import React from "react";
import "./App.css";
import axios from "axios";
import Main from "./Main";

class App extends React.Component {
  
  

  render() {
    console.log("this.state in App.js: ", this.state);
    return (
      <div className="App">
       <Main />
      </div>
    );
  }
}

export default App;
