import { useEffect } from "react"
import { useParams,NavLink } from "react-router-dom"
import "./ColorPage.css"

function ColorPage ({colors}){
    const {color}=useParams()
    const RGB = colors.filter((el)=>(el.name===color))[0].rgb
    
    useEffect (() => {
        document.body.style.backgroundColor = `${RGB}`;
    })
    
   
    return (
        <div className="ColorPage">
           <h1>{`This is ${color.toUpperCase()}`}</h1> 
           <NavLink exact to = "/colors"><h1>GO BACK</h1></NavLink>
        </div>
    )

}

export default ColorPage