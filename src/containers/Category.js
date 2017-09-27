import React from 'react'
import PropTypes from 'prop-types'
import Post from '../components/Post'

class Category extends React.Component {
  render () {
    const { posts, title } = this.props
    return (
      <div>
        <h1>{title} Posts</h1>
        <ul>
          {posts.map((p) => <Post key={p.id} p={p} />)}
        </ul>
      </div>
    )
  }
}

export default Category

Category.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,  // array of posts to filter and render
  nofilter: PropTypes.bool  // if true, display ALL posts, ie within <Home />
}
