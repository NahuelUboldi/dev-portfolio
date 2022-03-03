import React from 'react'

const ProyectLinks = (props) => {
 const {link, icon, text} = props
  return (
   <li>
     <a
       href={link}
       target={'_blank'}
       rel='nofollow noreferrer noopener'
     >
       <span className='fs-3 mx-2'>
         {icon}
       </span>
       <span className='mx-2'>{text}</span>
     </a>
   </li>
  )
}

export default ProyectLinks