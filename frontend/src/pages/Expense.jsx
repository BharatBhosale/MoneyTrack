import { useState } from "react";
import API from "../services/Api";

function Expense(){

    const [expenseName,setExpenseName]
    = useState("");

    const [category,setCategory]
    = useState("");

    const [amount,setAmount]
    = useState("");

    const [date,setDate]
    = useState("");


    const addExpense = async()=>{

        const expenseData={

            expenseName:expenseName,
            category:category,
            amount:amount,
            date:date

        };

        try{

            await API.post(
                "/expense/add",
                expenseData
            );

            alert(
                "Expense Added"
            );

            // Form clear

            setExpenseName("");
            setCategory("");
            setAmount("");
            setDate("");

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

                Add Expense

            </h1>


            <input
            type="text"
            placeholder="Expense Name"

            value={expenseName}

            onChange={(e)=>
            setExpenseName(
            e.target.value)}
            />

            <br/><br/>


            <select

            value={category}

            onChange={(e)=>
            setCategory(
            e.target.value)}
            >

            <option value="">

            Select Category

            </option>

            <option value="Food">

            Food

            </option>

            <option value="Travel">

            Travel

            </option>

            <option value="Shopping">

            Shopping

            </option>

            <option value="Rent">

            Rent

            </option>

            <option value="Bills">

            Bills

            </option>

            <option value="Other">

            Other

            </option>

            </select>

            <br/><br/>


            <input
            type="number"
            placeholder="Amount"

            value={amount}

            onChange={(e)=>
            setAmount(
            e.target.value)}
            />

            <br/><br/>


            <input
            type="date"

            value={date}

            onChange={(e)=>
            setDate(
            e.target.value)}
            />

            <br/><br/>


            <button
            onClick={addExpense}>

                Add Expense

            </button>

        </div>

    )

}

export default Expense;