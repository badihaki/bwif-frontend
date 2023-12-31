import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { Link } from "react-router-dom";

function Navigation(){

    const { user, setUser } = useContext(UserContext);

    function LogoutComponent(){
      
        function handleLogOutButton(){
          fetch('/logout', {
            method: "DELETE"
          }).then(response=>{
            if(response.ok){
                response.json().then(data=>{
                    console.log(data);
                    setUser(null);
                })
            }
            else{
                response.json().then(data=>{
                    console.error(data);
                })
            }
          })
        }
      
        return(
          <div>
            <button id="logout" onClick={handleLogOutButton}>Logout</button>
          </div>
        )
      }

    function LoginComponent(){
        return(
            <Link to={"/login"} >
                <button id="login">Login / Signup</button>
            </Link>
        )
    }

    return(
        <div id='navigation'>
            <ul>
                <li className="nav-link">
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                { user? <li className='nav-link'>
                    <Link to={"/my-kitchen"}>
                        User's Kitchen
                    </Link>
                </li> : ""}
                { user? <li className='nav-link'>
                    <Link to={"/feed"}>
                        User's Feed
                    </Link>
                </li> : ""}
                <li className='nav-link'>
                    <Link to={"/search"}>
                        World Recipe Lab
                    </Link>
                </li>
            </ul>
            { user? <LogoutComponent /> :<LoginComponent /> }
        </div>
    )
}

export default Navigation;