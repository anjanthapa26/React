import './App.css';
import React from 'react';
import UseReducer from './components/UseReducer/UseReducer';
import UseState from './components/UseState/UseState';
import ObjectUseState from './components/immutableState/ObjectUseState';
import ArrayUseState from './components/immutableState/ArrayUseState';
import Parent from './components/parenChild/Parent';

function App() {
  return (
    <>
    <Parent />
    </>
  );
}

export default App;
