import { useState } from "react";
import API from "../services/Api";

function Salary(){

    const [amount,setAmount]
    = useState("");

    const [month,setMonth]
    = useState("");


    const addSalary = async()=>{

        const salaryData = {

            amount:amount,
            month:month,

            userEmail:
            sessionStorage.getItem(
            "user"
            )

        };

        try{

            await API.post(
                "/salary/add",
                salaryData
            );

            alert(
                "Salary Added"
            );


            setAmount("");

            setMonth("");

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

            Add Salary

            </h1>


            <input
            type="number"
            placeholder="Enter Salary"

            value={amount}

            onChange={(e)=>

            setAmount(
            e.target.value)}

            />

            <br/><br/>


            <input
            type="text"
            placeholder="Enter Month"

            value={month}

            onChange={(e)=>

            setMonth(
            e.target.value)}

            />

            <br/><br/>


            <button
            onClick={addSalary}>

            Add Salary

            </button>

        </div>

    )

}

export default Salary;