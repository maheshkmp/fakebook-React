import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsered">Sponsered</span>
          <img src="/images/ad.png" alt="" className="adImage" />
          <span className="addText">
            Order your food with Uber delivery service. We can deliver your food into your door-step within seconds. Order now!!!
          </span>
        </div>
      </div>
    </div>
  )
}
