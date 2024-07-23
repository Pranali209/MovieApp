import React from 'react'
import { useState ,useEffect } from 'react';
function Loading() {
    const [message, setMessage] = useState('Loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Loaded');
    }, 2000);
    return () => clearTimeout(timer);
  })
  return (
    
        <div>
      <p>{message}</p>
    </div>
    
   
  )
}

export default Loading