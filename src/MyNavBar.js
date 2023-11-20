import "./MyNavBar.css"
import { NavLink } from "react-router-dom"

function MyNavBar ({colors}) {
    document.body.style.backgroundColor = "white";
    return (
        
        <nav className="MyNavBar">
            <h1>Available Colors:</h1>
            {colors.map((el,idx)=>(
            <NavLink exact to={`/colors/${el.name}`} key={`N${idx}`}>
             {el.name}           
            </NavLink>
            ))}
            <NavLink exact to="/colors/new" className="Add">Add Color!</NavLink>
        </nav>

    )
}
export default MyNavBar