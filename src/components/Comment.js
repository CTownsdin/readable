import React from 'react'
import PropTypes from 'prop-types'
import Voter from './CommentVoter'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

// note: very similar to Post, but electing to keep separate

const Comment = ({ c }) => (
  <div className='comment'>
    <Row>
      <Col md='1'>
        <Voter className='voter' voteScore={c.voteScore} voteId={c.id} />
      </Col>
      <Col md='11'>
        <p>{c.body}</p>
        <p>comment by: {c.author}</p>
      </Col>
    </Row>
    <div className='Comment__timestamp'>Posted: {`${new Date(c.timestamp)}`}</div>
  </div>
)

export default Comment

Comment.propTypes = {
  c: PropTypes.object.isRequired
}
