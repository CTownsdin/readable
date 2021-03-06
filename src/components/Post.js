import React from 'react'
import PropTypes from 'prop-types'
import Voter from './PostVoter'
import { Link } from 'react-router-dom'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Button from 'muicss/lib/react/button'

const Post = ({ p, voteHandler, removePost }) => (
  <div className='post'>
    <Row>
      <Col md='1'>
        <Voter className='voter' voteScore={p.voteScore} handleVoting={voteHandler} voteId={p.id} />
      </Col>
      <Col md='11'>
        <div className='comment'>
          <Link to={{ pathname: `/${p.category}/${p.id}` }} >
            <strong><p>{p.title}</p></strong>
            <p>{p.body}</p>
            <p>{p.commentCount} comments</p>
          </Link>
          <p>post by: {p.author}</p>
        </div>
      </Col>
    </Row>
    <div>
      <span>Posted: {`${new Date(p.timestamp)}`}</span>
      <span><Button onClick={() => removePost(p.id)}>remove post</Button></span>
    </div>
  </div>
)

export default Post

Post.propTypes = {
  p: PropTypes.object.isRequired
}
