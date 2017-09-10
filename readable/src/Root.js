import React, { Component } from 'react'
import './App.css'
/* Component imports */
import Post from './components/Post'


const mockPost = {
  id: '8xf0y6ziyjabvozdd253nd',
  timestamp: 1467166872634,
  title: 'Awesome Title!',
  body: 'Everyone says so after all.',
  author: 'CAT_in_the_HAT',
  category: 'react',
  voteScore: 3,
  deleted: false
}


class Root extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the root view</h2>
        </div>
        <Post p={mockPost}/>
      </div>
    );
  }
}

export default Root;
