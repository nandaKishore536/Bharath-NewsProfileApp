import React from 'react'

const DataContext = React.createContext({
  userPost: '',
  newsData: [],
  getData: () => {},
  changeData: () => {},
  changePost: () => {},
  addNewData: () => {},
})

export default DataContext
