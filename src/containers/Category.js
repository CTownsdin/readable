import React from 'react'
import PropTypes from 'prop-types'
import Post from '../components/Post'

// DECISION:
// Have each category GET it's own POSTS in ComponentWillMount()
// by using  dispatch(fetchPosts) or similar from app state
// Category will be a connect container component.

// mockPosts for now
// use dispatch(getPosts) later to get these and render

class Category extends React.Component {
  render () {
    const mockPosts = [
      {
        'id': '52c56115-a660-4a56-87f0-3b264e2ba0df',
        'timestamp': 1467166872634,
        'title': 'React is fun',
        'body': 'React is fun.  It responds to changes in state.  React is closer to raw javascript compared to other frameworks.',
        'author': 'react-fan',
        'category': 'react',
        'voteScore': 6,
        'deleted': false
      },
      {
        'id': 'bc89d677-cd93-4880-951b-de765bb9ba49',
        'timestamp': 1437166872634,
        'title': 'React is really fun',
        'body': 'you know it is... really.',
        'author': 'react-fan',
        'category': 'react',
        'voteScore': 0,
        'deleted': false
      }
    ]
    const mockPostElements = mockPosts.map((p) => (
      <li key={p.id}>{p.title}</li>
    ))
    return (
      <div>
        <h1>{this.props.title} Posts</h1>
        <ul>
          {mockPostElements}
        </ul>
      </div>
    )
  }
}

export default Category

Category.propTypes = {
  title: PropTypes.string.isRequired
}
