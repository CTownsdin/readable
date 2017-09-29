import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ p }) => (
  <div className='post'>
    <h2>{p.title}</h2>
    <p>{p.body}</p>
    <p>by: {p.author}</p>
    <span>{p.voteScore} votes</span><button>UP</button><button>DOWN</button><span>Posted on: {Date(p.timestamp)}</span>
    <hr />
  </div>
)

export default Post

Post.propTypes = {
  p: PropTypes.object.isRequired
}
