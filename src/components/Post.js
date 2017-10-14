import React from 'react'
import PropTypes from 'prop-types'
import Voter from './Voter'

const Post = ({ p, voteHandler }) => (
  <div className='post'>
    <Voter voteScore={p.voteScore} handleVoting={voteHandler} voteId={p.id} />
    <strong><p>{p.title}</p></strong>
    <p>{p.body}</p>
    <p>by: {p.author}</p>
    <div className='Post__timestamp'>Posted: {`${new Date(p.timestamp)}`}</div>
  </div>
)

export default Post

Post.propTypes = {
  p: PropTypes.object.isRequired,
  voteHandler: PropTypes.func.isRequired
}
