import {React, useState} from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import MyNavBar from "./MyNavBar";
import ColorForm from "./ColorForm";
import ColorPage from "./ColorPage";
import "./ColorFactory.css"



function ColorFactory (){
    const [colors, setColors] = useState([{name: "black", rgb: "#000000"}, {name: "pink", rgb: "#ffc0cb"}, {name: "teal", rgb: "#008080"}])

    const addColor = (color)=>{
        setColors([...colors, color])
    }
    return (
        <div className="ColorFactory">
        <BrowserRouter>

        <Routes>
            <Route exact path="colors/new" element={<ColorForm addColor={addColor}></ColorForm>} ></Route>
            <Route exact path="colors" element={<MyNavBar colors={colors}></MyNavBar>}></Route>
            <Route exact path="colors/:color" element={<ColorPage colors={colors}></ColorPage>}></Route>
        </Routes>
        </BrowserRouter>

    </div>
    )

}


export default ColorFactory