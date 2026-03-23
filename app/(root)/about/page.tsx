import { auth } from '@/auth'
import React from 'react'

const page = async() => {

  const session = await auth()

  console.log(session?.user)

  
  return (
    <div>

    </div>
  )
}

export default page