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

            if(
            response.data ===
            "Login Successful"
            ){

            sessionStorage.setItem(
            "user",
            "loggedIn"
            );

            window.location=
            "/dashboard";

            }

        }

        catch(error){

            alert(
            "Login Failed"
            );

        }

    }


    return(

        <div className="container">

            <h1>

                Login Page

            </h1>

            <input
            type="email"
            placeholder="Enter Email"

            value={email}

            onChange={(e)=>
            setEmail(
            e.target.value)}
            />

            <br/><br/>


            <input
            type="password"
            placeholder="Enter Password"

            value={password}

            onChange={(e)=>
            setPassword(
            e.target.value)}
            />

            <br/><br/>


            <button
            onClick={loginUser}>

                Login

            </button>


            <br/><br/>


            <p>

            New User ?

            <a href="/">

            Register Here

            </a>

            </p>

        </div>

    )

}

export default Login;