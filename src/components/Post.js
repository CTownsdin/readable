import React from 'react'
import PropTypes from 'prop-types'
import Voter from './Voter'
import { Link } from 'react-router-dom'

const Post = ({ p, voteHandler }) => (
  <div className='post'>
    <Voter voteScore={p.voteScore} handleVoting={voteHandler} voteId={p.id} />
    {/* Link to the PostDetailsPage with prop P for post */}
    <Link to={{pathname: `/post/${p.id}/comments`}} >
      <strong><p>{p.title}</p></strong>
      <p>{p.body}</p>
    </Link>
    <p>post by: {p.author}</p>
    <div className='Post__timestamp'>Posted: {`${new Date(p.timestamp)}`}</div>
  </div>
)

export default Post

Post.propTypes = {
  p: PropTypes.object.isRequired,
  voteHandler: PropTypes.func.isRequired
}
