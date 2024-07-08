import React from 'react'
import './Joinus.css'

const JoinUs = () => {
  return (
   <>
   <div className='bghi'>
     <div className='mainlogo'>
   <spane style={{marginTop:'5rem'}} >
   JOIN US ON
   </spane>
   </div>
   
   <div className='row head'>
    <div className='col-4' style={{marginTop:"2rem",justifyContent:"center"}}>
       <spane> <img style={{width:"30px",marginLeft:"3rem" , paddingTop:"0.1rem"}} src='images/Youtube1.png'/></spane>
       <div style={{marginLeft:"2.4rem" , paddingTop:"0.1rem"}}>Youtube</div>
        <div style={{marginLeft:"1rem" , paddingTop:"0.1rem"}}>
        <strong>
        APNA COLLEGE
        </strong>
        </div>
    </div>
    <div className='col-4' style={{marginTop:"1.5rem",justifyContent:"center"}}>
       <spane> <img style={{width:"40px",marginLeft:"3rem" , paddingTop:"0.1rem"}} src='images/instragram.png'/></spane>
       <div style={{marginLeft:"2.4rem" , paddingTop:"0.1rem"}}>Instagram</div>
        <div style={{marginLeft:"1rem" , paddingTop:"0.1rem"}}>
        <strong>
        APNA COLLEGE
        </strong>
        </div>
    </div>
    <div className='col-4' style={{marginTop:"2rem",justifyContent:"center"}}>
       <spane> <img style={{width:"30px",marginLeft:"3rem" , paddingTop:"0.1rem"}} src='images/telegram.svg'/></spane>
       <div style={{marginLeft:"2.4rem" , paddingTop:"0.1rem"}}>Telegram</div>
        <div style={{marginLeft:"1rem" , paddingTop:"0.1rem"}}>
        <strong>
        APNA COLLEGE
        </strong>
        </div>
    </div>

   </div>
   </div>
   </>
  )
}

export default JoinUs