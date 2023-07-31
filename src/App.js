import './App.css';
import { useEffect } from 'react';
import Navigation from './Components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
    
  useEffect(()=>{
    fetch("/hello").then(r=>r.json()).then(data=>console.log(data))
  })
  return(
    <div id='app'>
      <Navigation />
      <div id='content'>
        <Outlet />
      </div>
      <div></div>
      
    </div>
  )
}

export default App;
