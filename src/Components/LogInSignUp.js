import React, { useContext, useState } from "react";
import { UserContext } from "./Context/UserContext";
import { Link } from "react-router-dom";

function SignupLoginComponent(){

    const { user, setUser } = useContext(UserContext);

    function SignUpComponent(){

        const [newUser, setNewUser] = useState({
          email:"",
          profile_name:"",
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
                setUser(data.data);
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
              Account Name
              <br />
              <input type='text' name='profille_name' onChange={handleFormChange} value={newUser.profile_name} />
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
    
        function handleSubmit(event){
          event.preventDefault();
    
          fetch('/login', {
            method: "POST",
            headers: {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({user:loginUser})
          }).then(response=>{
            if(response.ok){
              response.json().then(data=>{
                console.log(data);
                setUser(data.data);
              })
            }
            else{
              response.json().then(data=>console.log(data));
            }
          })
        }
    
        function handleFormChange(event){
          const updatedUser = {...loginUser};
          updatedUser[event.target.name] = event.target.value;
          setLogInUser(updatedUser);
        }
    
        return(
          <div>
            <form onSubmit={handleSubmit}>
              <h2>Log In</h2>
              Email
              <br />
              <input type='text' name='email' value={loginUser.email} onChange={handleFormChange} />
              <br />
              Password
              <br />
              <input type='text' name='password' value={loginUser.password} onChange={handleFormChange} />
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

    function RedirectComponent(){
      return(
        <div>
          <h3>Logged in successfully.</h3>
          <p>Please go back to <Link to={"/"}>home</Link></p>
        </div>
      )
    }
    
      return(
        <div id="main-content">
          { user? <RedirectComponent /> : <SignupLoginComponent />}
        </div>
      )

      // end
}

export default SignupLoginComponent;