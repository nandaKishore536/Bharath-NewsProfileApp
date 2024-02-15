import React from 'react'

const DataContext = React.createContext({
  userPost: '',
  newsData: [],
  BookData: [],
  getData: () => {},
  changeData: () => {},
  changePost: () => {},
  addNewData: () => {},
})

export default DataContext
