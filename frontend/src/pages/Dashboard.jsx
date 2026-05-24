import { useEffect, useState } from "react";
import API from "../services/Api";

function Dashboard(){

    const [dashboard,setDashboard] = useState({

        totalSalary:0,
        totalExpense:0,
        remainingBalance:0

    });

    if(
    !sessionStorage.getItem(
    "user"
    )
    ){

    window.location="/login";

    }

    useEffect(()=>{

        getDashboard();

    },[]);



    const getDashboard = async()=>{

        try{

            const response =
            await API.get(
                "/dashboard/summary/"
                +
                sessionStorage.getItem(
                "user"
                )
            );

            setDashboard(
                response.data
            );

        }
        catch(error){

            console.log(error);

        }

    }



    return(

    <div className="dashboard">

    <h1>

    Budget Dashboard

    </h1>

    <div className="card">

    <h2>

    Total Salary

    </h2>

    <h3>

    ₹ {dashboard.totalSalary}

    </h3>

    </div>


    <div className="card">

    <h2>

    Total Expense

    </h2>

    <h3>

    ₹ {dashboard.totalExpense}

    </h3>

    </div>


    <div className="card">

    <h2>

    Remaining Balance

    </h2>

    <h3>

    ₹ {dashboard.remainingBalance}

    </h3>

    </div>

    </div>

    )

}

export default Dashboard;