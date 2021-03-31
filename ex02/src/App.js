import React, { Component } from "react";
class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };
  getMyStorage = () => {
    let myCookieData = document.cookie.split("=");
    let myLocalStorageData = localStorage.getItem("Paragon");
    let mySessionStorageData = sessionStorage.getItem("frontend");
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Set Storage</button>
        <button onClick={this.getMyStorage}>Get Storage</button>
      </div>
    );
  }
}
export default App