import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ColorForm.css"

function ColorForm({ addColor }) {
    const [formData, setFormData] = useState("")
    const navigate = useNavigate()
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        addColor(formData)
        navigate("/colors")


    }
    return (
        <div className="ColorForm">
            <form onSubmit={handleSubmit}>
                <label className="FormLabel" htmlFor="rgb">Pick a Color:</label>
                <input
                    type="color"
                    name="rgb"
                    id="rgb"
                    value={formData.rgb|| ""}
                    onChange={handleChange} />

                <label className="FormLabel" htmlFor="name">Name The Color</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name || ""}
                    onChange={handleChange} />

                <button>Add Color</button>
            </form>
        </div>
    );
}

export default ColorForm
