import React from 'react';
import './../styles/Navbar.css';
import Logo from './../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-content container'>
            <div className='nav-left'>
                <img src={Logo}/>
                <p>Code Sync</p>
            </div>
            <div className='nav-right'></div>
        </div>
    </div>
  )
}

export default Navbar