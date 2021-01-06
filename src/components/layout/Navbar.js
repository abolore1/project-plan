import React from 'react'
import {Link } from 'react-router-dom'
import SingedInLink from './SignedInLink'
import SingedOutLink from './SignedOutLink'
import {connect} from 'react-redux'
// import 'materialize-css/dist/css/materialize.min.css'


 const Navbar = (props) => {
     const {auth,profile} = props
     const link = auth.uid? <SingedInLink profile={profile} />:<SingedOutLink/>
    return (
        <div>
           <nav className='nav-wrapper grey darken-3'>
               <div className='container'>
                  <div><Link to='/' className='brand-logo header'>QudusPlan</Link></div> 
                    {link}
               </div>
              
           </nav>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)