import React from 'react'
import PropTypes from 'prop-types'
import Voter from './PostVoter'
import { Link } from 'react-router-dom'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

const Post = ({ p, voteHandler }) => (
  <div className='post'>
    <Row>
      <Col md='1'>
        <Voter className='voter' voteScore={p.voteScore} handleVoting={voteHandler} voteId={p.id} />
      </Col>
      <Col md='11'>
        <div className='comment'>
          <Link to={{ pathname: `/post/${p.id}/comments` }} >
            <strong><p>{p.title}</p></strong>
            <p>{p.body}</p>
          </Link>
          <p>post by: {p.author}</p>
        </div>
      </Col>
    </Row>
    <div className='Post__timestamp'>Posted: {`${new Date(p.timestamp)}`}</div>
  </div>
)

export default Post

Post.propTypes = {
  p: PropTypes.object.isRequired
}
