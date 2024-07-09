import React from "react";
import "./Countermem.css";

const Countermem = () => {
  return (
    <div className="ccontainer">
      
      <div className="row">
      <div style={{ textAlign: "center", fontSize: "1.3rem",fontWeight:"bolder" , marginTop:"2rem"}}>
        INDIA'S MOST LOVED CODING COMMUNITY ❤️
      </div>
        <div className="col-4" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
     5,000,000+
        <br/>
        HAPPY LEARNERS</div>
        <div className="col-4" style={{display:"flex",justifyContent:"center",alignItems:"center"}} > 2 CRORE+
            <br/>
            MONTHLY VIEWS</div>
        <div className="col-4" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
       
        100,000+
            <br/>
            NEW MONTHLY SUBSCRIBERS</div>
      </div>
    </div>
  );
};

export default Countermem;
