import React from 'react'
import './Topics.css'

const Topics = () => {
  return (
    <div style={{marginTop:"5rem", height:"50rem", backgroundColor:"#f8f8fd"}}>
        <div className='row'>
      <div className='col-4 firstqq' style={{borderRadius: "4rem", border: "solid white",backgroundColor:"white", marginTop:"3rem", borderBottom:"8px solid #ffd268", width:"27rem"}}>
        <span>
            <img src='images/firstcard.svg' style={{width:"5rem"}}/>
        </span> <br/>
        <strong>
        Frontend
        </strong>
        <p   style={{textAlign:"center", fontWeight:"0.2rem", fontFamil:"bol", marginTop:"15px"}}>Complete HTML, CSS & Javascript along with frameworks like Bootstrap & Tailwind.</p>
      </div>
      <div className='col-4 firstqq' style={{borderRadius: "4rem", border: "solid white",backgroundColor:"white", marginTop:"3rem", borderBottom:"8px solid #c8e9a0", width:"27rem"}}>
        <span>
            <img src='images/backend.svg' style={{width:"5rem"}}/>
        </span> <br/>
        <strong>
        Backend
        </strong>
        <p style={{textAlign:"center", fontWeight:"0.2rem", fontFamil:"bol", marginTop:"15px"}}>Complete Express.js & Node.js. Discover APIs, templating, deployment & much more.</p>
      </div>
      <div className='col-4 firstqq' style={{borderRadius: "4rem", border: "solid white",backgroundColor:"white", marginTop:"3rem", borderBottom:"8px solid #00d8ff", width:"27rem"}}>
        <span>
            <img src='images/React.svg' style={{width:"5rem"}}/>
        </span> <br/>
        <strong>
        React
        </strong>
        <p  style={{textAlign:"center", fontWeight:"0.2rem", fontFamil:"bol", marginTop:"15px"}}>Advanced Frontend concepts like state, event, materialUI with React.</p>
      </div>
        </div>
        <div className='row'>
      <div className='col-4 firstqq' style={{borderRadius: "4rem", border: "solid white",backgroundColor:"white", marginTop:"3rem", borderBottom:"8px solid #ffd268", width:"27rem"}}>
        <span>
            <img src='images/Database.svg' style={{width:"5rem"}}/>
        </span> <br/>
        <strong>
        Database
        </strong>
        <p   style={{textAlign:"center", fontWeight:"0.2rem", fontFamil:"bol", marginTop:"15px"}}>Learn how to build a stable, reliable database - be it relational (SQL) or non-relational (MongoDB).</p>
      </div>
      <div className='col-4 firstqq' style={{borderRadius: "4rem", border: "solid white",backgroundColor:"white", marginTop:"3rem", borderBottom:"8px solid #ffd268", width:"27rem"}}>
        <span>
            <img src='images/projects.svg' style={{width:"5rem"}}/>
        </span> <br/>
        <strong>
        Projects
        </strong>
        <p 
          style={{textAlign:"center", fontWeight:"0.2rem", fontFamil:"bol", marginTop:"15px"}}>Throughout this journey we'll build Industry grade Projects to get a practical & hands-one experience.</p>
      </div>
      <div className='col-4 firstqq' style={{borderRadius: "4rem", border: "solid white",backgroundColor:"white", marginTop:"3rem", borderBottom:"8px solid #ffd268", width:"27rem"}}>
        <span>
            <img src='images/opensource.svg' style={{width:"5rem"}}/>
        </span> <br/>
        <strong>
        Open Source
        </strong>
        <p style={{textAlign:"center", fontWeight:"0.2rem", fontFamil:"bol", marginTop:"15px"}}>Complete Git & Github
        Learn about the world of open source and dive into concepts relating to version control.</p>
      </div>
        </div>
    </div>
  )
}

export default Topics