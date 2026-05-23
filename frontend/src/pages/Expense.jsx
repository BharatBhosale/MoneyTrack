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

        }
        catch(error){

            alert(
                "Error"
            );

        }

    };


    return(

        <div>

            <h1>
                Add Expense
            </h1>


            <input
            type="text"
            placeholder="Expense Name"
            onChange={(e)=>
            setExpenseName(
            e.target.value)}
            />

            <br/><br/>


            <input
            type="text"
            placeholder="Category"
            onChange={(e)=>
            setCategory(
            e.target.value)}
            />

            <br/><br/>


            <input
            type="number"
            placeholder="Amount"
            onChange={(e)=>
            setAmount(
            e.target.value)}
            />

            <br/><br/>


            <input
            type="date"
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