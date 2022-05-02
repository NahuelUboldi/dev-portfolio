import React, {useEffect, useState} from 'react'


function Email() {
  const [copyAlert, setCopyAlert] = useState("Click to copy")
  const [isCopyAlertOpen, setIsCopyAlertOpen] = useState(false)


  const handleClick = () => {
    navigator.clipboard.writeText("nahueluboldi@gmail.com")
    setCopyAlert("Copied!")
  }

  return (
    <span 
    class="mailme"
    onClick={handleClick}
    onMouseEnter={() => setIsCopyAlertOpen(true)}
    onMouseLeave={() => {
      setIsCopyAlertOpen(false)
      setCopyAlert("Click to copy")
    }}>
    nahueluboldi@gmail.com
    {isCopyAlertOpen && <span class="copy-alert">{copyAlert}</span>}
    </span>
  )
}

export default Email