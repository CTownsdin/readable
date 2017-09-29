import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
    // postsIsLoading: state.postsIsLoading,
    // postsHasErrored: state.postsHasErrored
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // getPosts: (url) => dispatch(posts.postsGET(url))  // TODO:?: if (!posts){ getPosts()}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category)

Category.propTypes = {
  title: PropTypes.string.isRequired
}
