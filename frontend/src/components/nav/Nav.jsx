import React from 'react'
import './navbar.css';
import {Link,Outlet} from 'react-router-dom';
import cartlogo from '../../images/cart-icon.png';
import homelogo from '../../images/home-icon.png';
function Nav() {
  return (
    <>
    <div className="navbar">
        <ul>
            <li><Link to='/'><img style={{minWidth:"40px", width: '20%', height: ''}}src={homelogo} alt="" /></Link></li>
            <li style={{textAlign: 'right'}}><Link to='/cart'> <img style={{minWidth:"40px",width: '20%', height: ''}}src={cartlogo} alt="" /></Link></li>
        </ul>
    </div>
        <Outlet />
    </>
  )
}

export default Nav