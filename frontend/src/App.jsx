import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import ExpenseList from "./pages/ExpenseList";
import Salary from "./pages/Salary";

function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Register/>}
/>

<Route
path="/login"
element={<Login/>}
/>

<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/expense"
element={<Expense/>}
/>

<Route
path="/expense-list"
element={<ExpenseList/>}
/>

<Route
path="/salary"
element={<Salary/>}
/>  

</Routes>

</BrowserRouter>

)

}

export default App;