import Sidebar from '../Sidebar'

import News from '../News/index'

import DataContext from '../../context/DataContext'

import Post from '../Post'

import './index.css'

const BookMark = () => (
  <DataContext.Consumer>
    {value => {
      const {newsData, changeData} = value

      const x = newsData.filter(each => each.isAdded === true)

      return (
        <div className="mainCon">
          <Sidebar />
          <div className="subCon">
            <Post />

            {x.length !== 0 ? (
              <ul className="newsCon">
                {x.map(each => (
                  <News key={each.id} item={each} onPress={changeData} />
                ))}
              </ul>
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
