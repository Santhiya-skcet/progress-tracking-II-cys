import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Blogs() {
    const Navigate=useNavigate();
    const handleClick=()=>
    {
        Navigate('/home')
    }
  return (
    <div>
    <h1>This is blog page</h1>
    <button onClick={handleClick}>Back</button>
    </div>
  )
}
