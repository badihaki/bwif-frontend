import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    fetch("/hello").then(r=>r.json()).then(data=>console.log(data))
  })
  
  function SignUpComponent(){

    const [newUser, setNewUser] = useState({
      email:"",
      password:"",
      password_confirmation:""
    })
  
    function handleSubmit(event){
      event.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          user: newUser
        })
      }).then(response =>{
        if(response.ok){
          response.json().then(data =>{
            console.log(data);
            setUser(data);
            setNewUser({
              email:"",
              password:"",
              password_confirmation:""
            });
          }).catch(err=>console.log(err))
        }
        else{
          response.json().then(data=>{
            console.log(data);
          })
        }
      }
    )}

    console.log(newUser)

    function handleFormChange(event){
      const userData = {...newUser};
      userData[event.target.name] = event.target.value;
      setNewUser(userData);
    }

    return(
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          Email
          <br />
          <input type='text' name='email' onChange={handleFormChange} value={newUser.email} />
          <br />
          Password
          <br />
          <input type='text' name='password' onChange={handleFormChange} value={newUser.password} />
          <br />
          Confirm Password
          <br />
          <input type='text' name='password_confirmation' onChange={handleFormChange} value={newUser.password_confirmation} />
          <br />
          <button>Submit</button>
          <br />
        </form>
      </div>
    )
  }
  function LogInComponent(){

    const [loginUser, setLogInUser] = useState({
      email:"",
      password:""
    })

    return(
      <div>
        <form>
          <h2>Log In</h2>
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
    )
  }

  function SignupLoginComponent(){


    return (
      <div>
        <SignUpComponent />
        <br />
        <LogInComponent />
      </div>
    );
}

function LogoutComponent(){
  return(
    <div>
      <button>Logout</button>
    </div>
  )
}

  return(
    <div className="App">
      { user ? <LogoutComponent /> : <SignupLoginComponent /> }
    </div>
  )
}

export default App;
