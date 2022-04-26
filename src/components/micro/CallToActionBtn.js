import React from 'react'

function CallToActionBtn({text,href,targetBlank,secondary}) {
 let callToActionClassName = "call-to-action-link" 
 if(secondary) callToActionClassName = "call-to-action-link__secondary" 
  return (
   <div className="call-to-action-mask  my-1 my-sm-0 mx-md-4">
    <a              
    target={targetBlank ? '_blank' : "_self"}
    rel={targetBlank ? 'nofollow noreferrer noopener' : ""}
    href={href}
    
    className={callToActionClassName}>{text}</a>
   </div>
  )
}

export default CallToActionBtn