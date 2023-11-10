import './App.css';
import { useContext, useEffect } from 'react';
import Navigation from './Components/Navigation';
import { Outlet } from 'react-router-dom';
import { UserContext } from './Components/Context/UserContext';

function App() {
  const { user, setUser } = useContext(UserContext);
    
  useEffect(()=>{
    fetch("/login").then(response=>{
      if(response.ok){
        console.log('we have a user');
        return response.json().then(
          data=>{
            console.log(data);
            console.log("^^ returned data");
            if(data.id){
              setUser(data);
            }
            else{
              console.error("no real user, even if we're getting a response");
              console.error("check response data");
            }
          }
        )
      }
      else{
        console.log(`error`);
      }
    })
  }, [])
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
