import {Component} from 'react'

import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'

import {v4 as uuidv4} from 'uuid'

import Home from './components/Home/index'

import BookMark from './components/BookMark/index'

import Settings from './components/Settings/index'

import Profile from './components/Profile/index'

import NotFound from './components/NotFound/index'

import DataContext from './context/DataContext'

import './App.css'

class App extends Component {
  state = {
    userPost: '',
    newsData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
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
      this.setState({newsData: data})
    }
  }

  changePost = event => {
    this.setState({userPost: event.target.value})
  }

  changeData = id => {
    this.setState(prevState => ({
      newsData: prevState.newsData.map(each => {
        if (each.id === id) {
          return {...each, isAdded: !each.isAdded}
        }
        return each
      }),
    }))
  }

  addNewData = () => {
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
        newsData: [...prevState.newsData, newData],
        userPost: '',
      }))
    }
  }

  render() {
    const {userPost, newsData} = this.state

    return (
      <DataContext.Provider
        value={{
          userPost,
          newsData,
          getData: this.getData,
          changeData: this.changeData,
          changePost: this.changePost,
          addNewData: this.addNewData,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book-mark" component={BookMark} />
            <Route exact path="/setting" component={Settings} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </DataContext.Provider>
    )
  }
}

export default App
