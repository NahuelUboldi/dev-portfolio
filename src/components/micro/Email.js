import React, {useState} from 'react'


function Email() {

  return (
    <span 
    class="mailme"
    onClick={() => {navigator.clipboard.writeText("nahueluboldi@gmail.com")}}
    >nahueluboldi@gmail.com</span>
  )
}

export default Email