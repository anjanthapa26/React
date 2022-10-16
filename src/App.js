import './App.css';
import React from 'react';
import UseReducer from './components/UseReducer/UseReducer';
import UseState from './components/UseState/UseState';
import ObjectUseState from './components/immutableState/ObjectUseState';
import ArrayUseState from './components/immutableState/ArrayUseState';
import Parent from './components/parenChild/Parent';
import ParentOne from './components/Optimization/ParentOne';
import ChildOne from './components/Optimization/ChildOne';
import GrandParent from './components/Optimization/GrandParent';

function App() {
  return (
    <>
    <GrandParent />
    </>
  );
}

export default App;
