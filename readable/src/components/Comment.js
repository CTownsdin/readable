import React from 'react'
import PropTypes from 'prop-types'


// const mockComment = {
//   id: '8tu4bsun805n8un48ve89',
//   parentId: "8xf0y6ziyjabvozdd253nd",
//   timestamp: 1469479767190,
//   body: 'Comments. Are. Cool.',
//   author: 'thingone',
//   voteScore: -5,
//   deleted: false,
//   parentDeleted: false
// }

const Comment = ({ c }) => (
  <div className='comment'>
    <hr/>
    <p>{c.body}</p>
    <p>by: {c.author}</p>
    <span>{c.voteScore} votes</span><button>UP</button><button>DOWN</button><span>TIME: {c.timestamp}</span>
  </div>
)

export default Comment

Comment.propTypes = {
  c: PropTypes.object.isRequired
}