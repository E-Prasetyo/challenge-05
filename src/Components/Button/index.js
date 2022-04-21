import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonCostume = (props) => {
  return (
    <Button {...props}>{props.children}</Button>
  )
}

export default ButtonCostume