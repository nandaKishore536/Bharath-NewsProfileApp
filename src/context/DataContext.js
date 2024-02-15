import React from 'react'

const CartContext = React.createContext({
  userPost: '',
  newsData: [],
  changeData: () => {},
  changePost: () => {},
  addNewData: () => {},
})

export default CartContext
