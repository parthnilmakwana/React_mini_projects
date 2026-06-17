    import { useContext, useState } from "react";
import userContext from "../Context/userContext";
import { useNavigate } from "react-router";


    function Login(){
const Navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(userContext)

    const handleSubmit= (e) =>{
        e.preventDefault()
        setUser({username, password})
        Navigate("/User")
    }

    return(
    <>
    <h1>Login</h1>
    <input type="text"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    placeholder="username"
    />
    <input type="text"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder="password"
    />
    <button onClick={handleSubmit}>Submit</button>

    </>

    )
    }

    export default Login;