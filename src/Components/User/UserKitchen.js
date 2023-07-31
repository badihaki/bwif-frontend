import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function UserKitchen(){

    const [ user ] = useContext(UserContext);

    return(
        <div>
            <h1>Kitchen</h1>
        </div>
    )
}

export default UserKitchen;