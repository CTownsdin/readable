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
    this.props.getComments(`http://localhost:3001/posts/${postId}`)
  }

  render () {
    // const { dispatch, postsCategory, sort, title } = this.props
    const mockComment = {
      'id': '52c56115-a660-4a56-87f0-3b264e2ba0df',
      'timestamp': 1506790258393,
      'title': 'React is fun',
      'body': 'React is fun.  It responds to changes in state.  React is closer to raw javascript compared to other frameworks.',
      'author': 'react-fan',
      'category': 'react',
      'voteScore': 12,
      'deleted': false
    }

    const mockPost = {
      'id': '52c56115-a660-4a56-87f0-3b264e2ba0df',
      'timestamp': 1506790258393,
      'title': 'React is fun',
      'body': 'React is fun.  It responds to changes in state.  React is closer to raw javascript compared to other frameworks.',
      'author': 'react-fan',
      'category': 'react',
      'voteScore': 12,
      'deleted': false
    }
    // let { posts } = this.props
    // if (postsCategory) posts = posts.filter((p) => p.category === postsCategory)
    // if (sort === 'voteScore') posts.sort((p1, p2) => p2.voteScore - p1.voteScore)
    // else if (sort === 'timestamp') posts.sort((p1, p2) => p2.timestamp - p1.timestamp)

    return (
      <div>
        <Container fluid>
          <Panel style={{ marginTop: '0.5em' }}>
            {/* <h2>{title}</h2>
            <button className='Category__sortButton' onClick={() => dispatch(sortUpdate('timestamp'))}>
              Newest Posts
            </button>
            <button className='Category__sortButton' onClick={() => dispatch(sortUpdate('voteScore'))}>
              Highest Voted
            </button> */}
            <Post p={mockPost} />
          </Panel>
          <ul>
            {/* {posts.map((p) => (
              <Panel key={p.id}>
                <Post p={p} voteHandler={this.handleVote} />
              </Panel>
            ))} */}
            <Panel>
              <h1>{this.props.id}</h1>
              <Comment c={mockComment} />
              <h1>{this.props.match.params.postId}</h1>
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
