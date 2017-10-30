import React from 'react'
import uuidv4 from 'uuid/v4'
import Button from 'muicss/lib/react/button'
import PropTypes from 'prop-types'
/*
{
    "id": "ecf65667-f644-4000-929d-8dcd7de37a2e",
    "timestamp": 1491185432393,
    "title": "Learn Redux in 7 minutes!",
    "body": "Just kidding. It takes more than 7 minutes to learn technology!",
    "author": "yawnzers",
    "category": "redux"
}
*/

export default class PostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.post ? props.post.id : uuidv4(),
      timestamp: props.post ? props.post.timestamp : Date.now(),
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      author: props.post ? props.post.author : '',
      category: props.post ? props.post.category : '',
      error: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onBodyChange = this.onBodyChange.bind(this)
    this.onAuthorChange = this.onAuthorChange.bind(this)
    this.onCategoryChange = this.onCategoryChange.bind(this)
  }

  onSubmit (e) { // here we validate & show any error, then call props.onSubmit
    e.preventDefault()
    if (!this.state.title || !this.state.body || !this.state.author ){
      this.setState(() => ({ error: 'Please provide a title, body, and author name.' }))
    }
    else {
      this.setState(() => ({ error: '' }))
      const { id, timestamp, title, body, author, category } = this.state;
      this.props.onSubmit({ id, timestamp, title, body, author, category })
    }

  }
  onTitleChange (e) {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onBodyChange (e) {
    const body = e.target.value
    this.setState(() => ({ body }))
  }
  onAuthorChange (e) {
    const author = e.target.value
    this.setState(() => ({ author }))
  }
  onCategoryChange (e) {
    const category = e.target.value
    this.setState(() => ({ category }))
  }

  render () {
    return (
      <div>
        {this.state.error && <strong><em><p>{this.state.error}</p></em></strong>}
        <form onSubmit={this.onSubmit} />
        <input type='text' id='title' placeholder='Title...'
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea type='text' id='body' placeholder='Message...'
          value={this.state.body}
          onChange={this.onBodyChange}
        />
        <input type='text' id='author' placeholder='Your name...'
          value={this.state.author}
          onChange={this.onAuthorChange}
        />
        <label>
          Select Category:
          <select value={this.state.category} onChange={this.onCategoryChange}>
            <option value='react'>react</option>
            <option value='redux'>redux</option>
            <option value='running'>running</option>
          </select>
        </label>
        <Button variant='flat' color='primary' onClick={this.onSubmit}>
          submit
        </Button>
      </div>
    )
  }
}


PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
