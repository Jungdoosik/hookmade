import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useInput } from './useInput';




function App() {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  console.log(name.value)
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder='Name' {...name}></input>
    </div>
  );
}

export default App;
