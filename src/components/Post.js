import React from 'react'
import PropTypes from 'prop-types'

// const mockPost = {
//   "8xf0y6ziyjabvozdd253nd": {
//     id: '8xf0y6ziyjabvozdd253nd',
//     timestamp: 1467166872634,
//     title: 'This Post Has An Awesome Title!',
//     body: 'Everyone says so after all.',
//     author: 'CAT_in_the_HAT',
//     category: 'react',
//     voteScore: 3,
//     deleted: false
//   }
// }

const Post = ({ p }) => (
  <div className='post'>
    <h2>{p.title}</h2>
    <p>{p.body}</p>
    <p>by: {p.author}</p>
    <span>{p.voteScore} votes</span><button>UP</button><button>DOWN</button><span>TIME: {p.timestamp}</span>
  </div>
)

export default Post

Post.propTypes = {
  p: PropTypes.object.isRequired
}
