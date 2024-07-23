import React from 'react'

function Logo({src = "default.png"  , className, alt = "testImg", ...restProps }) {
  return (

    <img src={src} className={className}  alt={alt} {...restProps} loading={"lazy"} />
    
  )
}

export default Logo