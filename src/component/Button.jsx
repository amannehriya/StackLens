import React from 'react'

function PrimaryButton({
    label,
    className,
    target,
    icon,
    href,
}) {
    if(href){
return (
   <a 
   className={className}
   href={href}>
   {label}
   {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span>:undefined}
   </a>
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