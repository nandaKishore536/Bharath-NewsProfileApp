import {FaBookmark} from 'react-icons/fa6'

import {GoHomeFill} from 'react-icons/go'

import {IoSettingsSharp} from 'react-icons/io5'

import {FaUser} from 'react-icons/fa'

import {
  MainContainer,
  Name,
  ItemContainer,
  Item,
  SubItemContainer,
} from './styledComponents'

const Sidebar = () => (
  <MainContainer>
    <Name>Bharat News</Name>
    <ItemContainer>
      <Item>
        <SubItemContainer type="button">
          <GoHomeFill size={45} />
        </SubItemContainer>
      </Item>

      <Item>
        <SubItemContainer type="button">
          <FaBookmark size={45} />
        </SubItemContainer>
      </Item>

      <Item>
        <SubItemContainer type="button">
          <FaUser size={45} />
        </SubItemContainer>
      </Item>

      <Item>
        <SubItemContainer type="button">
          <IoSettingsSharp size={45} />
        </SubItemContainer>
      </Item>
    </ItemContainer>
  </MainContainer>
)

export default Sidebar
