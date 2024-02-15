import styled from 'styled-components'

export const MainContainer = styled.div`
 min-height : 100vh
 background-color :#ffffff;
 display: flex;
 flex-direction: column;
 width : 40%;
padding :20px 30px 20p 30px;
`

export const Name = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
`

export const ItemContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 5px 10px 5px 10px;
`

export const Item = styled.li`
  display: flex;
  padding: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
`

export const SubItemContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  padding: 2px;
`
