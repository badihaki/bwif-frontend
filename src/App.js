import './App.css';
import { useEffect, useState } from 'react';
import SignupLoginComponent from './Components/LogInSignUp';

function App() {
  
  
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    fetch("/hello").then(r=>r.json()).then(data=>console.log(data))
  })
  return(
    <div>
      <SignupLoginComponent />
    </div>
  )
}

export default App;
