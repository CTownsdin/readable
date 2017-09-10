import React, { Component } from 'react'
import './App.css'
/* Component imports */
import Post from './components/Post'
import Comment from './components/Comment'


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

const mockComment = {
  id: '8tu4bsun805n8un48ve89',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1469479767190,
  body: 'Comments. Are. Cool.',
  author: 'thingone',
  voteScore: -5,
  deleted: false,
  parentDeleted: false
}

class Root extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the root view</h2>
        </div>
        <Post p={mockPost}/>
        <Comment c={mockComment}/>
      </div>
    );
  }
}

export default Root;
