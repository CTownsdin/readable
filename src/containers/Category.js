import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Post from '../components/Post'
// actions
import { sortUpdate } from '../actions/action-sort'
// muicss
import Panel from 'muicss/lib/react/panel'
import Container from 'muicss/lib/react/container'

class Category extends React.Component {
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
            <button className='Category__sortButton' onClick={() => dispatch(sortUpdate('timestamp'))}>
              Newest Posts
            </button>
            <button className='Category__sortButton' onClick={() => dispatch(sortUpdate('voteScore'))}>
              Highest Voted
            </button>
          </Panel>
          <ul>
            {posts.map((p) => (
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
    // postsIsLoading: state.postsIsLoading,
    // postsHasErrored: state.postsHasErrored
    sort: state.sort
  }
}
export default connect(mapStateToProps)(Category)

Category.propTypes = {
  postsCategory: PropTypes.string,
  title: PropTypes.string.isRequired
}
