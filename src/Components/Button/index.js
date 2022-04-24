import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonCostume = (props) => {
  console.log(props)
  return (
    // <Button {...props}>{props.children}</Button>
    <Button {...props}>
      {props.dataFlag === undefined ?  "Pilih Mobil" : "Lanjutkan Pembayaran"}
    </Button>
  )
}

export default ButtonCostume