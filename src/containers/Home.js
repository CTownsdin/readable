import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/App.css'
import * as postAction from '../actions/action-posts'  // Thunk
import { Link } from 'react-router-dom'
import Category from './Category'
import Nav from '../components/Nav'

class Home extends Component {
  // componentDidMount () {  // TODO:  Eventually we will want to display all posts on the homepage, per project requirements.
  //   this.props.getPosts('http://localhost:3001/posts')
  // }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Readable</h2>
        </div>
        {/* receive list of posts to render from application state, Category will be a connected component */}
        {/* map over each post and render the array of <Post /> */}
        {/* <Category title='React' /> */}
        <h1>INSERT: ALL POSTS HERE</h1>
        <h2>ranked by vote score</h2>

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
