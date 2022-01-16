import React, { useState } from 'react';
import './App.css';
import Chessboard from "chessboardjsx";

const Chess = require('chess.js');
const chess = new Chess();

function App() {
  return (
    <div className="flex-centre">
      <h1>Two player Chess</h1>
      <Chessboard
        width={400}
        position="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
      />
    </div>
  );
}

export default App;
