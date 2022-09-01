import React from "react"
import ReactDOM from "react-dom"
import Die from "./Die.js";
import './App.css';
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

  const [dice, setDice] = React.useState(randomNumber());
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
      const diceHeld = dice.every(die => die.isHeld)
      const firstDie = dice[0].value
      const AllDie = dice.every(die => die.value === firstDie);
      
      if (diceHeld && AllDie){
        setTenzies(true)
      }
      }, [dice])

  function getAnotherNumber(){
   return  {
      value: Math.floor(Math.random() * 6),
      isHeld: false,
      id: nanoid()
      }
  }

  function randomNumber(){
    const newArray = [];
    for(let i = 0; i < 10; i++){
    newArray.push(getAnotherNumber())
}
    return newArray
  }
  
  function holdDice(id){
  setDice(oldDice => oldDice.map(die => {
  return die.id === id ? {...die, isHeld: !die.isHeld} : die
  } ))
  // console.log(id)
  }


  const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)
  
  function newNumber(){
    if(!tenzies){
      setDice(oldDice => oldDice.map(die =>{
        return  die.isHeld ? die : getAnotherNumber()
        }))
    }else{
      setDice(randomNumber())
      setTenzies(false)
    }
   
  }

  

  return (
    <main>
    {tenzies && <Confetti />}
    <h1 className="title">Tenzies</h1>
    <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className="die-component" >
    {diceElements}
    </div>
    <button 
    className="btn"
    onClick={newNumber}
    > 
    {tenzies ? "New Game" : "Roll"}
    </button>
    </main> 
    
  );
} 

ReactDOM.render(<App />, document.getElementById("root"))
