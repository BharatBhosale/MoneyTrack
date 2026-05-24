import { useEffect,useState } from "react";
import API from "../services/Api";

function ExpenseList(){

const [expenses,setExpenses]
= useState([]);

const [search,setSearch]
= useState("");


useEffect(()=>{

getExpenses();

},[]);


const getExpenses = async()=>{

const response=
await API.get(
"/expense/all"
);

setExpenses(
response.data
);

};


const deleteExpense=
async(id)=>{

await API.delete(
"/expense/delete/"+id
);

alert(
"Expense Deleted"
);

getExpenses();

};


const filteredExpenses =

expenses.filter((e)=>

e.expenseName
.toLowerCase()
.includes(
search.toLowerCase()
)

);


return(

<div className="container">

<h1>

Expense List

</h1>


<input
type="text"
placeholder="Search Expense"

value={search}

onChange={(e)=>
setSearch(
e.target.value)}
/>

<br/><br/>


{

filteredExpenses.map((e)=>(

<div
key={e.id}>

<h3>

{e.expenseName}

</h3>

<p>

Category :
{e.category}

</p>

<p>

Amount :
₹ {e.amount}

</p>

<p>

Date :
{e.date}

</p>


<button
onClick={()=>
deleteExpense(
e.id
)}>

Delete

</button>

<hr/>

</div>

))

}

</div>

)

}

export default ExpenseList;