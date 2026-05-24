import {
BrowserRouter,
Routes,
Route,
useLocation
}
from "react-router-dom";

import Navbar from "./components/Navbar";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Expense from "./pages/Expense";
import ExpenseList from "./pages/ExpenseList";
import Salary from "./pages/Salary";


function Layout(){

const location=
useLocation();

const showNavbar=

location.pathname !== "/"
&&
location.pathname !== "/login";


return(

<>

{showNavbar &&
<Navbar/>}

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

</>

)

}


function App(){

return(

<BrowserRouter>

<Layout/>

</BrowserRouter>

)

}

export default App;