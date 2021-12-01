import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage />}></Route>
          <Route path='/add-exercise' element={<AddExercisePage />}></Route>
          <Route path='/edit-exercise' element={<EditExercisePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
