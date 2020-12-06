import React from 'react';
import './App.sass';
import { GameHandler } from './classes/GameHandler';
import { Canvas } from './components/canvas/Canvas';

function App() {
  return (
    <div className="App">
      <GameHandler/>
      <Canvas/>
    </div>
  );
}

export default App;
