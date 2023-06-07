import logo from './logo.svg';
import './App.css';
import React from "react";
import { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setctime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setctime(time);
  };
  setInterval(updateTime,1000);
  return(
    <>
    <div class="heading">
      <h1> {ctime}</h1>
    </div>
    
    </>
  );
};

export default App;
