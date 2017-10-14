import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ p, voteHandler }) => (
  <div className='post'>
    <strong><p>{p.title}</p></strong>
    <p>{p.body}</p>
    <p>by: {p.author}</p>
    <span>{p.voteScore} votes</span>
    <button onClick={() => voteHandler(p.id, 'upVote')}>UP</button>
    <button onClick={() => voteHandler(p.id, 'downVote')}>DOWN</button>
    <span>Posted on: {`${new Date(p.timestamp)}`}</span>
  </div>
)

export default Post

Post.propTypes = {
  p: PropTypes.object.isRequired,
  voteHandler: PropTypes.func.isRequired
}
