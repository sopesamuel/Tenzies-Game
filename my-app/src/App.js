import React from "react"
import ReactDOM from "react-dom"
import Main from './Main';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
