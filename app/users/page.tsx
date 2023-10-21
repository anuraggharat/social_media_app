'use client'
import React from 'react'
import Button from '../components/Common/Button'
import { signOut } from 'next-auth/react'

export default function page() {
  return (
    <div>
        <button onClick={()=>signOut()} >Logout</button>
    </div>
  )
}
