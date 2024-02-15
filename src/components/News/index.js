import {FaBookmark} from 'react-icons/fa'

import './index.css'

const News = props => {
  const {item, onPress} = props

  const {id, title, description, url, urlToImage, isAdded} = item

  const onTap = () => {
    onPress(id)
  }

  const x = isAdded ? 'p' : 'g'

  return (
    <li className="newsSub">
      <a href={url} className="a">
        <img src={urlToImage} alt={title} className="img" />
        <h1 className="newsTitle">{title}</h1>
        <p className="newsDescription">{description}</p>
      </a>
      <button type="button" className="btn1" onClick={onTap}>
        <FaBookmark size={30} className={`${x}`} /> {}
      </button>
    </li>
  )
}

export default News
