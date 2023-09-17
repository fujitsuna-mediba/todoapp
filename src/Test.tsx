import React from 'react'
import logo from './assets/logo.png'

const Test: React.FC = () => {
  const handleOnClick = () => {
    console.log('clicked')
  }
  return (
    <div>
      <h1>Test</h1>
      <img src={logo} alt='logo' width='188' height='60' onClick={handleOnClick} />
    </div>
  )
}

export default Test
