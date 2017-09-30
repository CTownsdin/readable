import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../components/Post'
// actions
import { sort } from '../actions/action-sortBy'

class Category extends React.Component {
  render () {
    const { dispatch, posts, sortedBy, title } = this.props

    const sortedPosts = [...posts]
    if (sortedBy === 'voteScore') {
      sortedPosts.sort((p1, p2) => p2.voteScore - p1.voteScore)
    } else if (sortedBy === 'timestamp') {
      sortedPosts.sort((p1, p2) => p2.timestamp - p1.timestamp)
    }

    return (
      <div>
        <h1>{title} Posts</h1>
        <button onClick={() => dispatch(sort('timestamp'))}>Lastest posts first</button>
        <button onClick={() => dispatch(sort('voteScore'))}>Highest voted posts first</button>
        <ul>
          {sortedPosts.map((p) => <Post key={p.id} p={p} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    // postsIsLoading: state.postsIsLoading,
    // postsHasErrored: state.postsHasErrored
    sortedBy: state.sort.sort
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // getPosts: (url) => dispatch(posts.postsGET(url))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Category)

export default connect(mapStateToProps)(Category)

Category.propTypes = {
  title: PropTypes.string.isRequired
}
