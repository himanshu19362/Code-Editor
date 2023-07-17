import React from 'react';
import './../styles/Sidebar.css';
import UserInfo from './UserInfo';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  
  const handleLeave = () => {
    navigate('/room');
  }
  return (
    <div className='sidebar'>
      <div className='members-joined'>
        <p>Welcome to the Room</p>
      </div>
      <div className='leave'>
        <button onClick={handleLeave}>Leave</button>
      </div>
    </div>
  )
}

export default Sidebar