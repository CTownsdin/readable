import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// muicss
import Panel from 'muicss/lib/react/panel'
import Container from 'muicss/lib/react/container'
// components
import Post from '../components/Post'
import Comment from '../components/Comment'
// actions
import { commentsFetchData } from '../actions/action-comments'
// import { sortUpdate } from '../actions/action-sort'
// import { submitVote } from '../actions/action-posts'

class PostDetails extends React.Component {
  componentDidMount () {
    const { postId } = this.props.match.params
    this.props.getComments(`http://localhost:3001/posts/${postId}/comments`)
  }

  render () {
    let { comments } = this.props
    // if (sort === 'voteScore') posts.sort((p1, p2) => p2.voteScore - p1.voteScore)
    // else if (sort === 'timestamp') posts.sort((p1, p2) => p2.timestamp - p1.timestamp)

    return (
      <div>
        <Container fluid>
          <Panel style={{ marginTop: '0.5em' }}>
            <Post p={mockPost} />
            {/*
            <button className='Category__sortButton' onClick={() => dispatch(sortUpdate('timestamp'))}>
              Newest Posts
            </button>
            <button className='Category__sortButton' onClick={() => dispatch(sortUpdate('voteScore'))}>
              Highest Voted
            </button> */}
          </Panel>
          <ul className='PostDetails__commentsList'>
            <Panel>
              {comments.map((c) => (
                <Panel key={c.id}>
                  <Comment c={c} />
                  {/* voteHandler={this.handleVote} */}
                </Panel>
              ))}
            </Panel>
          </ul>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments,
    commentsIsLoading: state.commentsIsLoading,
    commentsHasErrored: state.commentsHasErrored,
    sort: state.sort
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (url) => dispatch(commentsFetchData(url))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)

PostDetails.propTypes = {
  getComments: PropTypes.func.isRequired
}
