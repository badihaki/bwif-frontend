import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    fetch("/hello").then(r=>r.json()).then(data=>{
      console.log(data);
      setCount(data.count);
    });
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count: {count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
