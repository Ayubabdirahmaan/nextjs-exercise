'use client'

import { useActionState } from "react"
import { message } from "./form/action"

export default function Home() {
  const initialState = {
    message: '',
    error: ''
  }
  const [state, formAction] = useActionState(message, initialState)
  return (
    <div className="flex flex-col justify-center text-center h-screen">
      <form action={formAction} className="flex flex-col m-4">
        <input className="border border-blue-300 outline-0 rounded-lg p-1 mb-1" type="email" name="email" />
        <button className="bg-blue-600 p-2 rounded-lg mb-3 ">submit</button>
        {
          state.message && (
            <p className="text-green-400">{state.message}</p>
          )
        }
        {
          state.error && (
            <p className="text-red-500">{state.error}</p>
          )
        }
      </form>
    </div>
  )
}
