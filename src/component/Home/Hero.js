import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="cccontainer">
      <div className="row">
        <div className="col-6 col1" >
            <h1 style={{fontWeight:"bold"}}>   Learn &amp; become the&nbsp;</h1>
            <span className="spanhero">Top 1% software <br/> developer</span>
            <br/>
            <br/>
            <span className="spanbutton" style={{color:"white"}}> Explore new batches > </span>
        </div>
        <div className="col-6 heroimg">
            <img  style={{width:"350px", marginRight:"5rem",marginTop:"20px"}} src="images/herosecond.png"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
