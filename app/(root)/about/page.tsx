import { auth } from '@/auth'
import React from 'react'

const page = async() => {

  const session = await auth()

  console.log(session?.user)

  
  return (
    <div>
      <p className='text-white text-9xl'>{session?.user.name}</p>
      <p className='text-white text-9xl'>{session?.user.email}</p>
      <p className='text-white text-9xl'>{session?.user.password}</p>
    </div>
  )
}

export default page