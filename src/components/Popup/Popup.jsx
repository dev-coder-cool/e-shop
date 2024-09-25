import React from 'react'

const Popup = ({orderPopup,serOrderPopup}) => {
  return (
    <div>
      {
        orderPopup&&<div className='popup'></div>
      }
    </div>
  )
}

export default Popup
