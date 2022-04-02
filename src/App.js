import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useInput } from './useInput';
import { useTab } from './useTab';
import { useTitle } from './useTitle';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  })
  return element;
}
function App() {
  const sayHello = () => console.log("Say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      <h2 ref={title}>bye</h2>
    </div>
  );
}

export default App;