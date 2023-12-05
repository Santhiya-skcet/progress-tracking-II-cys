import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Contact() {
    const Navigate=useNavigate();
    const handleClick=()=>
    {
        Navigate('/home')
    }
  return (
    <div>
    <h1>This is contact page</h1>
    <button onClick={handleClick}>Back</button>
    </div>
  )
}
