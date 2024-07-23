import React from 'react'
import LogoImage from '../../assets/Logo.jpeg'
function Logo({  className, alt = "testImg", ...restProps }) {
  return (

    <img src={LogoImage} className={className}  alt={alt} {...restProps} loading={"lazy"} />
    
  )
}

export default Logo
