import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/App.css'
import * as postAction from '../actions/action-posts'  // Thunk
import { Link } from 'react-router-dom'

class Home extends Component {
  // componentDidMount () {  // TODO:  Eventually we will want to display all posts on the homepage, per project requirements.
  //   this.props.getPosts('http://localhost:3001/posts')
  // }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome to the root view</h2>
        </div>
        <p>some text on the home page</p>
        {/* // render a category page right here first. */}
        <h1>Category Title</h1>
        <h2>Posts for this category below</h2>
        {/* receive list of posts to render from application state, Category will be a connected component */}
        {/* map over each post and render the array of <Post /> */}
        <div />
      </div >
    )
  }
}

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  //
  posts: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  }
}

// don't need to wrap dispatch, I can just call with dispatch, do this later/last if/as desired.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPosts: (url) => dispatch(postAction.postsGET(url))
//   }
// }

// export default connect(mapStateToProps)(Home)
export default Home
