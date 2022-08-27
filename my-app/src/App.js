import React from "react"
import ReactDOM from "react-dom"
import Die from "./Die";
import './App.css';

export default function App() {

  function randomNumber(){
    const newArray = [];
for(let i = 0; i < 10; i++){
  newArray.push( {
    value: Math.floor(Math.random() * 6),
    isHeld: false
    })
  
}
    return newArray
  }
  
  const [dice, setDice] = React.useState(randomNumber());
  const diceElements = dice.map(die => <Die value={die.value}/>)
  
  function newNumber(){
   setDice(randomNumber())
  }

  return (
    <main>
    <div className="die-component" >
    {diceElements}
    </div>
    <button 
    className="btn"
    onClick={newNumber}
    >Roll</button>
    </main> 
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
