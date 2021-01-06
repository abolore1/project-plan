import React from 'react'
import { NavLink } from 'react-router-dom'
// import 'materialize-css/dist/css/materialize.min.css'


 const  SingedOutLink = () => {
    return (
        <div>
           <ul className='right'>
               <li><NavLink to='/signup'>Signup</NavLink></li>
               <li><NavLink to='/signin'>Login</NavLink></li>
           </ul>
        </div>
    )
}

export default SingedOutLink