import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IoArrowUpC from 'react-icons/lib/io/arrow-up-c'
import IoArrowDownC from 'react-icons/lib/io/arrow-down-c'
// actions
import { submitCommentVote } from '../actions/action-comments'

class CommentVoter extends React.Component {
  constructor () {
    super()
    this.handleVote = this.handleVote.bind(this)
  }

  handleVote (id, vote) {
    this.props.dispatch(submitCommentVote(id, vote))
  }

  render () {
    const { voteScore, voteId } = this.props
    return (
      <div className='voter'>
        <IoArrowUpC className='verticalBottom' size={24} onClick={() => this.handleVote(voteId, 'upVote')} />
        <p className='mui--text-title'>{voteScore}</p>
        <IoArrowDownC className='verticalTop' size={24} onClick={() => this.handleVote(voteId, 'downVote')} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    voteScore: ownProps.voteScore,
    voteId: ownProps.voteId
  }
}
export default connect(mapStateToProps)(CommentVoter)  // connected bc need this.props.dispatch in handleVote()

CommentVoter.propTypes = {
  voteScore: PropTypes.number.isRequired,
  voteId: PropTypes.string.isRequired
}
