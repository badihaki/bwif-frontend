import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { Link } from "react-router-dom";

function Navigation(){

    const { user, setUser } = useContext(UserContext);

    function LogoutComponent(){
      
        function handleLogOutButton(){
          fetch('/logout', {
            method: "DELETE"
          }).then(setUser(null))
        }
      
        return(
          <div>
            <button id="logout" onClick={handleLogOutButton}>Logout</button>
          </div>
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
                <li className='nav-link'>
                    <Link to={"/my-kitchen"}>
                        User's Kitchen
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to={"/feed"}>
                        User's Feed
                    </Link>
                </li>
                <li className='nav-link'>
                    <Link to={"/search"}>
                        World Recipe Lab
                    </Link>
                </li>
            </ul>
            <LogoutComponent />
        </div>
    )
}

export default Navigation;