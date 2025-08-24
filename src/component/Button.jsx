import React from 'react'
import { Link } from 'react-router-dom'

function PrimaryButton({
    label,
    className,
    target,
    icon,
    href,
}) {
 
    if(href){
return (
   <Link
   className={className}
   to={href}>
   {label}
   {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span>:undefined}
  </Link>
  )

    }else{
return (
    <button
    className={className}>
        {label}
         {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span>:undefined}
    </button>
)
    }
  
}

export {PrimaryButton}