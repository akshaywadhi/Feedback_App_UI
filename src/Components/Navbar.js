import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar() {


  const { loginWithRedirect,isAuthenticated,user, logout } = useAuth0();
  return (
    <div className='shadow-lg gradient-bg'>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
   
  
    <span className="brand navbar-brand fw-bold fs-1">FeedBack</span> <button className='text-white btn transparent'>We all need people <span className='d-block'>Who will give us feedback</span></button>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse justify-content-end fit' id="navbarSupportedContent">

      <ul className="navbar-nav mb-2 mb-lg-2 d-flex align-items-center justify-content-center">
        <li className="nav-item">
      
          <Link className="nav-link active fw-bold" aria-current="page" to='/'>Home</Link>
        </li>
      
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </span>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='register'>Register Company</Link></li>
            
      
         
          </ul>
        </li>
    
        {
            isAuthenticated ? <><li className="nav-item">
            <span className="nav-link fw-bold pointer" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</span>
          </li><span class="text-white btn-xl fw-bold mx-3">{user.name}</span></>  :
            <span className="nav-link " href="#">
            <button type="button" class="btn btn-primary btn-xl fw-bold" onClick={() => loginWithRedirect()}><i class="bi bi-person"></i>SignUp</button></span>
          }
     
      </ul>
     
    </div>
  </div>

</nav>

    </div>
  )
}
