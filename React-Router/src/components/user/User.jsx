import React from 'react'
import { useParams } from 'react-router-dom'





function User() {
    const {userId} = useParams();
  return (
    <div className='flex bg-orange-700 h-20 items-center justify-center text-white font-bold font-serif text-2xl'>User : {userId}</div>
  )
}

export default User