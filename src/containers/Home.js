import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/App.css'
import * as posts from '../actions/action-posts'  // Thunk

class Home extends Component {
  componentDidMount () {  // TODO:  Eventually we will want to display all posts on the homepage, per project requirements.
    console.log('Home is running componentDidMount() and will run getPosts()')
    this.props.getPosts('http://localhost:3001/posts')
  }

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
        <h3>Check Application State, are ALL the posts there in an array?</h3>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (url) => dispatch(posts.postsGET(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
