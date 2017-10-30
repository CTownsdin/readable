import React from 'react'
import uuidv4 from 'uuid/v4'
import Button from 'muicss/lib/react/button'
import PropTypes from 'prop-types'


/*  Comment schema
{
    "id": "894tuq4ut84ut8v4t8wun89g",
    "parentId": "52c56115-a660-4a56-87f0-3b264e2ba0df",
    "timestamp": 1468166872634,
    "body": "Hi there! I like react too! Comment.",
    "author": "yuppers",
    "voteScore": 9,
    "deleted": false,
    "parentDeleted": false
}
*/

/*
POST /comments
    Add a comment to a post

  PARAMS:
    id: Any unique ID. As with posts, UUID is probably the best here.
    timestamp: timestamp. Get this however you want.
    body: String
    author: String
    parentId: Should match a post id in the database.
*/

export default class CommentForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.comment ? props.comment.id : uuidv4(),
      timestamp: props.comment ? props.comment.timestamp : Date.now(),
      body: props.comment ? props.comment.body : '',
      author: props.comment ? props.comment.author : '',
      parentId: props.parentPost ? props.parentPost.id : '',
      error: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onBodyChange = this.onBodyChange.bind(this)
    this.onAuthorChange = this.onAuthorChange.bind(this)
  }

  onSubmit (e) { // here we validate & show any error, then call props.onSubmit
    e.preventDefault()
    if (!this.state.body || !this.state.author){
      this.setState(() => ({ error: 'Please provide a body and author name.' }))
    }
    else {
      this.setState(() => ({ error: '' }))
      const { id, timestamp, body, author, parentId } = this.state;
      this.props.onSubmit({ id, timestamp, body, author, parentId })
    }
  }
  onBodyChange (e) {
    const body = e.target.value
    this.setState(() => ({ body }))
  }
  onAuthorChange (e) {
    const author = e.target.value
    this.setState(() => ({ author }))
  }

  render () {
    return (
      <div>
        {this.state.error && <strong><em><p>{this.state.error}</p></em></strong>}
        <form onSubmit={this.onSubmit} />
        <textarea type='text' id='body' placeholder='Message...'
          value={this.state.body}
          onChange={this.onBodyChange}
        />
        <input type='text' id='author' placeholder='Your name...'
          value={this.state.author}
          onChange={this.onAuthorChange}
        />
        <Button variant='flat' color='primary' onClick={this.onSubmit}>
          submit
        </Button>
      </div>
    )
  }
}


CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  parentPost: PropTypes.object.isRequired
}
