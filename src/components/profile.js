import React from 'react'
import  './profile.css'
function Profile({name,email}) {
    return (
        <div className='container'>
      {name && email ? (
        <div className='profile'>
          <h2>{` ${name}`}</h2>
          <p>{` ${email}`}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
      );
    }
export default Profile
