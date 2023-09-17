import React from 'react'
import logo from './assets/logo.png'
import { Box, Text } from '@kuma-ui/core'
const Test: React.FC = () => {
  const handleOnClick = () => {
    console.log('clicked')
  }
  return (
    <Box>
      <Text as='h1'>Test</Text>
      <img src={logo} alt='logo' width='188' height='60' onClick={handleOnClick} />
    </Box>
  )
}

export default Test
