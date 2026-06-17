import { useContext } from "react";
import userContext from "../Context/userContext";

function User(){

    const {user} = useContext(userContext)



if (!user) return <p>please Login</p>
return (

<p>{user.username}</p>
)


    

}

export default User;