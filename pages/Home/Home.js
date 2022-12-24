import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <div className="home" >
    
<button><Link to="/register">Create your accounte</Link></button>
</div>
  )
}

export default Home