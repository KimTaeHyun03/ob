import React from 'react';
import './App.css';
import TitleBar from './page/titleBar.js';
import BottomBar from './page/bottomBar.js';
import Reward from './page/reward.js';
import Punishment from './page/punishment.js';
import Habit from './page/habit.js';
import Note from './page/note.js';


import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
  <TitleBar/>
  <Routes>
  						<Route path="/" element={<>루트</>} />
  						<Route path="/reward" element={<Reward/>} />
  <Route path="/punishment" element={<Punishment/>} />
<Route path="/habit" element={<Habit/>} />
<Route path="/note" element={<Note/>} />

  </Routes>
  <BottomBar/>
  
  
    </div>
  );
}

export default App;
