import './App.css';
import { useEffect, useState } from 'react';
import Navigation from './Components/Navigation';
import Home from './Components/Home';

function App() {
    
  useEffect(()=>{
    fetch("/hello").then(r=>r.json()).then(data=>console.log(data))
  })
  return(
    <div id='app'>
      <Navigation />
      <div id='content'>
        <Home />
      </div>
      <div></div>
      
    </div>
  )
}

export default App;
