import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/App.css'
import * as posts from '../actions/action-posts'  // Thunk
import Category from './Category'

class Home extends Component {
  componentDidMount () {
    this.props.getPosts('http://localhost:3001/posts')
  }

  render () {
    const { posts } = this.props
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Readable</h2>
        </div>
        { !posts && <h3>Loading...</h3>}
        { posts && <Category title='All Posts' postsCategory='' />}
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    postsIsLoading: state.postsIsLoading,
    postsHasErrored: state.postsHasErrored
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (url) => dispatch(posts.postsGET(url))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  //
  posts: PropTypes.array,
  postsIsLoading: PropTypes.bool.isRequired,
  postsHasErrored: PropTypes.bool.isRequired
}
