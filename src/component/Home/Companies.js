import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <> 
    <div style={{ height:"15rem", marginTop:"2rem", padding:"1rem"}}>
    <div style={{ marginTop:"10px"}}>
      <div className="cxcontainer">
        <div className="">
          <img style={{ width: "100px" }} src="images/amazone.png" alt="Logo" />
        </div>
        <div>
          <img style={{ width: "100px" }} src="images/google.png" alt="Logo" />
        </div>
        <div>
          <img
            style={{ width: "100px" }}
            src="images/microsoft.png"
            alt="Logo"
          />
        </div>
        <div>
          <img style={{ width: "100px" }} src="images/goldman.png" alt="Logo" />
        </div>
        <div>
          <img style={{ width: "100px" }} src="images/paypal.png" alt="Logo" />
        </div>
        <div>
          <img style={{ width: "100px" }} src="images/samsung.png" alt="Logo" />
        </div>
      </div>
      </div>
      {/*  Second Img */}
      <div className='cxcontainer'>
  <div className='' >
    <img  style={{width:"100px"}}src='images/salesfor.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Netapp.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Hitachi.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Jpmorgan.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Ibm.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Dell.png' alt='Logo'/>
  </div>


  </div>
  {/* 3th imgs */}
        <div className='cxcontainer'>
  <div className='' >
    <img  style={{width:"130px"}}src='images/Deloitte.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Kpmg.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Isro.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Benz.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Ey.png' alt='Logo'/>
  </div>
  <div>
  <img  style={{width:"100px"}}src='images/Airtel.png' alt='Logo'/>
  </div>


  </div>
  <div className='pdiv' style={{display:"flex", justifyContent:"center"}}>
  <p className='text-muted'  style={{ fontSize:"1.3rem", marginTop:"1.3rem"} }>+ many more </p>
  </div>
  <hr/>
  </div>
    </>
  );
};

export default Companies;
