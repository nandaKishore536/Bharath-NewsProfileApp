import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import Sidebar from '../Sidebar'

import News from '../News/index'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    dataOfArticles: [],
    status: apiStatusConstants.initial,
    userPost: '',
  }

  componentDidMount() {
    this.getNewsData()
  }

  onChangeUser = event => {
    this.setState({userPost: event.target.value})
  }

  onTap = () => {
    const {userPost} = this.state
    if (userPost !== '') {
      const newData = {
        id: uuidv4(),
        title: userPost,
        description: 'John Doe write a post',
        url:
          'https://www.istockphoto.com/photo/news-online-in-phone-reading-newspaper-from-website-digital-publication-and-magazine-gm1477858506-506284086?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Farticles%2F&utm_term=articles',
        urlToImage:
          'https://media.istockphoto.com/id/1477858506/photo/news-online-in-phone-reading-newspaper-from-website-digital-publication-and-magazine-mockup.jpg?s=1024x1024&w=is&k=20&c=AlvYzHJjpG2COQZOj0zU1GaG_gt8CT-MnSQ236tUQvg=',
        isAdded: false,
      }
      this.setState(prevState => ({
        dataOfArticles: [...prevState.dataOfArticles, newData],
        userPost: '',
      }))
    }
  }

  getNewsData = async () => {
    this.setState({status: apiStatusConstants.inProgress})
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=756de7635d5c43ba908910b0c1f692c0',
    )
    const jsonData = await response.json()

    if (response.ok) {
      const data = jsonData.articles.map(each => ({
        id: uuidv4(),
        description: each.description,
        title: each.title,
        url: each.url,
        urlToImage: each.urlToImage,
        isAdded: false,
      }))
      this.setState({dataOfArticles: data, status: apiStatusConstants.success})
    } else {
      this.setState({status: apiStatusConstants.failure})
    }
  }

  render() {
    const {userPost, dataOfArticles} = this.state
    return (
      <div className="mainCon">
        <Sidebar />
        <div className="subCon">
          <div className="createCon">
            <input
              type="text"
              className="input"
              placeholder="Write a Post"
              value={userPost}
              onChange={this.onChangeUser}
            />
            <button type="button" className="btn">
              Post
            </button>
          </div>

          <ul className="newsCon">
            {dataOfArticles.map(each => (
              <News key={each.id} item={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
