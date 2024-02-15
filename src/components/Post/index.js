import './index.css'

import DataContext from '../../context/DataContext'

const Post = () => (
  <DataContext.Consumer>
    {value => {
      const {userPost, changePost, addNewData} = value

      return (
        <div className="createCon">
          <input
            type="text"
            className="input"
            placeholder="Write a Post"
            value={userPost}
            onChange={changePost}
          />
          <button type="button" className="btn" onClick={addNewData}>
            Post
          </button>
        </div>
      )
    }}
  </DataContext.Consumer>
)

export default Post
