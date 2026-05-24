import { useState } from "react";
import API from "../services/Api";

function Register(){

    const [name,setName]
    = useState("");

    const [email,setEmail]
    = useState("");

    const [password,setPassword]
    = useState("");


    const registerUser =
    async()=>{

        const userData={

            name:name,
            email:email,
            password:password

        };


        try{

            const response =
            await API.post(
            "/user/register",
            userData
            );

            alert(
            "Registration Successful"
            );

            console.log(
            response.data
            );


            setName("");

            setEmail("");

            setPassword("");

        }

        catch(error){

            alert(
            "Error"
            );

        }

    };


    return(

        <div className="container">

            <h1>

                Register Page

            </h1>


            <input
            type="text"
            placeholder="Enter Name"

            value={name}

            onChange={(e)=>
            setName(
            e.target.value)}
            />

            <br/><br/>


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
            onClick={registerUser}>

                Register

            </button>


            <br/><br/>


            <p>

            Already have account ?

            <a href="/login">

            Login Here

            </a>

            </p>

        </div>

    )

}

export default Register;