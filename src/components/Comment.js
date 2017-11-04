import React from 'react'
import PropTypes from 'prop-types'
import Voter from './CommentVoter'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Button from 'muicss/lib/react/button'

const Comment = ({ c, removeComment, editComment }) => (
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
    <div className='Comment__timestamp'>
        Posted: {`${new Date(c.timestamp)}`}
      <Button onClick={() => editComment(c.id)}>edit this comment</Button>
      <Button onClick={() => removeComment(c.id)}>remove comment</Button>
    </div>
  </div>
)

export default Comment

Comment.propTypes = {
  c: PropTypes.object.isRequired
}
