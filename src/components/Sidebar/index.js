import {Link} from 'react-router-dom'

import {FaBookmark} from 'react-icons/fa6'

import {GoHomeFill} from 'react-icons/go'

import {IoSettingsSharp} from 'react-icons/io5'

import {FaUser} from 'react-icons/fa'

import './index.css'

import {
  MainContainer,
  Name,
  ItemContainer,
  Item,
  SubItemContainer,
} from './styledComponents'

const Sidebar = () => (
  <MainContainer>
    <Link to="/" className="link">
      <Name>Bharat News</Name>
    </Link>
    <ItemContainer>
      <Link to="/">
        <Item>
          <SubItemContainer type="button">
            <GoHomeFill size={50} />
          </SubItemContainer>
        </Item>
      </Link>

      <Link to="/book-mark">
        <Item>
          <SubItemContainer type="button">
            <FaBookmark size={50} />
          </SubItemContainer>
        </Item>
      </Link>

      <Link to="/profile">
        <Item>
          <SubItemContainer type="button">
            <FaUser size={50} />
          </SubItemContainer>
        </Item>
      </Link>

      <Link to="/setting">
        <Item>
          <SubItemContainer type="button">
            <IoSettingsSharp size={50} />
          </SubItemContainer>
        </Item>
      </Link>
    </ItemContainer>
  </MainContainer>
)

export default Sidebar
