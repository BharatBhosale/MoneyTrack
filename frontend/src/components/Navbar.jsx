import { Link } from "react-router-dom";

function Navbar(){

const logout=()=>{

sessionStorage.removeItem(
"user"
);

window.location="/login";

}

return(

<div className="navbar">

<div className="nav-left">

<Link to="/dashboard">

Dashboard

</Link>

<Link to="/salary">

Add Salary

</Link>

<Link to="/expense">

Add Expense

</Link>

<Link to="/expense-list">

Expense List

</Link>

</div>


<div className="nav-right">

<button
className="logout-btn"
onClick={logout}>

Logout

</button>

</div>

</div>

)

}

export default Navbar;