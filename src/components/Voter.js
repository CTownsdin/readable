/*
  voter component
  for use by Posts and Comments both
*/
import React from 'react'
import PropTypes from 'prop-types'
import IoArrowUpC from 'react-icons/lib/io/arrow-up-c'
import IoArrowDownC from 'react-icons/lib/io/arrow-down-c'
// TODO:  <IoIosFlame />  &&  ion-ios-snowy    next to the vote score on 5x's  :)

const Voter = ({ voteScore, handleVoting, voteId }) => (
  <div className='voter'> {/* TODO: ~float voter right, in a [BOX] */}
    <IoArrowUpC onClick={() => handleVoting(voteId, 'upVote')} />
    <p>{voteScore}</p>
    <IoArrowDownC onClick={() => handleVoting(voteId, 'downVote')} />
  </div>
)

export default Voter

Voter.propTypes = {
  voteScore: PropTypes.number.isRequired,
  handleVoting: PropTypes.func.isRequired,
  voteId: PropTypes.string.isRequired
}
