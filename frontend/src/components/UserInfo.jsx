import React from 'react';
import './../styles/UserInfo.css';

const UserInfo = ({imageUrl , name}) => {
  return (
    <div className='user-info'>
        <img src={imageUrl} />
        <p>{name}</p>
    </div>
  )
}

export default UserInfo