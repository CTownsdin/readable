import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
// actions
import { sortUpdate } from '../actions/action-sort'
import { postsFetchData } from '../actions/action-posts'
import { addPost } from '../actions/action-posts'
import { showPostForm } from '../actions/action-posts'
// muicss
import Container from 'muicss/lib/react/container'
import Button from 'muicss/lib/react/button'
import Panel from 'muicss/lib/react/panel'


class Category extends React.Component {
  componentDidMount () {
    if (this.props.posts.length === 0) this.props.dispatch(postsFetchData('http://localhost:3001/posts'))  // deep link
  }

  render () {
    const { dispatch, postsCategory, sort, title } = this.props
    let { posts } = this.props
    if (postsCategory) posts = posts.filter((p) => p.category === postsCategory)
    if (sort === 'voteScore') posts.sort((p1, p2) => p2.voteScore - p1.voteScore)
    else if (sort === 'timestamp') posts.sort((p1, p2) => p2.timestamp - p1.timestamp)

    return (
      <div>
        <Container fluid className='Main-container'>
          <Panel className='Category__title'>
            <h2>{title}</h2>
            <Button variant='flat' color='accent' onClick={() => dispatch(showPostForm(true))}>
              New Post
            </Button>
            <Button variant='flat' color='primary' onClick={() => dispatch(sortUpdate('timestamp'))}>
              Newest Posts
            </Button>
            <Button variant='flat' color='primary' onClick={() => dispatch(sortUpdate('voteScore'))}>
              Highest Voted
            </Button>
          </Panel>
          { this.props.postsIsLoading &&
            <Panel>
              <p>Loading posts...</p>
            </Panel>
          }
          { this.props.postIsSubmitting &&
              <Panel>
                <p>Submitting post...</p>
              </Panel>
          }
          { this.props.postsHasErrored &&
              <Panel>
                <p>We're sorry, there's been an error</p>
                <p>{this.props.postsHasErrored}</p>
              </Panel>
          }
          { this.props.showPostForm &&
            <Panel>
              <PostForm onSubmit={(post) => {
                this.props.dispatch(addPost(post))
              }} />
            </Panel>
          }
          <ul>
            { posts.map((p) => (
              <Panel key={p.id}>
                <Post p={p} voteHandler={this.handleVote} />
              </Panel>
            ))}
          </ul>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    postsIsLoading: state.postsIsLoading,
    postsHasErrored: state.postsHasErrored,
    sort: state.sort,
    showPostForm: state.showPostForm
  }
}
export default connect(mapStateToProps)(Category)

Category.propTypes = {
  postsCategory: PropTypes.string,
  title: PropTypes.string.isRequired
}
