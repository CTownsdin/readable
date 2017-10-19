import React from 'react'
import PropTypes from 'prop-types'

// TODO: compare to POST and fix as needed.
const Comment = ({ c }) => (
  <div className='comment'>
    <hr />
    <p>{c.body}</p>
    <p>comment by: {c.author}</p>
    <span>{c.voteScore} votes</span><button>UP</button><button>DOWN</button><span>TIME: {c.timestamp}</span>
  </div>
)

export default Comment

Comment.propTypes = {
  c: PropTypes.object.isRequired
}
