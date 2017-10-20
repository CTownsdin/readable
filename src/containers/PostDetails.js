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
import { postsFetchData } from '../actions/action-posts'
// import { sortUpdate } from '../actions/action-sort'
// import { submitVote } from '../actions/action-posts'

class PostDetails extends React.Component {
  componentDidMount () {
    const { postId } = this.props.match.params
    this.props.dispatch(commentsFetchData(`http://localhost:3001/posts/${postId}/comments`))
    if (this.props.posts.length === 0) {
      this.props.dispatch(postsFetchData('http://localhost:3001/posts'))
    }
  }

  render () {
    const { postId } = this.props.match.params
    let { comments } = this.props
    let mainPost = this.props.posts.find(p => p.id === postId)
    // if (sort === 'voteScore') posts.sort((p1, p2) => p2.voteScore - p1.voteScore)
    // else if (sort === 'timestamp') posts.sort((p1, p2) => p2.timestamp - p1.timestamp)

    return (
      <div>
        <Container fluid>
          <Panel style={{ marginTop: '0.5em' }}>
            {mainPost &&
              <Post p={mainPost} />
            }
          </Panel>
          <ul className='PostDetails__commentsList'>
            <Panel><p><em>...comments</em></p>
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

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    commentsIsLoading: state.commentsIsLoading,
    commentsHasErrored: state.commentsHasErrored,
    sort: state.sort,
    posts: state.posts
  }
}
export default connect(mapStateToProps)(PostDetails)

PostDetails.propTypes = {
  getComments: PropTypes.func.isRequired
}
