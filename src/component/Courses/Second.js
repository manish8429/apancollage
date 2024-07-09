import React from "react";
import "./Second.css";

const Second = () => {
  return (
    <div className="maindiv">
  
        <strong  style={{ marginTop:"1rem", fontSize:"17px", fontWeight:"17px"}} >FULL STACK WEB DEVELOPMENT</strong>
    
      <div  style={{ marginTop:"2rem", fontSize:"17px"}}>
       <strong >
        JOIN DELTA 4.0 2024 <i class="fa-solid fa-chevron-right"></i>{" "}
        <i class="fa-solid fa-chevron-right"></i>
        </strong>
      </div>
    
      <div style={{ marginTop:"2.3rem", width:"5rem"}}>
        <button style={{padding:".6rem", width:"9rem", borderRadius:"17px", fontWeight:"bolder", fontSize:"1rem", backgroundColor:"#323951", color:"white"}} >Join now &rsaquo; &rsaquo; </button>
      </div>
    </div>
  );
};

export default Second;
