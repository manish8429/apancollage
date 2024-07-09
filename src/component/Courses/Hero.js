import React from "react";
import "./Hero.css";

const Cou = () => {
  return (
    <div>
      <div className="row" style={{ backgroundColor:"#f1f4fb", height:"40rem" }}>
        <div
          className="col-6 test1"
          style={{
            marginTop: "8rem",
            justifyContent: "center",
            fontSize: "50px",
            marginLeft: "5rem",
          }}
        >
          <strong> <strong style={{ color:"#6674cc"}}>Learn </strong>Website <br/> Development in 4.5 <br/> Months!</strong>
          <div>
            <p className="text-muted" style={{fontSize:"25px", marginTop:"10px"}}>Delta 2024 - for Beginners & Pro Developers</p>
          </div>
          <div className="spanbutt">
            <button style={{padding:"10px", borderRadius:"0.5rem",backgroundColor:"#6674cc", fontWeight:"700", color:"white",borderColor:"#6674cc"}}> Join New Delta 4.0  &rsaquo; &rsaquo;</button>
          </div>
        </div>
        <div className="col-6" style={{ width:"35rem",marginTop:"3.7rem", backgroundColor:"#f1f4fb"}}>
          <div>
            <img style={{width:"30rem"}} src="images/laptop.jpg"/>
            <source src="images/video1.ts" type="video/mp4"  style={{width:"30rem"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cou;
