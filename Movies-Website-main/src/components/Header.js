import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="movieapp-header">
        <div className="logo">
         <Link to="/"><h3>IMDB<span className="text-white">Movie</span></h3></Link>
        </div>

    </div>
  )
}

export default Header