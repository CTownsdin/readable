import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../components/Post'
// actions
import { sortUpdate } from '../actions/action-sort'
import { submitVote } from '../actions/action-posts'

class Category extends React.Component {
  constructor () {
    super()
    this.handleVote = this.handleVote.bind(this)
  }

  handleVote (id, vote) {
    this.props.dispatch(submitVote(id, vote))
  }

  render () {
    const { dispatch, postsCategory, sort, title } = this.props
    let { posts } = this.props
    if (postsCategory) posts = posts.filter((p) => p.category === postsCategory)
    if (sort === 'voteScore') posts.sort((p1, p2) => p2.voteScore - p1.voteScore)
    else if (sort === 'timestamp') posts.sort((p1, p2) => p2.timestamp - p1.timestamp)

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={() => dispatch(sortUpdate('timestamp'))}>Lastest posts first</button>
        <button onClick={() => dispatch(sortUpdate('voteScore'))}>Highest voted posts first</button>
        <ul>
          {posts.map((p) => <Post key={p.id} p={p} voteHandler={this.handleVote} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    // postsIsLoading: state.postsIsLoading,
    // postsHasErrored: state.postsHasErrored
    sort: state.sort
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
  postsCategory: PropTypes.string,
  title: PropTypes.string.isRequired
}
