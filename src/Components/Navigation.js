import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";

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
                <li className='nav-link'>
                    User's Kitchen
                </li>
                <li className='nav-link'>
                    User's Feed
                </li>
                <li className='nav-link'>
                    World Recipe Lab
                </li>
            </ul>
            <LogoutComponent />
        </div>
    )
}

export default Navigation;