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
          {posts.sort((a, b) => b.voteScore - a.voteScore).map((p) => <Post key={p.id} p={p} />)}
        </ul>
      </div>
    )
  }
}

export default Category

Category.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired
  // don't filter here, filter posts before giving them to <Category />
}
