import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/App.css'
import { postsFetchData } from '../actions/action-posts'
import Category from './Category'
// import IoIosFlame from 'react-icons/lib/io/ios-flame'
// import IoThumbsup from 'react-icons/lib/io/thumbsup'
// <IoIosFlame />
// <IoThumbsup />

class Home extends Component {
  componentDidMount () {
    this.props.dispatch(postsFetchData('http://localhost:3001/posts'))
  }

  render () {
    const { posts, postsIsLoading, postsHasErrored } = this.props
    return (
      <div className='App'>
        {postsIsLoading && !postsHasErrored && <h2>Loading posts...</h2>}
        {postsHasErrored && <h2>Sorry, there's been an error!</h2>}
        {posts && <Category title='All Posts' postsCategory='' />}
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    postsIsLoading: state.postsIsLoading,
    postsHasErrored: state.postsHasErrored
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPosts: (url) => dispatch(posts.postsFetchData(url))
//   }
// }
export default connect(mapStateToProps)(Home)

Home.propTypes = {
  posts: PropTypes.array,
  postsIsLoading: PropTypes.bool.isRequired,
  postsHasErrored: PropTypes.bool.isRequired
}
