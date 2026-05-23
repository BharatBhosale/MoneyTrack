import { useEffect, useState } from "react";
import API from "../services/Api";

function Dashboard(){

    const [dashboard,setDashboard] = useState({

        totalSalary:0,
        totalExpense:0,
        remainingBalance:0

    });


    useEffect(()=>{

        getDashboard();

    },[]);



    const getDashboard = async()=>{

        try{

            const response =
            await API.get(
                "/dashboard/summary"
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

        <div>

            <h1>
                Budget Dashboard
            </h1>

            <h2>

                Total Salary :
                {dashboard.totalSalary}

            </h2>


            <h2>

                Total Expense :
                {dashboard.totalExpense}

            </h2>



            <h2>

                Remaining Balance :
                {dashboard.remainingBalance}

            </h2>

        </div>

    )

}

export default Dashboard;