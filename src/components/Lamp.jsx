import React, { useState } from 'react'

const Lamp = () => {
  const [isOn, setIsOn] = useState('off')
  const switchLight = () => {
    if (isOn === 'off') {
        setIsOn('on')
    }else{
      setIsOn('off')
    }
  }
  return (
    <div className="lamp-and-btn">
      <div className={`lamp ${isOn}`}></div>
      <button className="lamp-btn" onClick={switchLight}>{isOn}</button>
    </div>
  );
}

export default Lamp