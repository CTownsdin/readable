import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../components/Post'
// actions
import { sort } from '../actions/action-sortBy'

class Category extends React.Component {
  render () {
    const { dispatch, postsCategory, sortedBy, title } = this.props

    let { posts } = this.props
    if (postsCategory) posts = posts.filter((p) => p.category === postsCategory)

    if (sortedBy === 'voteScore') posts.sort((p1, p2) => p2.voteScore - p1.voteScore)
    else if (sortedBy === 'timestamp') posts.sort((p1, p2) => p2.timestamp - p1.timestamp)

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={() => dispatch(sort('timestamp'))}>Lastest posts first</button>
        <button onClick={() => dispatch(sort('voteScore'))}>Highest voted posts first</button>
        <ul>
          {posts.map((p) => <Post key={p.id} p={p} />)}
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
