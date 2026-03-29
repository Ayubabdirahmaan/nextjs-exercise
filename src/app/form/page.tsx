'use client'

import React, { useActionState } from 'react'
import { UserPassword } from './form'
const initialState = {
  message : '',
  error: ''
}
const About = () => {
  const [state, formAction] = useActionState(UserPassword, initialState)
  return (
    <div className='m-3'>
      <form action={formAction}>
        <input className='border border-blue-500 rounded-lg' type="password" name='password' />
        <button className='bg-amber-400 ml-2 rounded-lg'>submit</button>
        {
          state.message && (
            <p className='text-blue-500'>{state.message}</p>
          )
        }
        {
          state.error && (
            <p className='text-red-500'>{state.error}</p>
          )
        }
      </form>
    </div>
  )
}

export default About