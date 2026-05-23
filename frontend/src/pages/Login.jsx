import { useState } from "react";
import API from "../services/Api";

function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const loginUser = async() =>{

        const userData = {

            email:email,
            password:password

        };

        try{

            const response = await API.post(
                "/user/login",
                userData
            );

            alert(response.data);

            if(response.data ===
               "Login Successful"){

                window.location="/dashboard";

            }

        }
        catch(error){

            alert("Login Failed");

        }

    }

    return(

        <div>

            <h1>Login Page</h1>

            <input
            type="email"
            placeholder="Enter Email"
            onChange={(e)=>
                setEmail(e.target.value)}
            />

            <br/><br/>

            <input
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>
                setPassword(e.target.value)}
            />

            <br/><br/>

            <button
            onClick={loginUser}>

                Login

            </button>

        </div>

    )

}

export default Login;