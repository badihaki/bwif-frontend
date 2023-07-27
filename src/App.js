import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [newuser, setNewUser] = useState({
    email:"",
    password:"",
    password_confirmation:""
  })

  const [loginUser, setLogInUser] = useState({
    email:"",
    password:""
  })

  const [user, setUser] = useState(null);


  return (
    <div className="App">
      <form>
        <h2>Sign Up</h2>
        Email
        <br />
        <input type='text' name='email' />
        <br />
        Password
        <br />
        <input type='text' name='password' />
        <br />
        Confirm Password
        <br />
        <input type='text' name='password_confirmation' />
        <br />
        <button>Submit</button>
        <br />
      </form>
      <br />
      <form>
        <h2>Sign In</h2>
        Email
        <br />
        <input type='text' name='email' />
        <br />
        Password
        <br />
        <input type='text' name='password' />
        <br />
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
