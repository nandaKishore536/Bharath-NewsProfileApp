import Sidebar from '../Sidebar'

import News from '../News/index'

import DataContext from '../../context/DataContext'

import Post from '../Post'

import './index.css'

const Home = () => (
  <DataContext.Consumer>
    {value => {
      const {newsData, changeData} = value

      return (
        <div className="mainCon">
          <Sidebar />
          <div className="subCon">
            <Post />
            <ul className="newsCon">
              {newsData.map(each => (
                <News key={each.id} item={each} onPress={changeData} />
              ))}
            </ul>
          </div>
        </div>
      )
    }}
  </DataContext.Consumer>
)

export default Home
