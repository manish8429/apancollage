import React from 'react'
import './Navbar.css'

export const NavBar = () => {
  return (
   <>
     <div className='ccntr'>

    <div className='navlogoimg'>
   <img src='images/logo.png' style={{width:"6rem"}}/>
    </div>

    <ul>
        <li>Home</li>
        <li>New Courses</li>
        <li>My Batches</li>
        <li>Sign out</li>
    </ul>
    

</div>
   </>
  )
}
