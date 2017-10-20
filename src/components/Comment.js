import React from 'react'
import PropTypes from 'prop-types'
import Voter from './Voter'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'

// note: very similar to Post, but electing to keep separate

const Comment = ({ c, voteHandler }) => (
  <div className='comment'>
    <Row>
      <Col md='1'>
        <Voter className='voter' voteScore={c.voteScore} handleVoting={voteHandler} voteId={c.id} />
      </Col>
      <Col md='11'>
        <p>{c.body}</p>
        <p>comment by: {c.author}</p>
      </Col>
    </Row>
  </div>
)

export default Comment

Comment.propTypes = {
  c: PropTypes.object.isRequired
}
