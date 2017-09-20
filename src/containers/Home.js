import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/App.css'
import { getPosts } from '../actions'
/* Component imports */
// import Post from './Post'
// import Comment from '.Comment'
// import Modal from 'react-modal'
// import { fetchAllPostsIfNeeded } from '../actions'
import PostsList from '../containers/PostsList'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      postModalOpen: false,
      commentModalOpen: false
    }
    this.openPostModal = this.openPostModal.bind(this)
    this.closePostModal = this.closePostModal.bind(this)
    this.openCommentModal = this.openCommentModal.bind(this)
    this.closeCommentModal = this.closeCommentModal.bind(this)
  }
  openPostModal () {
    this.setState({ postModalOpen: true })
  }
  closePostModal () {
    this.setState({ postModalOpen: false })
  }
  openCommentModal () {
    this.setState({ commentModalOpen: true })
  }
  closeCommentModal () {
    this.setState({ commentModalOpen: false })
  }
  componentDidMount () {
    // const { dispatch } = this.props
    // dispatch(fetchAllPostsIfNeeded())
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome to the root view</h2>
        </div>
        <br />
        <button onClick={this.openPostModal}>click to open post modal</button>

        {/* <Modal className='modal'
          overlayClassName='overlay'
          isOpen={this.state.postModalOpen}
          onRequestClose={this.closePostModal}
          contentLabel='Modal'
        > */}
        {/* </Modal> */}
        <button onClick={this.closePostModal}>close post modal</button>
        {/* {isFetching && posts.length === 0 && <h2>isFetching...</h2>}
          {!isFetching && posts.length === 0 && <h2>posts.length === 0</h2>}
          {posts.length > 0 && */}
        {/* <div style={{ opacity: isFetching ? 0.5 : 1 }}> */}
        <div>
          <PostsList />
        </div>

        <button onClick={() => this.props.dispatch(getPosts())}>Get All Posts</button>

      </div >
    )
  }
}

// AsyncApp.propTypes = {
//   selectedSubreddit: PropTypes.string.isRequired,
//   posts: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   lastUpdated: PropTypes.number,
//   dispatch: PropTypes.func.isRequired
// }

function mapStateToProps (state) { }

// export default Root
export default connect()(Home)
