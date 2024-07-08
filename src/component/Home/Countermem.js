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
        <i class="fa fa-users" aria-hidden="true"></i> 5,000,000+
        <br/>
        HAPPY LEARNERS</div>
        <div className="col-4" style={{display:"flex",justifyContent:"center",alignItems:"center"}} > 2 CRORE+
            <br/>
            MONTHLY VIEWS</div>
        <div className="col-4" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <i class="fa fa-link" aria-hidden="true"></i>
        100,000+
            <br/>
            NEW MONTHLY SUBSCRIBERS</div>
      </div>
    </div>
  );
};

export default Countermem;
