import React, { Component } from 'react'
import './App.css'
/* Component imports */
import Post from './components/Post'
import Comment from './components/Comment'
import Modal from 'react-modal'

const mockPost = {
  id: '8xf0y6ziyjabvozdd253nd',
  timestamp: 1467166872634,
  title: 'Awesome Title!',
  body: 'Everyone says so after all.',
  author: 'CAT_in_the_HAT',
  category: 'react',
  voteScore: 3,
  deleted: false
}

const mockComment = {
  id: '8tu4bsun805n8un48ve89',
  parentId: '8xf0y6ziyjabvozdd253nd',
  timestamp: 1469479767190,
  body: 'Comments. Are. Cool.',
  author: 'thingone',
  voteScore: -5,
  deleted: false,
  parentDeleted: false
}

class Root extends Component {
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

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome to the root view</h2>
        </div>
        <Post p={mockPost} />
        <Comment c={mockComment} />
        <br />
        <button onClick={this.openPostModal}>click to open post modal</button>

        <Modal className='modal'
          overlayClassName='overlay'
          isOpen={this.state.postModalOpen}
          onRequestClose={this.closePostModal}
          contentLabel='Modal'
        >
          <div>
            NEW POST FORM - TODO
          </div>
          <button onClick={this.closePostModal}>close post modal</button>
        </Modal>

      </div>
    )
  }
}

export default Root
