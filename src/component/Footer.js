import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div>
        <div className="row" style={{ marginTop: "3rem" , listStyleType:"none" ,padding:"4rem"}}>
          <div className="col-3">
            <span>
              <img
                src="images/logo.png"
                style={{ width: "100px", marginLeft: "6rem" }}
              />
            </span>
            <p style={{ marginLeft: "5rem",marginTop:"10px",fontFamily:"Bol" }}>
              Where education meets
              <br />
              real-world needs.
            </p>
          </div>
          <div className="col-3" style={{fontFamily:"Bol"}}>
            <strong>HELPFUL LINKS</strong>

            <li> <i class="fa-solid fa-chevron-right"></i> Courses</li>
            <li> <i class="fa-solid fa-chevron-right"></i> Privacy policy</li>
            <li> <i class="fa-solid fa-chevron-right"></i> REFUND & <br/> CANCELLATION POLICY</li>
            <li> <i class="fa-solid fa-chevron-right"></i> TERMS & CONDITIONS</li>
          </div>
          <div className="col-3">
            <strong>GET IN TOUCH</strong>
            <li><i class="fa-solid fa-envelope" style={{paddingRight:"5px"}}></i>alpha@apnacollege.in</li>
            <li> <i class="fa-solid fa-envelope"  style={{paddingRight:"5px"}} ></i>delta@apnacollege.in</li>
            <li> <i class="fa-solid fa-envelope"  style={{paddingRight:"5px"}} ></i>sigma@apnacollege.in</li>
            <li><i class="fa-solid fa-user"  style={{paddingRight:"5px"}} ></i>Support Team : 10am-6pm</li>
          </div>
          <div className="col-3"  style={{fontFamily:"Bol"}}>
            <strong>CONNECT WITH US</strong>
            <li>Facebook <i class="fa-brands fa-square-facebook"></i></li>
            <li>Twitter <i class="fa-brands fa-square-twitter"></i></li>
            <li>Youtube <i class="fa-brands fa-youtube"></i></li>
            <li>Instagram <i class="fa-brands fa-instagram"></i> </li>
            <li>Linkedin <i class="fa-brands fa-linkedin"></i> </li>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"center",marginTop:"4rem", height:"5rem", fontFamily:"Bol"}}>
        Copyright © 2024
        </div>
      </div>
    </>
  );
};

export default Footer;
