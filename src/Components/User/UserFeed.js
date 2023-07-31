import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function UserFeed(){

    const { user } = useContext(UserContext);

    return(
        <div>
            <h1>Feed</h1>
        </div>
    )
}

export default UserFeed;