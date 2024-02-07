import React from "react";
import "./parallex.scss"
const Parallex = ({type})=>{
    return (
        <div className="parllex" style={{background:type ==="services"
        ?"linear-gradient(180deg, #0c0c1d,#111132)":
        "linear-gradient(180deg, #505064,#111132)"}}>
         <h1>{type ==="services"? "What I Do ?": "What I Did ?"}</h1>
         <div className="mountains"></div>
         <div className="planet"></div>
         <div className="star"></div>
       </div>

    )
}
export default Parallex