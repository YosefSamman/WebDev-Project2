import './App.css';
import { useEffect, useState } from 'react';
import Card from './Components/Card.js';
import cardback from './Components/cardback.png';
import pikachu from './Components/pika.jpg';
import charizard from './Components/charizard.jpeg';
import mewtwo from './Components/mewtwo.png';
import meowth from './Components/meowth.png';
import latios from './Components/latios.png';
import latias from './Components/latias.png';

const cardInfo = [
  {img: pikachu, state: false},
  {img: charizard, state: false},
  {img: meowth, state: false},
  {img: mewtwo, state: false},
  {img: latios, state: false},
  {img: latias, state: false}
]

function App() {

  const [cards, setCards] = useState([])

  //check if game is over
  const isGameOver = () => {
    let clear = true;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].state === false) {
        clear = false;
        return;
      }
    }
    return clear;
  }

  const [pick1, setPick1] = useState(null)
  const [pick2, setPick2] = useState(null)
  const [turns, setTurns] = useState(0)

  //shuffle the cards
  const shuffle = () => {
    const cardshuffle = [...cardInfo, ...cardInfo].sort( () => Math.random()-0.5).map( (card) =>({ ...card, id: Math.random()}))
    setPick1(null)
    setPick2(null)
    setTurns(0)
    setCards(cardshuffle)
  }

  const resetTurn = () => {
    setPick1(null)
    setPick2(null)
    setTurns(priorTurn => priorTurn+1)
  }


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h2> Turns: {turns}</h2>
        <button onClick={shuffle}>New Game</button>
      <div class="grid">
      <div>
        <div class="card">
          <img src="cardback" alt="Card 1"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 2"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 3"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 4"></img>
        </div>
      </div>
      <div>
        <div class="card">
          <img src="card.png" alt="Card 5"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 6"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 6"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 8"></img>
        </div>
      </div>
      <div>
        <div class="card">
          <img src="card.png" alt="Card 9"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 10"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 11"></img>
        </div>
        <div class="card">
          <img src="card.png" alt="Card 12"></img>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
