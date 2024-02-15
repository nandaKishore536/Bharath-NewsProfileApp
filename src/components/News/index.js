import {FaBookmark} from 'react-icons/fa'

import './index.css'

const News = props => {
  const {item} = props

  const {id, title, description, url, urlToImage, isAdded} = item

  return (
    <li className="newsSub">
      <button type="button" className="btn">
        <img src={urlToImage} alt={title} className="img" />
        <h1 className="newsTitle">{title}</h1>
        <p className="newsDescription">{description}</p>
        <button type="button" className="btn">
          <FaBookmark size={30} color="pink" />
          {}
        </button>
      </button>
    </li>
  )
}

export default News
