import React from 'react'
import { connect } from 'react-redux'
// muicss
import Panel from 'muicss/lib/react/panel'
import Container from 'muicss/lib/react/container'
import Button from 'muicss/lib/react/button'
// components
import Post from '../components/Post'
import Comment from '../components/Comment'
import PostForm from '../components/PostForm'
import CommentForm from '../components/CommentForm'
// actions
import {
  commentsFetchData, addComment, showCommentEditForm, editComment, deleteComment, showCommentForm
} from '../actions/action-comments'
import {
  postsFetchData, showPostEditForm, editPost, deletePost
} from '../actions/action-posts'

// import { sortUpdate } from '../actions/action-sort'

class PostDetails extends React.Component {
  constructor (props) {
    super(props)
    this.handleRemovePost = this.handleRemovePost.bind(this)
    this.handleRemoveComment = this.handleRemoveComment.bind(this)
    this.handleEditComment = this.handleEditComment.bind(this)
  }

  componentDidMount () {
    const { postId } = this.props.match.params
    if (this.props.posts.length === 0) this.props.dispatch(postsFetchData('http://localhost:3001/posts')) // deep linking
    this.props.dispatch(commentsFetchData(`http://localhost:3001/posts/${postId}/comments`))
  }

  handleRemovePost (postId) {
    this.props.dispatch(deletePost(postId))
  }

  handleRemoveComment (commentId) {
    this.props.dispatch(deleteComment(commentId))
  }

  handleEditComment (commentId) {
    this.props.dispatch(showCommentEditForm(true, commentId))
  }

  render () {
    const { postId } = this.props.match.params
    let { comments } = this.props
    let mainPost = this.props.posts.find(p => p.id === postId)
    // if (sort === 'voteScore') posts.sort((p1, p2) => p2.voteScore - p1.voteScore)
    // else if (sort === 'timestamp') posts.sort((p1, p2) => p2.timestamp - p1.timestamp)

    return (
      <div>
        <Container fluid className='Main-container'>
          <Panel style={{ marginTop: '0.5em' }}>
            { mainPost &&
              <div>
                <Post p={mainPost} removePost={this.handleRemovePost} />
                <Button className='PostDetails__editButton'
                  onClick={() => this.props.dispatch(showPostEditForm(true))}
                >Edit this post</Button>
              </div>
            }
          </Panel>
          <ul className='PostDetails__commentsList'>
            { this.props.commentsIsLoading &&
              <p>Loading comments...</p>
            }
            { this.props.commentsHasErrored &&
              <div>
                <p>We're sorry, there's been an error.</p>
                <p>{this.props.commentsHasErrored}</p>
              </div>
            }
            { this.props.showPostEditForm &&
              <Panel>
                <PostForm post={mainPost}
                  onSubmit={(post) => {
                    this.props.dispatch(editPost(post, mainPost.id))
                    this.props.history.push('/')
                  }}
                />
              </Panel>
            }
            { this.props.showCommentEditForm.show &&
              <Panel>
                <h2>edit the comment...</h2>
                <CommentForm comment={this.props.commentForEdit}
                  onSubmit={(comment) => {
                    this.props.dispatch(editComment(comment, this.props.commentForEditId))
                    this.props.history.push('/')
                  }}
                />
              </Panel>
            }

            <Panel className='PostDetails__commentsPanel'>
              <p>
                <em>...comments</em>
                <Button className='PostDetails__commentButton'
                  onClick={() => this.props.dispatch(showCommentForm(true))}
                >ADD A COMMENT</Button>
              </p>
              { this.props.showCommentForm &&
              <Panel>
                <CommentForm
                  onSubmit={(comment) => this.props.dispatch(addComment(comment))}
                  parentPost={mainPost}
                    />
              </Panel>
                }
              { comments.map((c) => (
                <Panel key={c.id}>
                  <Comment c={c}
                    removeComment={this.handleRemoveComment}
                    editComment={this.handleEditComment}
                  />
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
  const commentForEditId = state.showCommentEditForm.id
  return {
    comments: state.comments,
    commentsIsLoading: state.commentsIsLoading,
    commentsHasErrored: state.commentsHasErrored,
    showPostEditForm: state.showPostEditForm,
    showCommentForm: state.showCommentForm,
    showCommentEditForm: state.showCommentEditForm,
    commentForEdit: state.comments.find(c => c.id === commentForEditId),
    commentForEditId,
    sort: state.sort,
    posts: state.posts
  }
}
export default connect(mapStateToProps)(PostDetails)
