import './App.css';
import { useEffect, useState } from 'react';
import Card from './Components/Card.js';
import cardback from './Components/cardback.jpg';
import pikachu from './Components/pika.jpg';
import charizard from './Components/charizard.jpeg';
import mewtwo from './Components/mewtwo.png';
import meowth from './Components/meowth.png';
import latios from './Components/latios.png';
import latias from './Components/latias.png';

function App() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
    <button>New Game</button>
    <div class="board">
      <div>
        <div class="card">
          <img src="card.png" alt="Card 1"></img>
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
