import Sidebar from '../Sidebar'

import News from '../News/index'

import DataContext from '../../context/DataContext'

import Post from '../Post'

import './index.css'

const BookMark = () => (
  <DataContext.Consumer>
    {value => {
      const {BookData, changeData} = value

      const NewData = (
        <ul className="newsCon">
          {BookData.map(each => (
            <News key={each.id} item={each} onPress={changeData} />
          ))}
        </ul>
      )

      return (
        <div className="mainCon">
          <Sidebar />
          <div className="subCon">
            <Post />

            {BookData.length !== 0 ? (
              NewData()
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="non"
                className="nonImg"
              />
            )}
          </div>
        </div>
      )
    }}
  </DataContext.Consumer>
)

export default BookMark
